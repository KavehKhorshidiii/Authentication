import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/utils/auth'

export default async function dashboard() {

    const cookieStore = await cookies();
    const myToken = cookieStore.get('token')?.value; // token value


    const isVerifyToken = verifyToken(myToken)
   

    if(!myToken || !isVerifyToken){
        redirect("/")
    }

    
    return (
        <div>
            Dashboard
        </div>
    )
}
