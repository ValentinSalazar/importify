import Producto from "./Producto";

export default function GridProduct() {
    return(
        <div className="grid grid-cols-[150px,150px] place-items-left gap-5 w-screen flex-wrap pb-20 justify-center">
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
        </div>
    )
}