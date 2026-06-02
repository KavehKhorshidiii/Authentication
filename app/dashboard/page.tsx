import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/utils/auth'
import { userModel } from '@/models/userModel';

export default async function dashboard() {

    const cookieStore = await cookies();
    const myToken = cookieStore.get('token')?.value; // token value


    const isVerifyToken = verifyToken(myToken)


    if (!myToken || !isVerifyToken) {
        redirect("/")
    }

    const userData = await userModel.findOne({ $or: [{ username: isVerifyToken.usernameOrEmail }, { email: isVerifyToken.usernameOrEmail }, { email: isVerifyToken.email }] }).select("firstname")

    
    return (
        <div>
            <p>Dashboard</p>
            <p>Welcome {userData.firstname}</p>
        </div>
    )
}
