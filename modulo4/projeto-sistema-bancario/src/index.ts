import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './data';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
    try {
       const { name, CPF, dateOfBirthAsString } = req.body

        const [day, month, year] = dateOfBirthAsString.split("/")

       const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

       const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()
       const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

       if (ageInYears < 18) {
        res.statusCode = 406
        throw new Error("Idade deve ser maior que 18.")
       }

       const cpfFind = accounts.find((account) => account.CPF === CPF)

       if (cpfFind) {
            res.statusCode = 401
            throw new Error ("CPF já existe!")
        }

       accounts.push({
        name,
        CPF,
        dateOfBirth,
        balance: 0,
        statement: []
       })

       res.status(201).send("Conta criada com sucesso!")
    } catch (error:any) {
        res.send(error.message)
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if (!accounts.length){
            res.statusCode = 404
            throw new Error ("nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error: any) {
        res.send(error.message)
    }
})

app.get("/users/getUserByCPF", (req: Request, res: Response) => {
    try {
        const {CPF} = req.body 

        const accountCPF = accounts.find((account) => account.CPF === CPF)

        if(accountCPF?.CPF === CPF){
            res.status(200).send(accountCPF)
        }

        if(!accountCPF){
            res.status(404).send("CPF não encontrado")
        }

    } catch (error: any) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor está rodando na porta 3003");
});
