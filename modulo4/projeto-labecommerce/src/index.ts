import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUsers from "./endpoints/getUsers";
import createProduct from "./endpoints/createProduct";
import getProducts from "./endpoints/getProducts";
import createPurchases from "./endpoints/createPurchases";
import getPurchasesByUser from "./endpoints/getPurchaseByUser";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/user', createUser)
app.get('/users', getUsers)

app.post('/products', createProduct)
app.get('/products', getProducts)

app.post('/purchases', createPurchases)
app.get('/users/:userId/purchases', getPurchasesByUser)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app