'use client'

import Link from "next/link";
import Direccion from "./components/Direccion";
import { useState } from "react";
import Retirar from "./components/Retirar";

export default function PagoPage() {

    const [isToSent, setIsToSent] = useState(false)

    function onChangeShipping() {
        setIsToSent(!isToSent)
    }

    return (
        <>
            <h1 className="text-2xl text-center py-5 font-medium text-secondColor">Realizar pago</h1>

            <section className="min-h-80">
                <header className="flex justify-center [&>button]:min-w-[150px] rounded">
                    <button onClick={onChangeShipping} className={`${(isToSent) ? 'bg-secondColor text-white' : 'bg-white text-secondColor'} px-5 py-2 w-[50%] rounded-l border-l border-secondColor border-t border-b text-sm`}>Envíar mi pedido</button>
                    <button onClick={onChangeShipping} className={`${(isToSent) ? '' : 'border-l border-t border-b bg-secondColor text-white'} w-[50%] rounded-r border-r border-t border-b border-secondColor text-sm`}>Retirar mi pedido</button>
                </header>
                {
                    (isToSent) ? <Direccion /> : <Retirar />
                }
            </section>
            <aside className="md:fixed md:right-10 lg:right-20">
                <h3 className="font-medium text-xl text-center text-secondColor">Información de la orden</h3>
                <div className="pt-5">
                    <h4 className="font-light flex justify-between">Subtotal
                        <span className="font-semibold text-firstColor">$489</span>
                    </h4>

                </div>
                <button className="w-full py-3 mt-2 bg-secondColor text-white rounded">Continuar</button>
                <Link href="/" className="flex justify-center text-sm pt-2 underline font-light hover:opacity-50 transorm transition-opacity duration-200">Politica de cambios y devoluciones</Link>
            </aside>
        </>
    )
}