import { hash } from "bcryptjs"
import { cookies } from 'next/headers'


// Hash Password
export default async function HashPassword(pass) {
    const HashPass = await hash(pass, 12)
    return HashPass
}

// JWT token
export function Token(x) {
    const cookie = cookies().set('token',``)

    return
}