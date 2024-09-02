// Bismillahirahmanirahim



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BasicExample from "./components/nav";
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/footer";



import { Alert } from "react-bootstrap";
import { Tegihistin } from "./components/tegihistin";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Êvar",
  description: "Kovara Çand,Huner û Wêje yê..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background:"brown",color:"white",justifyItems:"center"}} className={inter.className}>
        


<br></br><br></br>
      <h1 style={{fontStyle:"italic", font:"14",textAlign:"center"}}>Êvar</h1>

        <BasicExample/>
        {children}
    
<Tegihistin />

        <Footer/>
        </body>
    </html>
  );
}
