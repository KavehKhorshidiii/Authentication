import signinAction from "@/serverAction/signinAction/signinAction"; // signin Action
import { useActionState } from "react";

export default function Signin() {

    // useActionState
    const [state, formAction, pending] = useActionState(signinAction, { success: null, error: {}, message: '' })

    return (
        // form
        <form action={formAction} className="flex flex-col gap-7 ">

            {
                // Signin Alerts
                (state.success === false) ? <p className=' p-2 text-red-600 border-red-600 flex items-center justify-center border-2 w-65 rounded-2xl'>{state.message}</p>
                    : (state.success === true) ? <p className=' p-2 text-green-600 border-green-600 flex items-center justify-center border-2 w-65 rounded-2xl'>{state.message}</p> : null
            }
            
            <div className=" flex flex-col gap-2">
                <label>username | email</label>
                <input name="usernameOrEmail" className=" h-13 border-2 w-75  rounded-2xl" type="text" />
                <label>password</label>
                <input name="password" className=" h-13  border-2 w-75  rounded-2xl" type="text" />
            </div>

            <button type="submit" className="bg-amber-50 text-black  h-13  border-2 w-75  rounded-2xl">{pending ? "Loading..." : "Sign in"}</button>

        </form>
    );
}
