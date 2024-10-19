import Link from "next/link";
import InfoCompras from "./InfoCompras";

export default function FourthSection() {
    return (
        <section className="relative top-20 bg-firstColor py-10 flex flex-col md:flex-row">
            <div>
                <h1 className="text-4xl font-semibold text-white text-center ">¿Cómo comprar?</h1>
                <h3 className="text-lg text-center text-white font-extralight pb-3">¡Haz clíck en tu preferencia!</h3>
                <InfoCompras />
            </div>

            <Link href="" className="w-[310px] h-[34px] self-center bg-secondColor px-4 py-2 text-white md:hidden text-sm text-center font-semibold rounded">
                Comprá en nuestra web sin registrate
            </Link>

            <div className="text-white [&>div>h1]:font-semibold [&>div>p]:font-extralight px-10 flex flex-col gap-3">
                <header>
                <h1 className="text-3xl font-semibold text-white pt-10 md:pt-0">Realizá tu compra</h1>
                <h3 className="text-lg text-white font-extralight pb-3">¡En 3 sencillos pasos!</h3>
                </header>
                <div>
                    <h1>1. Elige tus productos favoritos</h1>
                    <p>Agregá los productos al carrito,
                        completá tus datos y continúa.</p>
                </div>
                <div>
                    <h1>2. Realizá el pago</h1>
                    <p>Elige tu medio de pago favorito y realizá
                        el pago correspodiente a tu compra.</p>
                </div>
                <div>
                    <h1>3. Recibí o retirá tus productos</h1>
                    <p>Aguardá por tu pedido en caso
                        de haber elegido envió a domicilio.
                        En otro caso, podrás retirar tus pedidos
                        en nuestras oficinas.</p>
                </div>
            </div>

        </section>
    )
}