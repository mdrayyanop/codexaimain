import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products - AI Tools & Solutions",
    description:
        "Explore CodexAI's innovative AI products including Promptify for AI-powered prompt generation, Deenify for Islamic knowledge, and Edify for AI learning. Building the future of AI.",
    keywords: [
        "CodexAI Products",
        "AI Tools",
        "Promptify",
        "Deenify",
        "Edify",
        "AI Solutions",
        "Machine Learning Products",
        "AI Platform",
    ],
    openGraph: {
        title: "Products | CodexAI - AI Tools & Solutions",
        description:
            "Explore CodexAI's innovative AI products including Promptify, Deenify, and Edify. Building the future of AI.",
        url: "https://codexai.shop/products",
    },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
