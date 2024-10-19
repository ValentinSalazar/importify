'use client'

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


export default function MainCarousel() {

    const [currentImage, setCurrentImage] = useState(0)

    function prevImage() {
        setCurrentImage(currentImage => currentImage === 0 ? 2 : currentImage - 1)
    }

    function nextImage() {
        setCurrentImage(currentImage => currentImage === 2 ? 0 : currentImage + 1)
    }

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500 max-h-[350px]" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                <Image src="/mainImg1.webp" width={600} height={600}
                    alt={"Foto de abrigo de hombre"}
                    layout="responsive"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top">
                </Image>

                <Image src="/mainImg2.webp" width={400} height={400}
                    alt={"Foto de Termo Stanley 1.1Q"}
                    layout="responsive"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain" />

                <Image src="/mainImg3.jpeg" width={300} height={200}
                    alt={"Foto de Termo Stanley 1.1Q"}
                    layout="responsive"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain" />

            </div>
            <div className="flex items-center justify-between px-5 absolute inset-0">
                <button className="bg-white/80 rounded-full h-8 w-8 flex items-center justify-center" onClick={prevImage}>
                    <IoIosArrowForward size={24}
                        className="rotate-180" />
                </button>

                <button className="bg-white/80 rounded-full h-8 w-8 flex items-center justify-center" onClick={nextImage}>
                    <IoIosArrowForward size={24} />
                </button>

            </div>
        </div>
    )
}