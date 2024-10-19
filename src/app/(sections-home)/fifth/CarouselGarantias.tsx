import CardGarantia from "./CardGarantia";
import { FaDollarSign } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import { BsHeadset, BsPatchCheckFill } from "react-icons/bs";

export default function CarouselGarantias() {
    return (
        <div className="flex items flex-wrap gap-5 items-center justify-center">
            <div className="flex gap-5 flex-1 sm:flex-initial justify-center">
                <CardGarantia
                    icon={<FaDollarSign size={40} color="#2C4996" />}
                    title="Seguridad"
                    description="Todos los pagos en nuestra plataforma están protegidos. Al igual que los datos." />
                <CardGarantia
                    icon={<LuArrowLeftRight size={40} color="#2C4996" />}
                    title="Devoluciones"
                    description="Los productos pueden cambiarse o devolver. Retornamos el 100% del pago realizado." />
            </div>
            <div className="flex gap-5">
                <CardGarantia
                    icon={<BsHeadset size={40} color="#2C4996" />}
                    title="Atención 24/7"
                    description="Podrás comunicarte en cualquier horario para realizar las consultas necesarias." />
                <CardGarantia
                    icon={<BsPatchCheckFill size={40} color="#2C4996" />}
                    title="Cálidad"
                    description="Importamos productos originales y de calidad. No vendemos replicas de ningún tipo." />
            </div>
        </div>
    )
}