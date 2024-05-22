import type { Metadata } from "next";
import Footer from "@common/Footer";
import MainNavbar from "@common/MainNavbar";
import { Providers } from "./providers";
import { montserrat } from "../fonts";
import Favicon from "/public/favicon.ico";
import { HashScrollProvider } from "@context";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "María Lorencez",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Providers>
          <HashScrollProvider>
            <MainNavbar />
            {children}
            <Footer />
          </HashScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
