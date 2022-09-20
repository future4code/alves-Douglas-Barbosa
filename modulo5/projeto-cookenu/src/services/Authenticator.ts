import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();


class Authenticator {

    generateToken(id: string): string {
        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRATION_TIME
            }
        );

        return token
    }

    verifyToken(token: string) {

        const payload = jwt.verify(
            token, process.env.JWT_KEY as string)

        return payload
    }
}

export default Authenticator