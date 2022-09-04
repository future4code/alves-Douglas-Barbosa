import { Request, Response } from 'express'
import selectPurchaseByUser from '../data/selectPurchaseByUser'
import selectUser from '../data/selectUser'

export default async function getPurchasesByUser(req:Request, res: Response) {
    try {
        const userId = req.params.userId

        const userAlreadyExist = await selectUser(userId)

        if(!userAlreadyExist){
            throw new Error ("Usuario nao encontrado")
        }

        const allPurchases = await selectPurchaseByUser(userId)

        // if(!)

        res.status(200).send(allPurchases)

    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}