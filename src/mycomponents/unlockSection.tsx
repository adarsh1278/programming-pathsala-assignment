export default function UnlockSection(){
    return (
        <div className=" w-full flex justify-center items-center flex-col sm:flex-row p-4">
      <img src="/rafiki.png" className="p-7  mx-4     py-8  px-10  w-2/5"/>

        <div className=" w-full   sm:w-3/5   justify-center  py-3 flex flex-col ">
         <div className=" text-left   text-gray-800 dark:text-white  text-4xl  px-2 font-semibold ">The unseen of spending three
         </div>
         <div className="  text-gray-700 dark:text-white  text-4xl  px-2 pb-4 font-semibold">years at Pixelgrad
         </div>
         <div className=" text-gray-400 pt-3  pr-6 pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sedaccumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</div>
         <button className=" ml-4 mt-6 bg-green-600 dark:bg-green-400 text-white  h-fit w-fit  px-9 rounded-lg  py-4">Learn More</button>
        </div>
        

        </div>
    )
}