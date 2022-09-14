import { purchaseData } from './../types';
import { Request, Response } from 'express'
import selectUser from '../data/selectUser'
import selectProduct from '../data/selectProduct';
import insertPurchase from '../data/insertPurchase';

export default async function createPurchases(req: Request, res: Response) {
    try {

        const {userId, productId, quantity} = req.body

        if(!userId || !productId || !quantity) {
            throw new Error("Preencha todos os valores")
        }

        const userAlreadyExist = await selectUser(userId)

        if(!userAlreadyExist){
            throw new Error ("Usuario nao encontrado")

        }

        const productAlreadyExist = await selectProduct(productId)

        if(!productAlreadyExist){
            throw new Error("produto não encontrado!")
        }

        const totalPrice = productAlreadyExist.price * quantity

        const purchase:purchaseData ={
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        const answer = await insertPurchase(purchase)

        res.status(201).send({ message: answer})

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}