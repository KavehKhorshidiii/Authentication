import Link from "next/link"
import { checkLogin ,logout } from "@/utils/auth"


export default async function Menu() {

    const { isLogin, userData } = await checkLogin()

    return (
        <>
            {isLogin && (<p className=" text-green-700 text-2xl">Welcome {userData.firstname}</p>)}

            <div className="flex gap-4 p-2 border-2 rounded-2xl">
                {isLogin && (<form action={logout}> <button  className="p-2 text-2xl border rounded-xl">Logout</button> </form>)}
                {!isLogin && (<Link href={'/Auth'} className="p-2 text-2xl border rounded-xl">Login</Link>)}
                {isLogin && userData.role === "Admin" && (<Link href={'/AdminPanel'} className="p-2 text-2xl border rounded-xl">Admin Panel</Link>)}
            </div>
        </>
    )
}
