import { InsertTaks } from "../types/task";
import { connection } from "./baseDataBase";

export default async function insertTask(task: InsertTaks) {
    const { id, title, description, deadline,status, authorId } = task

    await connection('TodoListTask2').insert({
        id,
        title,
        description,
        deadline,
        status,
        author_id:authorId
    })
}