import Footer from "../(sections-home)/footer/Footer";
import Navbar from "../ui/Navbar/Navbar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`overflow-x-hidden`}>
            <Navbar/>
                <main className="relative pt-20 mx-5 md:w-screen flex flex-col">
                  { children }
                </main>
                <Footer />
            </body>
        </html>
    );
}
