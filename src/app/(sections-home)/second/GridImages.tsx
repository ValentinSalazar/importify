import getMainImages from "@/app/lib/getMainImages";
import ImageOffer from "./ImageOffer";


// hacer un fetch a la base de datos para obtener las imagenes, las meto en un array
// y desp con un map las renderizo.
// el producto va tener una categoria y una imagen las cuales le pasare por parametro al ImageOffer.
// endpoint del backend ->  /api/images-sale

export default async function GridImages() {

    
    const images = await getMainImages();

    return (
        <div className="grid relative z-20 place-content-center gap-8">
            {images.map((image:any) => (
                <ImageOffer key={image.asset_id} categoria={image.asset_folder} link={image.secure_url} />
            ))}
        </div>
    );
}