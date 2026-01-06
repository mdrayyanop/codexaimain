import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Get in Touch",
    description:
        "Contact CodexAI for inquiries, collaborations, or support. We'd love to hear from you and discuss how we can help with your AI needs.",
    keywords: [
        "Contact CodexAI",
        "Get in Touch",
        "AI Consultation",
        "AI Support",
        "Business Inquiry",
        "Collaboration",
    ],
    openGraph: {
        title: "Contact | CodexAI - Get in Touch",
        description:
            "Contact CodexAI for inquiries, collaborations, or support. We'd love to hear from you.",
        url: "https://codexai.shop/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
