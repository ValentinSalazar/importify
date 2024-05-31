import SaleText from "@/app/ui/SaleText";
import GridImages from "./GridImages";

export default function SecondSection() {
    return(
        <section className="bg-secondColor max-w-screen relative top-20 mt-5 pt-5 z-50 pb-10 overflow-hidden">
            <SaleText />
            <header className="flex items-center justify-center flex-col pb-10">
                <h1 className="text-center text-white font-semibold">Aprovechá los ofertas de temporada</h1>
                <h3 className="text-center text-white font-extralight">En <b>Estados Unidos</b> está llegando el verano, <br/>están <b>liquidando</b> sus prendas.</h3>
            </header>
            <GridImages />
        </section>
    )
}