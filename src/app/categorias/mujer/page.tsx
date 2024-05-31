import getData from "@/app/helpers/getData"
import GridProduct from "../components/GridProduct"
import Link from "next/link"
import { IoArrowBack, IoFilter } from "react-icons/io5"

export default async function MujerPage() {

    const data = await getData('https://fakestoreapi.com/products')

    return (
        <>
            <h1 className="px-5 text-firstColor text-2xl font-medium text-left">Mujer</h1>
            <section className="flex flex-col items-center">
                <header className="flex gap-5 py-5 justify-center">
                    <Link href="/" className="flex text-secondColor justify-center items-center gap-1 border border-secondColor rounded-lg px-5 py-1 min-w-[150px]">
                        <IoArrowBack size={24} />Volver
                    </Link>
                    <button className="min-w-[150px] rounded-lg py-1 px-5 border border-secondColor flex items-center justify-center gap-1">
                        Filtros
                        <IoFilter size={20}/>
                    </button>
                </header>
                <GridProduct />
            </section>
        </>
    )
}