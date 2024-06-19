import Image from "next/image";

import { FaTrash } from "react-icons/fa6";

interface Props {
    id?: number,
    title: string,
    price: number,
    description: string,
    category?: string,
    imgUrl: string,
}

export default function ProductoCarrito({ id, title, price, description, category, imgUrl }: Props) {


    return (
        <article className="flex gap-5 border-b px-5 py-2">
            <Image src={imgUrl} alt={description} width={60} height={60} className="py-2" />
            <div className="flex flex-col gap-1">
                <h3 className="text-sm max-w-64  font-light">{title}</h3>
                <h4 className="font-semibold text-firstColor text-lg">${price}</h4>
                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-3 px-2 min-w-[80px]">
                        <button className="">-</button>
                        <span className="text-sm min-w-[20px] text-center">9</span>
                        <button className="">+</button>
                    </div>
                    <button><FaTrash size={16} color="#2C4996"/></button>
                </div>
            </div>

        </article>
    )
}