import React from "react";

export default function login() {
    return (
        <form className="flex flex-col gap-7 ">
            <div className=" flex flex-col gap-1">
                <label htmlFor="">username</label>
                <input className=" h-10 border-2 w-65  rounded-2xl" type="text" />
                <label htmlFor="">password</label>
                <input className=" h-10  border-2 w-65  rounded-2xl"type="text"/>
            </div>

            <button className="  bg-amber-50 text-black  h-10  border-2 w-65  rounded-2xl">Sign in</button>
        </form>
    );
}
