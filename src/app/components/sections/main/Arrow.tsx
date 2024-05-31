import { IoArrowForward } from "react-icons/io5";

import Link from "next/link";

interface Props {
    genero: string,
    icon: React.ReactNode,
    toUrl: string,
}


export default function Arrow({ genero, icon, toUrl}:Props){
    return(
        <Link href={toUrl} className={`text-white`}>
            { (genero) === "Hombres"
                ? <h1 className="xs:text-base flex items-center gap-1 bg-secondColor py-2 rounded-r-full px-5 xs:w-36">{genero} {icon}</h1> 
                : <h1 className="xs:text-base flex items-center gap-1 bg-secondColor py-2 rounded-l-full px-5 xs:w-36">{icon} {genero} </h1>
            }
        </Link>
    )
}