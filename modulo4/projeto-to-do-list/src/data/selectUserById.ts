import { connection } from "./baseDataBase";
import { UserData } from "../types/user";

export default async function selectUserById(id: string): Promise<UserData | undefined> {

    const [result] = await connection('TodoListUser')
        .select('id', 'nickname')
        .where({ id })

    const userData: UserData = {
        id: result.id,
        nickname: result.nickname
    }

    return userData
}