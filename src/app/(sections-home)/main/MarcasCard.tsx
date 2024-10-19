import Image from "next/image";
import Link from "next/link";

interface Props {
    image: string;
}

export default function MarcasCard({image}:Props) {
    return(
        <Link href="/colecciones/adidas" className="text-white bg-secondColor h-24 w-24 rounded-md flex items-center justify-center shadow-lg active:opacity-50 hover:opacity-85 transition-opacity">
            <Image src={image} alt={""} width={80} height={80}/>
        </Link>
    )
}