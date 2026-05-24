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

        //Get to FormData
        const { firstname, lastname, username, email, password } = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        }

        // Validation
        if (!firstname || !lastname || !username || !email || !password) {
            return {
                success: false,
                error: {},
                message: 'Please fill in all fields.'
            }
        }

        const userExists = await userModel.findOne({ $or: [{ username: username }, { email: email }] }).select('username email')
        if(!!userExists){

        }
        console.log(userExists)

        // exsist -> {_id: new ObjectId('6a12b02993f5c4776f5fa029'), username: 'kaveh-khorshidi', email: 'kavehkhorshidiii@gmail.com' }
        // not Exsist -> null


        // Hash Password
        //GenerateToken

        // SignUp (Create User)
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

