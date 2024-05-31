import { IoFilter } from "react-icons/io5";


export default function Filtros(){
    return(
        <div className="flex w-[50%] gap-2 items-center justify-center bg-firstColor pl-2">
            <h3 className="text-xl font-semibold">FILTROS</h3>
            <IoFilter size={30}/>
        </div>
    )
}