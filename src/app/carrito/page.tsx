import Link from "next/link";
import Footer from "../components/sections/footer/Footer";
import Navbar from "../ui/Navbar/Navbar";
import ContainerCarrito from "./components/ContainerCarrito";

export default function CarritoPage() {
    return (
        <>
        <Navbar />
            <main className="relative pt-20 mx-5 md:w-screen">
                <h1 className="text-2xl text-center py-5 font-medium text-secondColor">Carrito de compra</h1>
                <div className="flex flex-col gap-5 md:flex-row md:px-10">
                    <ContainerCarrito />
                    <aside className="md:fixed md:right-10 lg:right-20">
                        <h3 className="font-medium text-xl text-center">Información de la orden</h3>
                        <div className="pt-5">
                            <h4 className="font-light flex justify-between">Subtotal
                                <span className="font-semibold text-firstColor">$489</span>
                            </h4>

                        </div>
                        <button className="w-full py-3 mt-2 bg-secondColor text-white rounded">Continuar</button>
                        <Link href="/" className="flex justify-center text-sm pt-2 underline font-light hover:opacity-50 transorm transition-opacity duration-200">Politica de cambios y devoluciones</Link>
                    </aside>
                </div>
            </main>
            <Footer />
        </>

    )
}