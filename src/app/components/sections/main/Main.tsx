
import Image from 'next/image';
import ArrowButtons from './ArrowButtons';
import CompraAhora from './CompraAhora';
import MainCarousel from './MainCarousel';
import MarcasContainer from './MarcasContainer';


export default function Main(){

    return(
        <main className='max-w-screen relative top-20'>
            <header className='flex flex-col items-center mb-5 text-secondColor gap-1'>
                <h1 className='text-3xl font-semibold  text-center'>Comprá en USA</h1>
                <h3 className='font-extralight'>sin tramites e impuestos</h3>
                <h3 className='text-firstColor'>Recibí tu producto sin moverte de casa</h3>
                <div className='flex gap-5 py-1'>
                    <Image src="/usaflag.svg" alt={''} height={40} width={40}/>
                    <Image src="/argflag.svg" alt={''} height={40} width={35}/>
                    
            </div>
            </header>
            <MainCarousel/>
            <ArrowButtons />

            <div className='px-5 flex flex-col gap-5'>
                <MarcasContainer/>
                <CompraAhora/>
            </div>
            

        </main>
    )
}