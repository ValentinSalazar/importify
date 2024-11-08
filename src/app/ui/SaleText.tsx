export default function SaleText(){
    return(
        <div className="flex gap-2 absolute left-0 top-0 z-10 w-max-screen flex-wrap justify-center">
            {
                [...Array(400)].map((_, i) => (
                    <h1 key={i} className="text-5xl font-semibold text-firstColor opacity-[10%] overflow-hidden">SALE</h1>
                ))
            }
        </div>
    )
}