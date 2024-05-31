import CarouselGarantias from "./CarouselGarantias";

export default function FifthSection(){
    return(
        <section className="relative top-20 bg-firstColor fifth__section pb-10">
            <h1 className="text-4xl font-semibold text-white text-center">¿Estás dudando?</h1>
            <h3 className="text-white text-lg text-center pb-10 font-extralight sm:px-5">Para brindarles <b>confianza</b> a nuestros clientes, <b>garantizamos</b> lo siguiente</h3>
            <CarouselGarantias />
        </section>
    )
}