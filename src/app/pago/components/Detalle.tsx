import Link from "next/link";

export default function Detalle() {
    return (
        <aside className="md:fixed md:right-10 lg:right-20">
            <h3 className="font-medium text-xl text-center text-secondColor">Información de la orden</h3>
            <div className="pt-5">
                <h4 className="font-light flex justify-between">Subtotal
                    <span className="font-semibold text-firstColor">$489</span>
                </h4>

            </div>
            <input type="submit" className="w-full py-3 mt-2 bg-secondColor text-white rounded" value="Continuar" />
            <Link href="/" className="flex justify-center text-sm pt-2 underline font-light hover:opacity-50 transorm transition-opacity duration-200">Politica de cambios y devoluciones</Link>
        </aside>
    )
}