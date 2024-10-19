import Link from "next/link"
import Product from "./Product"
import Image from "next/image"
import getData from "@/app/helpers/getData"







export default async function CarouselProducts() {

    const products = await getData('https://fakestoreapi.com/products/1')

    return(
        <div className="flex flex-col gap-5 items-center px-5">
            <nav>
            <ul className="flex items-center justify-center gap-3">
                <li className="bg-secondColor rounded p-2 flex items-center justify-center">
                    <Image src={""} alt={""} width={40} height={40}/>
                </li>
                <li className="bg-secondColor rounded p-2 flex items-center justify-center">
                    <Image src={""} alt={""} width={40} height={40}/>
                </li>
                <li className="bg-secondColor rounded p-2 flex items-center justify-center">
                    <Image src={""} alt={""} width={40} height={40}/>
                </li>
                <li className="bg-secondColor rounded p-2 flex items-center justify-center">
                    <Image src={""} alt={""} width={40} height={40}/>
                </li>
            </ul>      
        </nav>
            <div className="flex gap-5">
                <Product 
                    title={products.title} 
                    price={products.price} 
                    brand="Nike"
                    category={products.category}
                    alt={products.description}
                    classes=""
                    urlImage={products.image}
                    />
                <Product 
                    title={products.title} 
                    price={products.price} 
                    brand="Nike"
                    category={products.category}
                    alt={products.description}
                    classes=""
                    urlImage={products.image}
                    />
            </div>

            <Link href="" className="py-2 bg-secondColor w-full text-center text-white font-semibold rounded">
                Ver más abrigos
            </Link>
        </div>
    )
}