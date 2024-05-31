import Image from "next/image";

interface Props {
    ancho: number,
    alto: number,
    icon: string,
    alt: string
}

export default function Adidas({ ancho, alto, icon, alt }: Props) {
    return(
        <Image width={ancho} height={alto} src={icon} alt={alt}/>
    )
}