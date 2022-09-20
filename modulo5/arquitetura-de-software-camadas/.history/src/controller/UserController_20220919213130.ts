import { UserBusiness } from './../business/UserBusiness';
import {Request, Response } from 'express'
import { stringify } from 'querystring'
import { UserBusiness } from '../business/UserBusiness'
import { CreateNewUser } from '../models/User'

export class UserController {
    public signup = async (req: Request, res: Response) => {

        try {
            const {name, email, password} = req.body

            const newUser: CreateNewUser = {
                name: name, 
                email: email,
                password: password
            }

            const userBusiness = new UserBusiness()

            const user = await UserBusiness.signup(newUser)

            res.status(201).send(newUser)
            
        } catch (error) {
            
        }
    }
}