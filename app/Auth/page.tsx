'use client'
import Singup from '@/app/Auth/singup/signup'
import Singin from '@/app/Auth/singin/singin'
import { useState } from 'react'



export default function Auth() {

    const [SigninOrSignup, setSigninOrSignup] = useState(true)
    const [activeSignin , setActiveSignin] = useState(true)
    const [activeSignup , setActiveSignup] = useState(false)


    const BtnFuncSignin = () => {
        setSigninOrSignup(true)
        setActiveSignin(true)
        setActiveSignup(false)
    }
    const BtnFuncSignup = () => {
        setSigninOrSignup(false)
        setActiveSignin(false)
        setActiveSignup(true)
    }

    return (
        <div className=' flex flex-col gap-5'>
            {SigninOrSignup ? <Singin></Singin> : <Singup></Singup> }
            <div className=' gap-2 flex justify-center'>
                <button onClick={BtnFuncSignin} className={` ${activeSignin ? ' bg-amber-50 shadow-inner shadow-black border-amber-50' : ''} p-1 border-2 text-black  bg-amber-50 rounded-2xl`}>Singin</button>
                <button onClick={BtnFuncSignup} className={` ${activeSignup ? ' bg-amber-50 shadow-inner shadow-black border-amber-50' : ''} p-1 border-2 shadow-inner text-black  bg-amber-50 rounded-2xl`}>Singup</button>
            </div>
        </div>
    )

}
