import { productsInsert, productsData } from './../types';
import {Request, Response} from 'express'
import insertProduct from '../data/insertProduct';

export default async function createProduct(req: Request, res: Response) {
    try {
        
        const {name, price, image_url}:productsInsert = req.body

        if(!name || !price || !image_url){
            throw new Error("Os valores de name, price e image devem ser passados!")
        }

        const productsData: productsData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const answer = await insertProduct(productsData)

        res.status(201).send({ message: answer})
    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}