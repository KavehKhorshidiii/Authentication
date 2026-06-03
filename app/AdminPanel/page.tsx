import { checkLogin } from "@/utils/auth" // check Login 
import { redirect } from "next/navigation" // Redirect


export default async function AdminPanel() {

    const { userData } = await checkLogin() // check Login 

    if (userData.role !== "Admin"){ redirect('/') } // if Role !== "ADMIN"

    return (
        <div className=" text-3xl w-full h-dvh flex gap-6 p-15 items-center flex-col">
            {userData.firstname} Welcome to Admin Panel
        </div>
    )
}
