import Link from "next/link";

export default function CompraAhora() {
    return(
        <Link href="/coleccion/todos" className="flex rounded-md justify-center py-4 font-semibold text-white bg-secondColor text-xl active:opacity-50 hover:opacity-85 transition-opacity">
            Comprá ahora
        </Link>
    )
}