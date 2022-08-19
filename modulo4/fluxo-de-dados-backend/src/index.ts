import express, { response } from "express";
import cors from "cors";
import { Product, listProducts } from "./data";

// variavel que tem os poderes de criar endpoints
const app = express();
app.use(cors());
app.use(express.json());


// exercicios que faz mais sentido
// CRUD - Create , Read , Update , Delete

// servidor esta rodando nesse endereço. Startar o backEnd
// endereço base -> http://localhost:3003/primeira-api

app.listen(3003, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3003")
})

// ex1

app.get("/test", (request, response) => {
    response.send({message: "API's is working!"})
})

// ex2 

// ex3 e 7

app.post("/products/create", (req, response) => {
    const {name, price} = req.body

    try {
        if (!name || !price) {
            response.statusCode = 400
            throw new Error("O campo produto ou preço não foi preenchido. Tente novamente")
        }

        if (typeof name !== 'string') {
            response.statusCode = 400
            throw new Error("O campo produto precisa ser um texto entre aspas. Tente novamente")
        }

        if (typeof price !== 'number') {
            response.statusCode = 400
            throw new Error("O campo preço precisa ser um número. Tente novamente")
        }

        if (price <= 0) {
            response.statusCode = 400
            throw new Error("O campo preço precisa ser maior que 0. Tente novamente")
        }
        
        const newProduct: Product = {
            id: Date.now().toLocaleString(),
            name: name,
            price: price
        }
        listProducts.push(newProduct)

        response.send(listProducts)
        
    } catch (error: any) {
        response.status(response.statusCode).send({ message: error.message })
    }
})

// ex4

app.get("/products", (request, response) => {
    response.send(listProducts)
})

// ex5  e 8

app.put("/products/edit/:id", (req, response) => {
    const id = req.params.id
    const price = req.body.price
    try {
        const productFind = listProducts.find((product) => product.id === id)

        if (productFind) {
            if(typeof price !== 'number') {
                response.statusCode = 400
                throw new Error("Erro. O campo precisar um numero!")
            } if (price <= 0) {
                response.statusCode = 400
                throw new Error("O campo preço precisa ser maior que 0. Tente novamente")
            }
            else {
            productFind.price = price  
            }
            
        }

        response.status(200).send({listProducts})
    
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

// ex6 e 9 

app.delete("/products/:id", (req, res) => {
    const id = req.params.id
    try {   
        const findProduct = listProducts.find((prod) => prod.id === id)
        if(findProduct) {
            const deleteProduct = listProducts.findIndex((product) => {
                return product.id === id
            })
            listProducts.splice(deleteProduct, 1)
            res.send({listProducts})
        } else {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})


