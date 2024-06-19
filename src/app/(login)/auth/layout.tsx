import Logo from "@/app/ui/Logo";



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`overflow-x-hidden`}>
                <main className="flex justify-center items-center h-screen w-screen bg-secondColor">
                    <div className="mx-10 w-full border min-h-[50%] rounded-lg bg-white flex flex-col justify-center">
                        <header className="flex items-center justify-center py-2">
                            <Logo alto={30} ancho={30} color="#2C4996"/>
                            <h1 className="font-semibold text-firstColor">Importify</h1>
                        </header>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
