
import Footer from "../(sections-home)/footer/Footer"
import Navbar from "../ui/Navbar/Navbar"
interface Props {
    children: React.ReactNode,
}


export default function LayoutColeccion({ children }: Props) {

    return (
        <html lang="en">
            <body className="w-screen overflow-x-hidden">
                <Navbar />
                <main className="relative top-24">

                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}