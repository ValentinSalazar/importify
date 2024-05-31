import Link from "next/link";

export default function MarcasCard() {
    return(
        <Link href="/colecciones/adidas" className="text-white bg-secondColor h-24 w-24 rounded-md flex items-center justify-center shadow-lg">
            Adidas
        </Link>
    )
}