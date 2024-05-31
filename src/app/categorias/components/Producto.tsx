import Image from "next/image";
import Link from "next/link";

export default function Producto() {
    return(
        <Link href="" className="flex flex-col gap-1">
            <Image src={"/mainImg1.webp"} alt={""} width={150} height={200} className="rounded-t"/>
            <h1 className="text-sm">Abrigo The North Face</h1>
            <p className="text-black/50 text-xs">The North Face</p>
            <footer className="flex items-center justify-between text-sm">
                <h3 className="text-firstColor font-semibold text-xl">$69.99</h3>
                <h3 className="px-3 py-1 bg-firstColor rounded text-white hover:opacity-75 transition-opacity duration-200">Ver</h3>
            </footer>
        </Link>
    )
}