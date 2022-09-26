import { Console } from "console"
import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, ISignupOutputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public signup = async (input: ISignupInputDTO) => {
        const { name, email, password } = input

        if(typeof name !=="string") {
            throw new Error("Parametro name invalido")
        }

        if(name.length < 3) {
            throw new Error ("Parametro Inválido, o name deve ter no minimo 3 caracteres")
        }

        if(password.length < 6){
            throw new Error("Parametro inválido, a senha deve ter no minimo 6 caracteres")
        }

        if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi)) {
            throw new Error ("Email no formato invalido")
        }

        const isEmailAlreadyExist = await this.userDatabase.findByEmail(email)
        if(isEmailAlreadyExist){
            throw new Error("Esse email já existe")
        }

        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(password)

        const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL)
        
        await this.userDatabase.createUser(user)

        const payload:ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }
        const token = this.authenticator.generateToken(payload)

        const response:ISignupOutputDTO = {
            message: `Usuario "${user.getName()}" cadastrado com sucesso`,
            token
        }

        return response
    }

    public login = async(input: ILoginInputDTO) => {
        const {email, password } = input

        if(password.length < 6){
            throw new Error("Parametro inválido, a senha deve ter no minimo 6 caracteres")
        }

        if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi)) {
            throw new Error ("Email no formato invalido")
        }

        const userDB = await this.userDatabase.findByEmail(email)
       
        if(!userDB){
            throw new Error("Esse email não existe")
        }


        // const isPasswordCorrect = await this.hashManager.compare(password,)

        
        // await this.userDatabase.createUser(user)

        // const payload:ITokenPayload = {
        //     id: user.getId(),
        //     role: user.getRole()
        // }
        // const token = this.authenticator.generateToken(payload)

        // const response:ISignupOutputDTO = {
        //     message: `Usuario "${user.getName()}" cadastrado com sucesso`,
        //     token
        // }

        // return response
    }
}