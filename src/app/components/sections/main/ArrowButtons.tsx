import { IoArrowForward } from "react-icons/io5";
import Arrow from "./Arrow";

export default function ArrowButtons() {
    return(
        <div className='flex justify-between items-center flex-col mb-5'>
            <div className="flex justify-between w-screen my-2">
            <Arrow genero="Hombres" icon={<IoArrowForward className="w-8 h-6"/>} toUrl="/colecciones/hombre" />
            <h3 className='hidden md:block text-xs text-center relative top-1 font-light text-secondColor'>Todos nuestros productos son <b className="text-firstColor font-semibold">originales</b></h3>
            <Arrow genero="Mujeres" icon={<IoArrowForward className="rotate-180 w-8 h-6"/>} toUrl="/colecciones/mujeres"/>
        </div>

            <h3 className='text-sm text-center relative top-1 font-light text-secondColor md:hidden'>Todos nuestros productos son <b className="text-firstColor font-semibold">originales</b></h3>
        </div>
    )
}