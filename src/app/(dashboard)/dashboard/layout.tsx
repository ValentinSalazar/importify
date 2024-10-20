"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavbarPanel from "../components/NavbarPanel";

interface Props {
    children: React.ReactNode,
}


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    const { status } = useSession();
    const router = useRouter();

    const showSession = () => {
        if (status === "authenticated") {
            return (
                <button
                    className="border border-solid border-black rounded"
                    onClick={() => {
                        signOut({ redirect: false }).then(() => {
                            router.push("/");
                        });
                    }}>
                    Sign Out
                </button>
            )
        } else if (status === "loading") {
            return (
                <span className="text-sm mt-7">Loading...</span>
            )
        } else {
            return (
                <Link href="/auth/login" className="border border-solid border-black rounded">
                    Sign In
                </Link>
            )
        }
    }


    if (status !== "authenticated") {
        return (
            <>
                <header className="text-xl flex bg-secondColor text-white justify-between px-10 py-5">
                    <h1 className="">Panel</h1>
                    {showSession()}
                </header>
                <NavbarPanel />
                <main className="px-5">    
                    {children}
                </main>
                </>

        );
    } else {
        router.push('/');
    }

}