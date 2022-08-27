import { Request, Response } from "express"
import connection from "./connection"
import app from "./app"

// Esse arquivo seria o index.ts

// //    const getActorById = async (id: number): Promise<any> => {
// //      const result = await connection.raw(`
// //        SELECT * FROM Actor WHERE id = '${id}'
// //      `)

// //        return result[0][0]
// //    }


// //    // Assim a chamada funciona fora dos endpoints com .then()/.catch
//    getActorById(8)
//        .then(result => {
//            console.log(result)
//        })
//        .catch(err => {
//            console.log(err)
//        });

// //    // Assim a chamada funciona fora dos endpoints com await
// //    (async () => {
// //      console.log(await getActorById(8) )
// //    })()


// //    // Ou então podemos chamá-la dentro de um endpoint
// //    app.get("/users/:id", async (req: Request, res: Response) => {
// //      try {
// //        const id =  Number(req.params.id)

// //        console.log(await getActorById(id))

// //        res.end()
// //      } catch (error: any) {
// //            console.log(error.message)
// //        res.status(500).send("Unexpected error")
// //      }
// //    }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

// 1 A - A resposta que temos é o retorno da pessoa, em si.

// 1 B)

app.get("/users/:name", async (req: Request, res: Response) => {
    try {
    const name: string  = req.params.name
 
    if(!name) {
     res.statusCode = 401
     throw new Error("Você não passou parâmetro nome")
    }
 
    const result = await connection("Actor")
    .where({
     name: name 
    })
 
    res.send(result)
 
    } catch (error: any) {
     res.status(res.statusCode || 500).send({message: error.message})
    }
 })


 // 1 C

app.get("/actor/:gender", async(req: Request, res: Response) => {
    try {
     const gender = req.params.gender

    if(!gender) {
        res.statusCode = 404
        throw new Error("Informe um gênero")
    }
    const [result] = await connection.raw(`
     SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)

    res.send(result)
    } catch (error: any ) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})
 const SelectID = async (id: number): Promise<any> => {
    const [result] =  await connection.raw(`
    SELECT * FROM Actor WHERE id = ${id} `)
    console.log(result)
    return result
 }


 // Exercicio 2

 const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

// 1- A)

app.put("/actor/:id", async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id) 
        const salary = req.body.salary as number
        const usuario =  await SelectID(id)


        if(!id) {
        res.statusCode = 404
        throw new Error("Informe um ID")
        }

        if(!usuario.length) {
            res.statusCode = 401
            throw new Error("Não encontramos ID!")
        }

        if(!salary) {
        res.statusCode = 402
        throw new Error("Informe o sálario que deve ser atualizado")
        }

        await connection("Actor")
        .update({
            salary: salary
        })
        .where({
            id:  id 
        })

        res.send("Ator teve seu sálario atualizado")

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }

})

// b)

const deleteActor = async (id: number): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

  // c)

  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

  // Exercicio 3

  // a)

  app.get("/actors/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const user =  await SelectID(id)
    
        if(!id) {
         res.statusCode = 404
         throw new Error("Informe um ID")
        }
    
        if(!user.length) {
         res.statusCode = 401
         throw new Error("Seu ID não bate com o do Banco de dados")
        }
    
        const result = await connection("Actor")
        .where({id: id })
    
        res.send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    
    }
    })

    // b)

    app.get("/actors", async (req: Request, res: Response) => {
        try {
    
        const gender = req.query.gender as string 
    
        if(!gender) {
          res.statusCode = 404
          throw new Error("Informe um gênero")
        }
    
        const result = await connection("Actor")
        .count("*")
        .where({gender: gender})
    
    
        res.send(result)
        } catch (error: any) {
            res.status(res.statusCode || 500).send({message: error.message})
    
        }
    })

    // Exercicio 4

    app.post("/actor", async (req: Request, res: Response) => {
        try {
          await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.salary
          );
      
          res.status(200).send();
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }});

// b)

// 4 B
app.delete("/actor/:id",async (req: Request, res: Response) => {
    try {
     const  id = Number(req.params.id)
     const usuario = await SelectID(id)
     if(!usuario.length) {
      res.statusCode = 401
      throw new Error("Não autorizado")

     }
     if(!id) {
        res.statusCode = 404
        throw new Error("Coloque um ID")
     }

     await deleteActor(id)

     res.end

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}) 