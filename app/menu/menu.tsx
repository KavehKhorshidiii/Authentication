'use client'
import Link from "next/link"
import { checkLogin } from "@/utils/auth"



export default function Menu() {

    //const x =  checkLogin()
    //console.log(x)

    return (
        <div className="flex gap-4 p-2 border-2 rounded-2xl">

            <Link href={'/Auth'} className="p-2 text-2xl border rounded-xl">Login</Link>
            <Link href={''} className="p-2 text-2xl border rounded-xl">Logout</Link>
            <Link href={''} className="p-2 text-2xl border rounded-xl">Dashboard</Link>
            <Link href={''} className="p-2 text-2xl border rounded-xl">Admin Panel</Link>
        </div>
    )
}
