"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <motion.div
                className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled
                    ? "rounded-b-2xl bg-black/80 backdrop-blur-xl"
                    : "bg-transparent"
                    }`}
                style={{ opacity: isScrolled ? opacity : 1 }}
            >
                {/* Logo */}
                <Link href="/" className="group flex items-center space-x-3">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Image
                            src="/favicon.png"
                            alt="CodexAI Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                    </motion.div>
                    <motion.span
                        className="font-space-grotesk text-2xl font-bold tracking-tight text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        -codexai
                    </motion.span>
                </Link>

                {/* Nav Links */}
                <div className="hidden items-center space-x-8 md:flex">
                    {["Products", "About", "Vision", "Contact"].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            {item}
                            <motion.span
                                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-cyan-500"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <ShimmerButton
                        shimmerColor="#FFFFFF"
                        background="linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)"
                        className="px-6 py-2 text-sm font-semibold"
                    >
                        Get Started
                    </ShimmerButton>
                </motion.div>
            </motion.div>

            {/* Glass border */}
            {isScrolled && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
        </motion.nav>
    );
}
