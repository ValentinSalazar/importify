"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginPage() {

    const [error, setError] = useState("");
    const router = useRouter();


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        if (res?.error) {
            setError(res.error as string);
        }
        if (res?.ok) {
            return router.push("/");
        }
    };

    return (
        <div>
            <h1 className="font-semibold text-center pb-1 text-secondColor text-xl">Iniciar sesión</h1>
            <h3 className="font-light text-xs text-center text-firstColor">Panel de administración</h3>
            <form action="" className="flex flex-col justify-center items-center py-5 gap-5" onSubmit={handleSubmit}>
                {error && <div className="text-black">{error}</div>}
                <div className="flex flex-col items-center">
                    <label htmlFor="email" className="text-xs pb-1 w-[95%]">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-[95%] text-xs rounded border border-firstColor py-1 px-1 active:outline-none focus:outline-none" />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="password" className="text-xs pb-1 w-[95%]">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="Contraseña" className="w-[95%] text-xs rounded border border-firstColor py-1 px-1 active:outline-none focus:outline-none" />
                </div>
                <input type="submit" value="Iniciar" className="border px-5 py-2 rounded bg-secondColor text-white font-semibold cursor-pointer" />
            </form>

        </div>
    )
}
