import { connection } from "./baseDataBase";
import { User } from "../types/user";

export default async function updateUser(id: string, user: User) {
    const { name, nickname, email } = user

    if (name) {
        await connection.raw(`
            UPDATE TodoListUser
            SET name = '${name}'
            WHERE id = '${id}'
        `)
    }

    if (nickname) {
        await connection.raw(`
            UPDATE TodoListUser
            SET name = '${nickname}'
            WHERE id = '${id}'
        `)
    }

    if (email) {
        await connection.raw(`
            UPDATE TodoListUser
            SET name = '${email}'
            WHERE id = '${id}'
        `)
    }

}