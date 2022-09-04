import connection from "./connection";

export default async function selectPurchaseByUser(userId:string) {
    const result = await connection.raw(`
    select 
    labecommerce_users.id as IdPessoa , labecommerce_users.name as NomePessoa,labecommerce_products.name as NomeProduto, labecommerce_purchases.id as IdCompra , labecommerce_purchases.quantity as Quantidade, labecommerce_purchases.total_price as PrecoTotal
    from labecommerce_purchases
    inner join labecommerce_users 
    on
    labecommerce_purchases.user_id = labecommerce_users.id
    inner join labecommerce_products 
    on
    labecommerce_purchases.product_id = labecommerce_products.id
    where labecommerce_users.id = "${userId}"
    `)

    return result[0]
}