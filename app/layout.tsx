import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codexai.shop"),
  title: {
    default: "CodexAI - Beautiful AI Experiences Built with Precision",
    template: "%s | CodexAI",
  },
  description:
    "CodexAI builds clean, scalable AI products designed to solve real problems and deliver powerful experiences. Explore our AI tools like Promptify, Deenify, and Edify.",
  keywords: [
    "CodexAI",
    "codexai",
    "AI",
    "Artificial Intelligence",
    "AI Products",
    "Machine Learning",
    "Promptify",
    "Deenify",
    "Edify",
    "AI Tools",
    "AI Platform",
    "Technology",
    "SaaS",
    "AI Solutions",
    "Mohammed Rayyan",
    "AI Development",
    "Prompt Engineering",
    "AI Learning Platform",
  ],
  authors: [{ name: "Mohammed Rayyan", url: "https://rayyan.codexai.shop" }],
  creator: "CodexAI",
  publisher: "CodexAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codexai.shop",
    siteName: "CodexAI",
    title: "CodexAI - Beautiful AI Experiences Built with Precision",
    description:
      "CodexAI builds clean, scalable AI products designed to solve real problems and deliver powerful experiences. Explore our AI tools like Promptify, Deenify, and Edify.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "CodexAI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodexAI - Beautiful AI Experiences Built with Precision",
    description:
      "CodexAI builds clean, scalable AI products designed to solve real problems and deliver powerful experiences.",
    images: ["/favicon.png"],
    creator: "@codexai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://codexai.shop",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodexAI",
              alternateName: "codexai",
              url: "https://codexai.shop",
              logo: "https://codexai.shop/favicon.png",
              description:
                "CodexAI builds clean, scalable AI products designed to solve real problems and deliver powerful experiences.",
              founder: {
                "@type": "Person",
                name: "Mohammed Rayyan",
                url: "https://rayyan.codexai.shop",
              },
              sameAs: [
                "https://github.com/codexai",
                "https://twitter.com/codexai",
                "https://linkedin.com/company/codexai",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@codexai.shop",
                contactType: "customer service",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CodexAI",
              alternateName: "codexai",
              url: "https://codexai.shop",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://codexai.shop/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} bg-black antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
