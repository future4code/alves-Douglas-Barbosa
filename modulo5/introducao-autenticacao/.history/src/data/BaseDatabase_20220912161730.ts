import knex from "knex"
import dotenv from "dotenv"

dotenv.config()


class BaseDataBase {

    // Se tiver conexao , ele é knex , senao ele é null
    private connection: knex | null = null;

    protected getConnection() {
        // senao tiver conexao com o banco de dados , cria uma !
        if (!this.connection) {
            this.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    database: process.env.DB_SCHEMA,
                    password: process.env.DB_PASSWORD,
                    port: 3306
                }
            })
        }

        return this.connection
    }
}

export default BaseDataBase