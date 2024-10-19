import MarcasCard from './MarcasCard';

export default function MarcasContainer(){
    return(
        <div className='flex items-center justify-between'>
            <MarcasCard image='adidas.svg'/>
            <MarcasCard image='tnf.svg'/>
            <MarcasCard image='nike-2.svg'/>
        </div>
    )
}