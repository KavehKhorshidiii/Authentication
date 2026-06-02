import signinAction from "@/serverAction/signinAction/signinAction";
import { useActionState } from "react";

export default function Signin() {

    const [state, formAction, pending] = useActionState(signinAction, { success: null, error: {}, message: '' })

    return (
        <form action={formAction} className="flex flex-col gap-7 ">
            {
                // Signup Alerts
                (state.success === false) ? <p className=' p-2 text-red-600 border-red-600 flex items-center justify-center border-2 w-65 rounded-2xl'>{state.message}</p>
                    : (state.success === true) ? <p className=' p-2 text-green-600 border-green-600 flex items-center justify-center border-2 w-65 rounded-2xl'>{state.message}</p> : null
                    
            }
            
        
            <div className=" flex flex-col gap-1">
                <label htmlFor="">username | email</label>
                <input name="usernameOrEmail" className=" h-10 border-2 w-65  rounded-2xl" type="text" />
                <label htmlFor="">password</label>
                <input name="password" className=" h-10  border-2 w-65  rounded-2xl" type="text" />
            </div>

            <button type="submit" className=" bg-amber-50 text-black  h-10  border-2 w-65  rounded-2xl">{pending ? "Loading..." : "Sign in"}</button>
        </form>
    );
}
