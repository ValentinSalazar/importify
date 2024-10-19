import Image from "next/image";

export default function ColectionIcon(){
    return(
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
    )
}