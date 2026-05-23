'use server'
import { userModel } from '@/models/userModel'
import connectToDB from '@/configs/db/conection'



type ActionStateType = {
    success: boolean | null,
    error: object,
    message: string
}



export default async function SignupAction(prevState: ActionStateType, formData: FormData): Promise<ActionStateType> {

    try {

        await connectToDB()

        const { firstname, lastname, username, email, password } = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        }


        // Validation


        // is User Exist(Check User Data in DB)




        // return

        if (!firstname || !lastname || !username || !email || !password) {
            return {
                success: false,
                error: {},
                message: 'Please fill in all fields.'
            }
        }



        // SignUp
        await userModel.create({ firstname, lastname, username, email, password })
        return {
            success: true,
            error: {},
            message: 'SignUp is Successfully'
        }





    } catch (error) {

        return {
            success: false,
            error: error as object,
            message: 'create Error'
        }

    }

}

