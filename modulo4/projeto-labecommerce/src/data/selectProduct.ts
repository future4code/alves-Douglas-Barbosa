import { productsData } from "../types";
import connection from "./connection";

export default async function selectProduct(productId:string):Promise <productsData | undefined> {
    const [result] = await connection("labecommerce_products").select("*").where({id: productId})

    if(result){
        const productType: productsData = {
            id: result.id,
            name: result.name,
            price: result.price,
            image_url: result.image_url
        }
        return productType
    } else {
        return undefined
    }
}