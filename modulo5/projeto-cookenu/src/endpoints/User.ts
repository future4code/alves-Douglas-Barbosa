import { Request, Response } from 'express';
import { MissingFields } from '../error/MissingFields';
import UserData from '../data/UserData';
import User from '../model/User';
import Authenticator from '../services/Authenticator';
import GenerateId from '../services/GenerateId';
import { HashManager } from '../services/HashManager';


class UserEndpoint {

    async create(req:Request, res:Response) {
        try {
            const {nome, email, senha} = req.body

            if(!nome || !email || !senha) {
                throw new MissingFields()
            }

            if(senha.length < 6) {
                throw new Error("A senha deve conter no minimo 6 caracters")
            }

            const userData = new UserData()

            const emailAlreadyExist = await userData.getUserByEmail(email)

            if(emailAlreadyExist) {
                throw new Error("Email ja cadastrado")
            }

            const id = new GenerateId().createId();
            const hashPassword = await new HashManager().hash(senha)
            const user = new User(id, nome, email, hashPassword)

            const response = await userData.createUser(user)


            const token = new Authenticator().generateToken(id)

            res.status(201).send({message: response, id})

        } catch (error:any) {
            res.status(error.statusCode || 500).send({ message: error.message})
        }
    }

}

export default UserEndpoint