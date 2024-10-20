import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Importify",
  description: "Importá tus productos desde Estados Unidos sin moverte de casa. En 3 sencillos pasos, podrás obtener los mejores productos y a los mejores precios.",
  applicationName: "Importify Web App",
  authors: [{
    name: "Valentín",
    url: "https://github.com/valentinsalazar"
  }],
  
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${poppins.className} overflow-x-hidden`}>{children}</body>
      </Provider>
    </html>
  );
}
