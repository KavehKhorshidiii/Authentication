import { hash } from "bcryptjs" // Hash Password
import jwt from 'jsonwebtoken'; // JWT 
import { cookies } from "next/headers";
import { userModel } from "@/models/userModel";
import connectionToDB from "@/configs/db/connection";



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

// verify Token
function verifyToken(token) {

    try {

        const TokenValidationResult = jwt.verify(token, process.env.PRIVATE_KEY)
        return TokenValidationResult

    } catch (err) {

        console.log("Verify Token Error", err)
        return false

    }

}

// CheckLogin
async function checkLogin() {

    await connectionToDB()
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value


    try {
        const isVerifyToken = verifyToken(token)
        const userData = await userModel.findById(isVerifyToken.userID)

        if (userData && isVerifyToken) {
            return { isLogin: true, userData: userData }
        } else {
            return { isLogin: false, userData: {} }
        }

    } catch {
        return { isLogin: false, userData: {} }
    }

}



export { Token, HashPassword, verifyToken, checkLogin }



