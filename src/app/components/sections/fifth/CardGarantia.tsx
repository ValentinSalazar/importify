interface Props {
    icon: React.ReactNode,
    title: string,
    description: string,
}


export default function CardGarantia({ icon, title, description}: Props) {
    return(
        <article className="h-[175px] w-[150px] px-1 py-2 bg-white flex flex-col justify-center items-center gap-1 rounded-md">
        { icon }
            <h3 className="text-sm text-firstColor font-medium">{ title }</h3>
            <p className="text-xs text-center text-firstColor font-light">{ description }</p>
        </article>

    )
}