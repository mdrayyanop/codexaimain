import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vision - Building Tomorrow's AI Today",
    description:
        "Discover CodexAI's vision for the future of AI. We're building a global technology company that shapes how people interact with artificial intelligence.",
    keywords: [
        "CodexAI Vision",
        "AI Future",
        "Technology Vision",
        "AI Innovation",
        "Future of AI",
        "AI Strategy",
    ],
    openGraph: {
        title: "Vision | CodexAI - Building Tomorrow's AI Today",
        description:
            "Discover CodexAI's vision for the future of AI. Building a global technology company that shapes how people interact with artificial intelligence.",
        url: "https://codexai.shop/vision",
    },
};

export default function VisionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
