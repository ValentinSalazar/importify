import Image from "next/image";
import Link from "next/link";

interface Props {
    categoria: string;
    link: string;
}

export default function ImageOffer({ categoria, link }:Props){
    return(
        <Link href="/coleccion/abrigos" className="relative">
            <Image src={link} width={300} height={400} alt="Imagen" className="rounded-t-lg"/>
            <button className="absolute left-0 bottom-0 w-40 h-10 bg-fourthColor rounded-tr-full border-2 border-t-secondColor border-r-secondColor border-l-0 border-b-0 flex items-center justify-center pr-5 font-semibold">
                Ver {categoria}
            </button>
        </Link>
    )
}