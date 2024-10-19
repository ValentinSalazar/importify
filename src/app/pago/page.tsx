'use client'

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

            <section className="min-h-80 flex flex-col md:w-[60%]">
                <header className="flex justify-center [&>button]:min-w-[150px] rounded md:justify-start">
                    <button onClick={onChangeShipping} className={`${(isToSent) ? 'bg-secondColor text-white' : 'bg-white text-secondColor'} px-5 py-2 w-[50%] rounded-l border-l border-secondColor border-t border-b text-sm max-w-[200px]`}>Envíar mi pedido</button>
                    <button onClick={onChangeShipping} className={`${(isToSent) ? '' : 'border-l border-t border-b bg-secondColor text-white'} w-[50%] rounded-r border-r border-t border-b border-secondColor text-sm max-w-[200px]`}>Retirar mi pedido</button>
                </header>
                {
                    (isToSent) ? <Direccion /> : <Retirar />
                }
                
            </section>

        </>
    )
}