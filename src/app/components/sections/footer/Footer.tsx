import Logo from "@/app/ui/Logo";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaLocationDot} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";


export default function Footer(){
    return(
        <footer className="relative top-20 max-w-screen bg-firstColor">
            <header className="flex justify-between px-5 h-10 items-center">
                <div className="flex gap-2">
                    <Logo alto={20} ancho={20}/>
                    <h3 className="text-white">Importifiy</h3>
                </div>
                <div className="flex gap-3">
                    <FaCcVisa size={30} color="white"/>
                    <FaCcMastercard size={30} color="white"/>
                    <FaCcPaypal size={30} color="white"/>
                    <FaCcAmex size={30} color="white"/>
                </div>
            </header>
            <div className="bg-secondColor px-5 py-5 text-white flex flex-wrap gap-10 [&>nav>h1]:font-semibold [&>div>h1]:font-semibold font-extralight">
                <nav className="flex flex-col gap-2 *:[&>ul]:font-extralight">
                    <h1>Navegación</h1>
                    <ul>
                        <Link href="">
                            Inicio
                        </Link>
                    </ul>
                    <ul>
                        <Link href="">
                            Ropa
                        </Link>
                    </ul>
                    <ul>
                        <Link href="">
                            Termos
                        </Link>
                    </ul>
                    <ul>
                        <Link href="">
                            Tecnologia
                        </Link>
                    </ul>
                    <ul>
                        <Link href="">
                            Preguntas
                        </Link>
                    </ul>
                </nav>

                <div className="flex flex-1 flex-col gap-2 font-extralight [&>div]:flex [&>div]:gap-2 [&>div]:items-center">
                    <h1>Contactanos</h1>
                    <div className="">
                        <RiWhatsappFill size={20}/>
                        <h3>11 5121-8234</h3>
                    </div>
                    <div className="">
                        <RiWhatsappFill size={20}/>
                        <h3>3329 47-8515</h3>
                    </div>
                    <div>
                        <FaLocationDot size={20}/>
                        <h3 className="text-xs sm:text-sm">José Hernandez 2729, CABA.</h3>
                    </div>
                    <div>
                        <FaLocationDot size={20}/>
                        <h3 className="text-xs sm:text-sm">Entrerrios 1200, Rosario.</h3>
                    </div>
                    <div>
                        <IoMail size={20}/>
                        <h3 className="text-xs sm:text-sm">oficial@importify.com</h3>
                    </div>
                </div>
                
                <div className="">
                    <h1>Nuestras redes sociales!</h1>
                    <div>
                        <Link href="" className="flex gap-2 items-center">
                            <AiFillInstagram size={30}/>
                            <h3>importify.arg</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <span className="h-10 flex justify-center items-center text-xs gap-[2px] text-white font-extralight">designed & developed by<b>Valentín</b></span>
        </footer>
    )
}