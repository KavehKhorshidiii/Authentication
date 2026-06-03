import Menu from "./menu/menu" // menu


export default function page() {

    return (
        <div className=" w-full h-dvh flex gap-6 p-15 items-center flex-col ">
            <h1 className=" text-5xl">Home</h1>
            <Menu></Menu> 
        </div>
    )

}
