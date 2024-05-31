import CarouselProducts from "./CarouselProducts";

export default function ThirdSection() {
    return(
        <section className="relative top-20 pb-10">
            <header className="flex flex-col items-center my-5">
                <h1 className="font-medium text-secondColor text-2xl">Explorá nuestras colecciones</h1>
                <h3 className="font-light text-firstColor">¡Haz click en la sección que deseas explorar!</h3>
            </header>
            <CarouselProducts />
        </section>
    )
}