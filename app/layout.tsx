import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "CodexAI - Beautiful AI Experiences Built with Precision",
  description:
    "CodexAI builds clean, scalable AI products designed to solve real problems and deliver powerful experiences.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "CodexAI",
    "AI Products",
    "Machine Learning",
    "Technology",
  ],
  authors: [{ name: "CodexAI" }],
  openGraph: {
    title: "CodexAI - Beautiful AI Experiences Built with Precision",
    description:
      "CodexAI builds clean, scalable AI products designed to solve real problems and deliver powerful experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-black antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
