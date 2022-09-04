import { type } from "os";
import { productsData } from "../types";
import connection from "./connection";


const productsType = (product: any) => {
    const typeProduct:productsData ={
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
    }
    return typeProduct
}

export default async function selectAllProducts():Promise<productsData[] | undefined> {
    const result = await connection("labecommerce_products")

    const allProductsType = result.map((product) => {
        return productsType(product)
    })

    return allProductsType
}