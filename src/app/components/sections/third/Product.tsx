import Image from "next/image";
import Link from "next/link";


interface Props {
    title: string,
    price: number,
    brand: string,
    category: string,
    alt: string,
    classes: string,
    urlImage: string,
}


export default function Product({ title, alt, classes, urlImage, price, brand }:Props ) {
    return(
        <div className="flex flex-col items-center justify-center w-[50%] rounded border-[#f3f3f3] border-l-[1px] border-r-[1px]">
            <Image width={120} height={120} src={urlImage} alt={alt} className={`${classes} rounded`}/>
            <div className="flex flex-col gap-1">
                <Link href="" className="font-medium text-secondColor max-w-44 text-left text-sm px-1">{title}</Link>
                <p className="text-left text-sm font-extralight text-[#333] px-1">Marca: {brand}</p>
                <h3 className="font-black text-2xl text-firstColor px-1">${price}</h3>
                <Link href="" className="rounded-b bg-secondColor font-extralight text-sm text-white w-full py-2 text-center hover:bg-firstColor/80">
                    Añadir al carrito
                </Link>
            </div>
        </div>
    )
}