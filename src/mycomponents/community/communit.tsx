import Card from "./card"
export default function Community(){
    return (
        <div className=" m-5 w-full bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center items-center px-6 py-3">
           <div className="text-4xl font-semibold ">Manage Your entire community</div>
           <div className="text-4xl font-semibold  text-center ">in A single system</div>
           <div className=" text-gray-400  text-center justify-evenly dark:text-gray-100 py-4 w-full  max-w-screen">Who is nextcent suitable for?</div>
            <div className=" flex flex-col sm:flex-row p-7     w-full  justify-evenly items-center  flex-grow-0">
                <Card  url="/Icon (1).png" heading="Community Managers" descr="Our membership management
software provides full automation of
embership renewals and payments."></Card>
                <Card  url="/Icon (2).png" heading="National Associations" descr="Manage your community with easeOur membership management oftware provides full automation of membership renewals and payments."></Card>
                <Card  url="/Icon (3).png" heading="Clubs 
Groups" descr="Our membership management
software provides full automation of
membership renewals and payments."></Card>
            </div>
        </div>
    )
}