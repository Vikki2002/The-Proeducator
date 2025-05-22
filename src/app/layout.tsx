import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/inter";
import Template from "./template";
import AuthProvider from "@/context/AuthProvider";
import { FaWhatsappSquare } from "react-icons/fa";
import ChatComponent from "@/components/chatModel/Chat_Component";
import { CountryProvider } from "@/context/DestinationProvider";
import { DataProvider } from "@/context/DataProvider";

// const geistSans = Geist({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: "The ProEducator",
  description: "Empowering Learning with Next.js & CSS4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <AuthProvider>
          <CountryProvider>
            <DataProvider>
              <main className="w-screen">
                <Template>{children}</Template>
              </main>
              <ChatComponent />
              <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
                <a
                  href="https://wa.me/+919561799936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-lg bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaWhatsappSquare className="w-6 h-6" />
                </a>
              </div>
            </DataProvider>
          </CountryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
