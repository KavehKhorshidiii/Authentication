import signupAction from '@/serverAction/signupAction/signupAction'
import { useActionState } from 'react'



export default function Signup() {

    const [state, formAction, pending] = useActionState(signupAction, { success: null, error: {}, message: '' })


    return (

        <form action={formAction} className='flex flex-col gap-7'>

            {
                // Signup Alerts
                (state.success === false) ? <p className=' p-2 text-red-600 border-red-600 flex items-center justify-center border-2 w-65 rounded-2xl'>{state.message}</p>
                : (state.success === true) ? <p className=' p-2 text-green-600 border-green-600 flex items-center justify-center border-2 w-65 rounded-2xl'>{state.message}</p> : null

            }

            <div className=' flex flex-col gap-1'>
                <label htmlFor="">Firstname</label>
                <input name="firstname" className=' h-10 border-2 w-65 rounded-2xl' type="text" />
                <label htmlFor="">Lastname</label>
                <input name="lastname" className=' h-10  border-2 w-65 rounded-2xl' type="text" />
                <label htmlFor="">Username</label>
                <input name="username" className=' h-10  border-2 w-65 rounded-2xl' type="text" />
                <label htmlFor="">Email</label>
                <input name="email" className=' h-10  border-2 w-65 rounded-2xl' type="text" />
                <label htmlFor="">Password</label>
                <input name="password" className=' h-10  border-2 w-65 rounded-2xl' type="text" />
            </div>

            <button className=' bg-amber-50 text-black  h-10  border-2 w-65  rounded-2xl'>{pending ? 'Loading...' : 'Sign up'}</button>
            
        </form>

    )
}
