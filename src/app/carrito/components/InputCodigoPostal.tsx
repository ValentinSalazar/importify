export default function InputCodigoPostal(){
    return(
        <>
            <h4 className="md:text-sm">Calculá tu envío</h4>
            <input type="number" name="codigo-postal" placeholder="Codigo Postal" className="outline-none border rounded py-2 pl-2 border-secondColor placeholder:text-secondColor text-sm max-w-[400px] [&::-webkit-inner-spin-button]:appearance-none"/>
        </>
    )
}