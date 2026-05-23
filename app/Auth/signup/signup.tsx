import signupAction from '@/serverAction/signupAction/signupAction'

export default function signup() {
    return (

        <form action={signupAction} className='flex flex-col gap-7'>
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

            <button className=' bg-amber-50 text-black  h-10  border-2 w-65  rounded-2xl'>Sign up</button>
        </form>

    )
}
