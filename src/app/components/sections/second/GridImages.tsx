import Image from "next/image";
import ImageOffer from "./ImageOffer";


export default function GridImages() {
    return(
        <div className="grid relative z-20 place-content-center gap-8">
            <ImageOffer />
            <ImageOffer />
            <ImageOffer />
        </div>
    )
}