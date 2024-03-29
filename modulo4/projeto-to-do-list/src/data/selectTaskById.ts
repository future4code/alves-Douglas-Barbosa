import { connection } from "./baseDataBase";

export default async function selectTaskById(id: string) {

    const [result] = await connection.raw(`
        SELECT tasks.*, users.nickname FROM TodoListTask2 AS tasks
        JOIN TodoListUser AS users
        ON tasks.author_id = users.id
        WHERE tasks.id = '${id}'
    `)


    return result

}