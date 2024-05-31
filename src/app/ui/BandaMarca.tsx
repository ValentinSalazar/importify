import Marca from "./Marca";

export default function BandaMarca() {
    return(
        <div className="w-screen h-[60px] flex items-center justify-evenly relative top-20 bg-firstColor">
            <Marca ancho={60} alto={60} icon={"/adidas.svg"} alt={"Icono de Adidas"} />
            <Marca ancho={60} alto={60} icon={"/tnf.svg"} alt={"Icono de Nike"} />
            <Marca ancho={60} alto={60} icon={"/nike-2.svg"} alt={"Icono de The North Face"} />
        </div>
    )
}