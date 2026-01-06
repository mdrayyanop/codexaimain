"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    const footerSections = [
        {
            title: "Products",
            links: [
                { name: "Promptify", href: "#products" },
                { name: "Coming Soon", href: "#products" },
                { name: "Roadmap", href: "#vision" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "#about" },
                { name: "Vision", href: "#vision" },
                { name: "Contact", href: "#contact" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Support", href: "#" },
            ],
        },
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com", label: "GitHub" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Mail, href: "mailto:contact@codexai.com", label: "Email" },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <Image
                                src="/favicon.png"
                                alt="CodexAI Logo"
                                width={80}
                                height={80}
                                className="rounded-xl"
                            />
                        </div>
                        <p className="mb-6 text-sm text-gray-400">
                            Crafting clean, powerful AI platforms
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="group rounded-lg border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10"
                                    >
                                        <Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-purple-400" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-4 text-sm font-semibold text-white">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group relative inline-block text-sm text-gray-400 transition-colors hover:text-white"
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
                    <p>© 2026 CodexAI. Built with precision.</p>
                    <div className="flex gap-8">
                        <Link
                            href="#"
                            className="transition-colors hover:text-purple-400"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors hover:text-purple-400"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
