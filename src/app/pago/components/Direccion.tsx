import { useForm } from "react-hook-form"
import Input from "./Input"
import Detalle from "./Detalle"

export default function Direccion() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log(errors)

    return (
        <>
            <p className="text-sm pt-3 text-center md:text-left md:pl-2 md:max-w-[400px] text-secondColor">Por favor completá tus datos correctamente para poder enviar tu pedido</p>
            <form action="" onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <div className="flex flex-col py-3 gap-3">
                    <Input
                        autocomplete={false}
                        register={register}
                        type="email"
                        placeholder="Email" validaciones={{
                            required: true,
                            minLength: 8,
                            maxLength: 45,

                        }} />
                    {
                        errors.Email?.type === "required" && <span className="text-red-500 text-sm font-light">El email es obligatorio.</span>             
                    }
                    {
                        errors.Email?.type === "minLength" && <span className="text-red-500 text-sm font-light">El email debe tener un minimo de 8 caracteres.</span>
                    }
                    {
                        errors.Email?.type === "maxLength" && <span className="text-red-500 text-sm font-light">El email debe tener un maximo de 45 caracteres.</span>
                    }

                    <Input 
                        register={register} 
                        type="text" 
                        placeholder="Nombre" validaciones={{
                            required: true,
                            minLength: 2,
                            maxLength: 25,
                        }}/>
                    {
                        errors.Nombre?.type === "required" && <span className="text-red-500 text-sm font-light">El nombre es obligatorio.</span>
                    }
                    {
                        errors.Nombre?.type === "minLength" && <span className="text-red-500 text-sm font-light">El nombre debe tener minimo 2 caracteres.</span>
                    }
                    {
                        errors.Nombre?.type === "maxLength" && <span className="text-red-500 text-sm font-light">El nombre debe tener maximo 25 caracteres.</span>
                    }
                    <Input register={register} type="text" placeholder="Apellido" validaciones={{
                            required: true,
                            minLength: 2,
                            maxLength: 25,
                        }}/>
                    {
                        errors.Apellido?.type === "required" && <span className="text-red-500 text-sm font-light">El apellido es obligatorio.</span>
                    }
                    {
                        errors.Apellido?.type === "minLength" && <span className="text-red-500 text-sm font-light">El apellido debe tener minimo 2 caracteres.</span>
                    }
                    {
                        errors.Apellido?.type === "maxLength" && <span className="text-red-500 text-sm font-light">El apellido debe tener maximo 25 caracteres.</span>
                    }
                </div>

                <div className="flex flex-col gap-3 [&>input]:w-[100%]">
                    <Input register={register} type="text" placeholder="Provincia" />
                    {
                        errors.Provincia && <span className="text-red-500 text-sm font-light">La provincia es obligatoria.</span>
                    }
                    <Input register={register} type="text" placeholder="Ciudad" />
                    <Input register={register} type="text" placeholder="Dirección" />
                </div>

                <div className="flex [&>input]:w-[100px] justify-between gap-3 py-3 md:max-w-[400px]">
                    <Input autocomplete={false} register={register} type="number" placeholder="Piso" min={0}/>
                    <Input register={register} type="text" placeholder="Depto." min={0}/>
                    <Input register={register} type="number" placeholder="CodPostal" />
                </div>
                    <Detalle />
            </form>
        </>

    )
}