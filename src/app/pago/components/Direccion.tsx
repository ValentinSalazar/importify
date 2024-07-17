export default function Direccion() {
    return (
        <>
            <p className="text-sm pt-3 text-center">Por favor completá tus datos correctamente para poder enviar tu pedido.</p>
            <form action="" className="py-2">
                <div className="flex flex-col py-3 gap-3 [&>input]:outline-none [&>input]:border [&>input]:rounded [&>input]:py-2 [&>input]:pl-2 [&>input]:border-secondColor [&>input]:placeholder:text-secondColor [&>input]:text-sm">
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                </div>

                <div className="flex flex-col gap-3">
                    <input type="text" placeholder="Provincia" className="outline-none border rounded py-2 pl-2 border-secondColor text-secondColor text-sm placeholder:text-secondColor w-[100%]" />
                    <input type="text" placeholder="Ciudad" className="outline-none border rounded py-2 pl-2 border-secondColor text-secondColor text-sm placeholder:text-secondColor w-[100%]" />
                </div>

                <div className="flex [&>input]:outline-none [&>input]:border [&>input]:rounded [&>input]:py-2 [&>input]:pl-2 [&>input]:border-secondColor [&>input]:placeholder:text-secondColor [&>input]:text-sm [&>input]:w-[100px] justify-between gap-3 py-3">
                    <input type="text" placeholder="Piso" />
                    <input type="text" placeholder="Depto." />
                    <input type="text" placeholder="Cód. Postal" />

                </div>

            </form>
        </>

    )
}