import { userInput, userData } from './../types';
import {Request, Response} from 'express'
import insertUser from '../data/insertUser';

export default async function createUser(req: Request, res: Response) {
    try {
        
        const { name, email, password }:userInput = req.body 

        if(!name || !email || !password){
            throw new Error("Preencha todos os dados!")
        }

        const userInsert: userData= {
            id: Date.now().toString(),
            name,
            email,
            password

        }

        const answer = await insertUser(userInsert)

        res.status(201).send({ message: answer})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}