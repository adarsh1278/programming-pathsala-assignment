 interface cardInterface{
    url:String,
    heading:String,
    descr:String

 } 

export default function Card({ url ,heading , descr}:cardInterface){
   let s = heading.split(" ")

    return(
        <div className=" m-2  w-96 h-96     shadow-xl  rounded-md  py-6  px-12 flex flex-col justify-center items-center ">
            <img src={url.toString()} className="w-20 h-20 rounded-full" alt="no"/>
             <div className="  text-2xl font-semibold dark:text-white text-slate-900 ">{s[0]}</div>
             <div className=" pb-3 text-2xl font-semibold dark:text-white text-slate-900 ">{s[1]}</div>
             <div className=" text-center  py-1 text-gray-400 ">{descr}</div>
        </div>
    )
}