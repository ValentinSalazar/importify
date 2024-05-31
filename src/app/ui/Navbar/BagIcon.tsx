import Link from "next/link";
import { IoBag } from "react-icons/io5";

export default function BagIcon() {
    return(
        <Link href="/carrito" className="relative flex ">
            <IoBag size={20} color="#fff" className="relative bottom-[1px]"></IoBag>
            <span className="w-[16px] h-[16px] text-xs text-center rounded-full text-white bg-secondColor absolute left-2 top-3">5</span>
        </Link>
    )
}