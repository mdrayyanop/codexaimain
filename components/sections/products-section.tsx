"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Sparkles, Rocket, Beaker } from "lucide-react";

export function ProductsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="products"
            ref={ref}
            className="relative overflow-hidden bg-black py-24"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-purple-900/5" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 inline-block rounded-full bg-cyan-500/10 px-4 py-1">
                        <span className="text-sm font-medium text-cyan-400">
                            Our Products
                        </span>
                    </div>
                    <h2 className="mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                        Featured Products
                    </h2>
                    <p className="text-lg text-gray-400">
                        Cutting-edge AI tools designed for the modern world
                    </p>
                </motion.div>

                {/* Products Grid - Bento Layout */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Card 1: Promptify */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <GlowingShadow glowColor="#7C3AED">
                            <div className="flex h-full flex-col items-center justify-between p-8 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="mb-6">
                                        <Image
                                            src="/promptify-logo.png"
                                            alt="Promptify Logo"
                                            width={100}
                                            height={100}
                                            className="rounded-2xl"
                                        />
                                    </div>
                                    <h3 className="mb-3 text-3xl font-bold text-white">
                                        Promptify
                                    </h3>
                                    <span className="mb-4 inline-block rounded-full bg-green-500/20 px-4 py-1 text-sm font-medium text-green-400">
                                        Live Now
                                    </span>
                                    <p className="mb-8 text-gray-400">
                                        AI-powered prompt generation platform designed to help users
                                        create better, more effective prompts.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <motion.a
                                        href="https://promptify.codexai.shop/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ShimmerButton
                                            shimmerColor="#7C3AED"
                                            background="linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)"
                                            className="font-semibold"
                                        >
                                            Try Promptify →
                                        </ShimmerButton>
                                    </motion.a>
                                    <motion.a
                                        href="https://play.google.com/store/apps/details?id=shop.codexai.promptify.twa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <ShimmerButton
                                            shimmerColor="#10B981"
                                            background="linear-gradient(135deg, #10B981 0%, #06B6D4 100%)"
                                            className="font-semibold"
                                        >
                                            Play Store
                                        </ShimmerButton>
                                    </motion.a>
                                </div>
                            </div>
                        </GlowingShadow>
                    </motion.div>

                    {/* Card 2: Deenify */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GlowingShadow glowColor="#EAB308">
                            <div className="flex h-full flex-col items-center justify-between p-8 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="mb-6">
                                        <Image
                                            src="/deenify-2.png"
                                            alt="Deenify Logo"
                                            width={100}
                                            height={100}
                                            className="rounded-2xl"
                                        />
                                    </div>
                                    <h3 className="mb-3 text-3xl font-bold text-white">
                                        Deenify
                                    </h3>
                                    <span className="mb-4 inline-block rounded-full bg-yellow-500/20 px-4 py-1 text-sm font-medium text-yellow-400">
                                        Under Construction
                                    </span>
                                    <p className="mb-8 text-gray-400">
                                        Your intelligent companion for accessible and authentic Islamic knowledge.
                                    </p>
                                </div>
                                <ShimmerButton
                                    shimmerColor="#EAB308"
                                    background="transparent"
                                    className="cursor-not-allowed border-2 border-yellow-500/50 text-yellow-500 font-semibold opacity-50"
                                >
                                    Coming Soon
                                </ShimmerButton>
                            </div>
                        </GlowingShadow>
                    </motion.div>

                    {/* Card 3: AI Lab */}
                    <motion.div
                        className="md:col-span-2"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <GlowingShadow glowColor="#7C3AED">
                            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                                <Beaker className="mb-4 h-16 w-16 text-purple-400" />
                                <h3 className="mb-3 text-2xl font-bold text-white">AI Lab</h3>
                                <span className="mb-4 inline-block rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-400">
                                    Early Access
                                </span>
                                <p className="mb-6 text-gray-400">
                                    Exploring new AI domains
                                </p>
                                <ShimmerButton
                                    shimmerColor="#7C3AED"
                                    background="transparent"
                                    className="border-2 border-purple-500 font-semibold"
                                >
                                    Join Waitlist
                                </ShimmerButton>
                            </div>
                        </GlowingShadow>
                    </motion.div>

                    {/* Trust Bar - spans full width */}
                    <motion.div
                        className="md:col-span-2 lg:col-span-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="flex flex-wrap items-center justify-around gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <div className="text-center">
                                <div className="mb-1 text-3xl font-bold text-white">1+</div>
                                <div className="text-sm text-gray-400">Products Shipped</div>
                            </div>
                            <div className="text-center">
                                <div className="mb-1 text-sm font-medium text-purple-400">
                                    ⚡ Solo Founder
                                </div>
                                <div className="text-xs text-gray-500">
                                    100% Product Focus
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="mb-1 text-sm font-medium text-cyan-400">
                                    🚀 Built for Scale
                                </div>
                                <div className="text-xs text-gray-500">Enterprise Ready</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
