'use server'
import { userModel } from '@/models/userModel'
import connectToDB from '@/configs/db/conection'
import { NextResponse } from 'next/server'

export default async function SignupAction(formData) {

    try {

        await connectToDB()

        const { firstname, lastname, username, email, password } = {
            firstname: await formData.get('firstname'),
            lastname: await formData.get('lastname'),
            username: await formData.get('username'),
            email: await formData.get('email'),
            password: await formData.get('password'),
        }


        // Validation
    


        // is User Exist(Check User Data in DB)



        // SignUp
        await userModel.create({ firstname, lastname, username, email, password })











        NextResponse.json({ message: "create is successfully" })

    } catch {

        NextResponse.json({ message: "create Error" })

    }

}

