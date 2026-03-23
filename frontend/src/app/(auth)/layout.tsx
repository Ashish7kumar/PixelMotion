import "~/styles/globals.css";
import { Toaster } from "sonner";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "~/components/ui/providers";
export const metadata: Metadata = {
  title: "NeuroVoice",
  description: "Turn text into expressive audio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-svh flex flex-col justify-center items-center">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}