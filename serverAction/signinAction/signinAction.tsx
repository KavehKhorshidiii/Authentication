

'use server'


import { userModel } from "@/models/userModel" // Model
import connectionToDB from "@/configs/db/connection" // DataBase Connection
import bcrypt from "bcryptjs" // bcrypt
import { redirect } from "next/navigation" // redirect
import { cookies } from "next/headers" // Cookie
import { Token } from '@/utils/auth' // roken


type ActionStateTypes = {
    success: boolean | null,
    error: object,
    message: string
}


export default async function SigninAction(prevState: ActionStateTypes, formData: FormData) {

    // connect to database
    await connectionToDB()

    // Get to FormData
    const { usernameOrEmail, password } = {
        usernameOrEmail: formData.get("usernameOrEmail"),
        password: formData.get("password")
    }

		// Validation
    if (!usernameOrEmail || !password) {
        return {
            success: false,
            error: {},
            message: 'Please fill in all fields.'
        }
    }

    // User Exists 
    const userExists = await userModel.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] }).select("_id , password")

    // user Exists Check
    if (!userExists) {

        return { success: false, error: {}, message: "This username or email does not exist." }

    } else {

        // password Check
        const isMatch = await bcrypt.compare(password as string, userExists.password)

        // password condition
        if (isMatch) {

            const TheToken = await Token({ userID: userExists._id})

            const cookie = await cookies()
            cookie.set('token', TheToken, {
                // http Only Cookie
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7,  // 1Week
                path: '/'
            })

            redirect("/")
        } else {
            return { success: false, error: {}, message: `The password is incorrect.` }
        }

    }


}
