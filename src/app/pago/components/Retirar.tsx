import { FaLocationDot } from "react-icons/fa6";

export default function Retirar() {
    return (
        <div className="pt-5">
            <h1 className="text-center text-sm text-secondColor">Podrás retirar tu pedido en nuestras oficinas</h1>
            <div className="flex flex-col gap-3 pt-5 [&>input]:outline-none [&>input]:border [&>input]:rounded [&>input]:py-2 [&>input]:pl-2 [&>input]:border-secondColor [&>input]:placeholder:text-secondColor [&>input]:text-sm">
                <input type="emal" placeholder="Email" />
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
            </div>


            <div className="flex pt-5 justify-between text-secondColor">
                <h3 className="font-medium py flex gap-1 "><FaLocationDot size={20} />Buenos Aires</h3>
                <h6 className="flex items-center font-light gap-2 pl-2">José Hernandez 2700</h6>
            </div>
            <div className="flex pt-5 justify-between text-secondColor">
                <h3 className="font-medium py flex gap-1 "><FaLocationDot size={20} />Rosario</h3>
                <h6 className="flex items-center font-light gap-2 pl-2">Entre Rios 1200</h6>
            </div>
            <div className="flex pt-5 gap-1 justify-between text-secondColor">
                <h3 className="font-medium py flex gap-1 "><FaLocationDot size={20} />San Pedro</h3>
                <h6 className="flex items-center font-light gap-2 pl-2">Mitre 920</h6>
            </div>
            <p className="text-sm text-center py-10 text-secondColor">Una vez realizado el pago correspondiente a tu pedido, te enviaremos por correo la confirmación. </p>
        </div>
    )
}