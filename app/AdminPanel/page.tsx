import { checkLogin } from "@/utils/auth"
import { redirect } from "next/navigation"



export default async function AdminPanel() {
    const { userData } = await checkLogin()

    if (userData.role !== "Admin"){ redirect('/') }

    return (
        <div className=" text-3xl w-full h-dvh flex gap-6 p-15 items-center flex-col">
            {userData.firstname} Welcome to Admin Panel
        </div>
    )
}
