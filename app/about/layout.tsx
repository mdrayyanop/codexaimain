import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Our Story & Philosophy",
    description:
        "Learn about CodexAI, our mission to build clean, scalable AI products, and meet the founder Mohammed Rayyan. Discover our philosophy of building AI with precision and purpose.",
    keywords: [
        "About CodexAI",
        "Mohammed Rayyan",
        "AI Company",
        "Technology Startup",
        "AI Philosophy",
        "Clean Code",
        "AI Development",
    ],
    openGraph: {
        title: "About | CodexAI - Our Story & Philosophy",
        description:
            "Learn about CodexAI, our mission to build clean, scalable AI products, and meet the founder Mohammed Rayyan.",
        url: "https://codexai.shop/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
