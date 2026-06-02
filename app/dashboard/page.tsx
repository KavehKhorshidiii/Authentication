import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/utils/auth'
import { userModel } from '@/models/userModel';

export default async function Dashboard() {

    const cookieStore = await cookies();
    const myToken = cookieStore.get('token')?.value; // token value


    let isVerifyToken;
    try {
        isVerifyToken = verifyToken(myToken)
    } catch {
        redirect("/")
    }


    
    if (!myToken || !isVerifyToken) {
        redirect("/")
    }



    const userData = await userModel.findById(isVerifyToken.userID).select("firstname")



    return (
        <div>
            <p>Dashboard</p>
            <p>Welcome {userData.firstname}</p>
        </div>
    )
}
