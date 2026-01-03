"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Shader Background */}
            <div className="absolute inset-0 -z-10">
                <MeshGradient
                    colors={["#000000", "#7C3AED", "#3B82F6", "#06B6D4", "#10B981"]}
                    speed={0.02}
                />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-cyan-400/30"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                        }}
                        animate={{
                            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920)],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <motion.div
                className="relative z-10 mx-auto max-w-5xl px-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {/* Rotating Badge */}
                <motion.div
                    className="mb-8 inline-block"
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-2 backdrop-blur-sm">
                        <span className="text-sm font-medium text-purple-300">
                            ✨ Building the Future of AI
                        </span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    className="mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-6xl font-bold leading-tight tracking-tight text-transparent md:text-7xl lg:text-8xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Beautiful AI Experiences.
                    <br />
                    Built with Precision.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="mb-12 text-lg text-gray-300 md:text-xl lg:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    CodexAI builds clean, scalable AI products designed to solve real
                    <br className="hidden md:block" />
                    problems and deliver powerful experiences.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <ShimmerButton
                        shimmerColor="#FFFFFF"
                        background="transparent"
                        className="border-2 border-purple-500 text-lg font-semibold"
                    >
                        View Products
                    </ShimmerButton>

                    <a
                        href="https://promptify.codexai.shop/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ShimmerButton
                            shimmerColor="#FFFFFF"
                            background="linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)"
                            className="text-lg font-semibold"
                        >
                            Get Started
                        </ShimmerButton>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 0.5 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                }}
            >
                <ArrowDown className="h-6 w-6 text-white/50" />
            </motion.div>
        </section>
    );
}
