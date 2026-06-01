import { hash } from "bcryptjs" // Hash Password
import jwt from 'jsonwebtoken'; // JWT 



// Hash Password
async function HashPassword(pass) {
    const HashPass = await hash(pass, 12)
    return HashPass
}


// JWT token
async function Token(data) {

    // Token
    const theToken = await jwt.sign(

        {
            ...data,
            iat: Math.floor(Date.now() / 1000),
        },

        process.env.PRIVATE_KEY,

        {
            algorithm: "HS256",
            expiresIn: "7d"
        }

    )

    return theToken
}


export { Token, HashPassword }