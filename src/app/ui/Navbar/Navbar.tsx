'use client'
import Link from "next/link";
import Logo from '../Logo';
import BagIcon from './BagIcon';

import { useState, useEffect } from 'react';
import { IoClose, IoMenu, IoBag } from "react-icons/io5";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [navMobile, setNavMobile] = useState(false)

    function handleNav() {
        setNavMobile(!navMobile)
    }

    return (
        <>
            <nav className={`z-[100] fixed h-12 flex items-center justify-between bg-secondColor
         ${!scrolled ? "top-5 left-1/2 transform -translate-x-1/2 w-[90vw] px-5 rounded-full" : "w-screen p-5"}`}>
                <Link href="/" className="flex gap-2">
                    <Logo alto={20} ancho={20} />
                    <h3 className="text-white">Importify</h3>
                </Link>
                <div className="flex items-center gap-3">
                    <BagIcon />
                    <IoMenu size={24} onClick={handleNav} className="active:opacity-50 text-white cursor-pointer" />
                </div>

            </nav>
            <nav className={`fixed -top-0 -right-0 flex w-screen h-screen z-[101] ${navMobile === true ? "block" : "hidden"}`}>
                <div className={`w-[50%] bg-black/50 ${navMobile === true ? "block" : "hidden"}`} onClick={handleNav}></div>
                <ul className={`w-[50%] pt-16 flex flex-col gap-3 text-white bg-secondColor [&>li>a]:px-5 font-light ${navMobile === true ? "flex" : "hidden"}`}>
                    <IoClose size={24} className="absolute right-5 top-5 text-white cursor-pointer hover:opacity-50 active:opacity-30" onClick={handleNav} />
                    <li className="">
                        <Link href="/">
                            Inicio
                        </Link>
                    </li>
                    <div>
                        <h6 className="select-none px-5 text-[10px] flex items-center gap-1 text-thirdColor">Categorías <span className="w-full h-[1px] bg-thirdColor"></span></h6>
                    </div>
                    <li>
                        <Link href="/categorias/mujer">
                            Mujer
                        </Link>
                    </li>
                    <li>
                        <Link href="/categorias/hombre">
                            Hombre
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Tecnologia
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Termos
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-red-400 font-medium">
                            Ofertas
                        </Link>
                    </li>
                    <div className="px-5 w-full flex">
                        <span className="w-full h-[1px] bg-thirdColor"></span>
                    </div>
                    <li>
                        <Link href="/">
                            Ver mi orden
                        </Link>
                    </li>
                    <Link href="/carrito" className="flex bottom-0 bg-white py-1 text-secondColor font-medium items-center justify-between px-5">
                        Carrito
                        <IoBag size={20}/>
                    </Link>
                </ul>
            </nav>
        </>
    )

}