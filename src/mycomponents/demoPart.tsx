export default function DemoPartHome(){
    return(
        <div className=" w-screen bg-gray-50 dark:bg-gray-800 flex  flex-col justify-center items-center  py-10 px-32">
         <div className=" text-center text-gray-900 lg:px-20   dark:text-gray-100 text-5xl font-semibold  ">Pellentesque suscipit
        </div>
         <div className=" text-center text-gray-900 lg:px-20    mt-6 dark:text-gray-100 text-5xl font-semibold  ">
         fringilla libero eu.</div>
         <button className=" m-3 text-white text-lg  mt-5 px-4 py-4 bg-green-500 rounded-sm h-fit w-fit flex flex-row justify-center items-center">
            <span className=" text-center">Give a Demo </span>
            <img src="/Right.png" className=" text-white text-center"/>
         </button>


        </div>
    )
}