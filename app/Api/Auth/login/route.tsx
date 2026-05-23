// import mongoose from "mongoose";
// import { userModel } from "@/models/userModel";
// import { NextResponse } from "next/server";
// import ConnectToDB from '@/configs/db/conection'

// export async function POST(req: Request) {
//     try {
//         await ConnectToDB()
//         const { firstname, lastname, username, email, password } = await req.json()

//         // Validation
//         if (firstname.trim() || lastname.trim() || username.trim() || email.trim() || password.trim()) {

//             return NextResponse.json({ message: "data is not Valid !" })

//         }

//         // is User Exist(Check User Data in DB)
//         //const checkuser = userModel.find()



//         // create
//         //await userModel.create()




        
//         return NextResponse.json({ message: "Login is Successfully" , Data:{firstname, lastname, username, email, password} })

//     } catch (err) {
//         return NextResponse.json({ message: err })
//     }
// } 