'use server'
import { userModel } from '@/models/userModel'
import connectToDB from '@/configs/db/connection'
import { HashPassword } from '@/utils/auth'
import { Token } from '@/utils/auth'
import { cookies } from "next/headers" // Cookie
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


// prev State And OutPut type
type ActionStateType = {
    success: boolean | null,
    error: object,
    message: string
}



export default async function SignupAction(prevState: ActionStateType, formData: FormData): Promise<ActionStateType> {

        // DB Connection
        await connectToDB()

        // Users Length
        const usersLength = await userModel.countDocuments() // usersLength.length === 0 ? "Admin" : "USER"

        //Get to FormData
        const { firstname, lastname, username, email, password, role } = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            role: usersLength === 0 ? "Admin" : "USER"
        }

        // Validation
        if (!firstname || !lastname || !username || !email || !password) {
            return {
                success: false,
                error: {},
                message: 'Please fill in all fields.'
            }
        }

        // is User Exist 
        const userExists = await userModel.findOne({ $or: [{ username: username }, { email: email }] }).select('username email')
        if (!!userExists) {
            if (userExists.username === username) { return { success: false, error: {}, message: "A user has already registered with this username." } } else {
                return { success: false, error: {}, message: "A user has already registered with this email." }
            }
        }

        // Hash Password
        const HashPass: string = await HashPassword(password)

        // SignUp (Create User)
        const newUser = await userModel.create({ firstname, lastname, username, email, password: HashPass, role })
        
        //GenerateToken
        const TheToken = await Token({ userID : newUser._id })

        // Cookie
        const cookie = await cookies()
        cookie.set('token', TheToken, {
            // http Only Cookie
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,  // 1Week
            path: '/'
        })
        
        
        // Revalidate Home Page
        revalidatePath('/')
        
        redirect('/')



}

