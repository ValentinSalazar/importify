import { FieldError } from "react-hook-form";

interface Props {
    type: string,
    placeholder: string,
    register: Function;
    validaciones?: object;
    autocomplete?: boolean;
    min?: number;
    max?: number;
}

export default function Input({ type, placeholder, register, validaciones, min, max }: Props) {
    return (
        <>
            <input
                
                type={type}
                placeholder={placeholder}
                {...register(placeholder, validaciones)}
                className="outline-none border rounded py-2 pl-2 border-secondColor placeholder:text-secondColor text-sm max-w-[400px] [&::-webkit-inner-spin-button]:appearance-none"
            />

        </>
    )
}