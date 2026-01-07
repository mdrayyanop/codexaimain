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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                item: {
                    "@type": "SoftwareApplication",
                    name: "Promptify",
                    applicationCategory: "AI Tool",
                    operatingSystem: "Web",
                    url: "https://promptify.codexai.shop",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                    },
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                item: {
                    "@type": "SoftwareApplication",
                    name: "Deenify",
                    applicationCategory: "EducationalApplication",
                    operatingSystem: "Web",
                    url: "https://codexai.shop/products",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                    },
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                item: {
                    "@type": "SoftwareApplication",
                    name: "Edify",
                    applicationCategory: "EducationalApplication",
                    operatingSystem: "Web",
                    url: "https://codexai.shop/products",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                    },
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
