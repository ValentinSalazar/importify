'use client'


import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react"

export default function InfoCompras() {

    const [infoCompra, setInfoCompra] = useState(true)

    return(
        <div className="px-10 pb-10 flex justify-center flex-col items-center gap-3 text-white font-extralight">
            <header className="rounded shadow-2xl flex justify-between gap-2 border border-secondColor">
                <button onClick={() => { setInfoCompra(!infoCompra) }}
                className={`w-[150px] ${infoCompra ? 'bg-secondColor rounded text-white px-2 py-1 font-medium' : ''}`}>
                    Stock Inmediato
                </button>
                <button onClick={() => { setInfoCompra(!infoCompra) }}
                className={`w-[150px] ${!infoCompra ? 'bg-secondColor rounded text-white px-2 py-1 font-medium' : ''}`}>
                    Por encargues</button>
            </header>
            <div className="min-h-60 flex flex-col gap-3">
                { infoCompra === true  ? <StockInmediato /> : <PorEncargue /> }
            </div>
        </div>
    )
}

function StockInmediato() {
    return(
        <>
            <p className="text-base max-w-[90vw]">En nuestras <b>oficinas</b> contamos con <b>stock </b> 
                de  productos los cuales podrás retirar 
                <b> en el momento</b> que desees.
            </p>
            <p className="text-base max-w-[90vw]">
                También podrás pedir <b>Envíos a Domicilios</b>
                <b> en todo el país</b>, no importa donde estés.
            </p>
            <footer className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <FaLocationDot size={20}/>
                    <h3>José Hernandez 2729, CABA.</h3>
                </div>
                <div className="flex gap-2">
                    <FaLocationDot size={20}/>
                    <h3>EntreRios 1200, Rosario.</h3>
                </div>
            </footer>
        </>
    )
}

function PorEncargue() {
    return(
        <>
            <p className="text-base max-w-[90vw]">Deberás dirigirte a la <b>sección</b> de 
                productos <b>por encargues</b> y allí encontrarás productos que solo
                <b> importamos</b> en esta modalidad. 
            </p>
            <p>
            Pagarás una seña del <b>20%</b> del pedido y el saldo restante, cuando lo retires.
            </p>
            <p>Una vez realizado el pedido, tomará de a 10 a 15 días en llegarte a tu domicilio.</p>
        </>
    )
}