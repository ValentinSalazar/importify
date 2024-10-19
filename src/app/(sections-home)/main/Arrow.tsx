import Link from "next/link";

interface Props {
    genero: string,
    icon: React.ReactNode,
    toUrl: string,
}


export default function Arrow({ genero, icon, toUrl}:Props){
    const classes = 'xs:text-base flex items-center gap-1 bg-secondColor py-2 px-5 xs:w-36 active:opacity-50 hover:opacity-85 transition-opacity';
    return(
        <Link href={toUrl} className={`text-white`}>
            { (genero) === "Hombres"
                ? <h1 className={`${classes} rounded-r-full`}>{genero} {icon}</h1> 
                : <h1 className={`${classes} rounded-l-full`}>{icon} {genero} </h1>
            }
        </Link>
    )
}