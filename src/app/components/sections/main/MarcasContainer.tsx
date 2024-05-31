import MarcasCard from './MarcasCard';

export default function MarcasContainer(){
    return(
        <div className='flex items-center justify-between'>
            <MarcasCard />
            <MarcasCard />
            <MarcasCard />
        </div>
    )
}