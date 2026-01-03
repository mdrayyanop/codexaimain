"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Zap, Building2, Target, Users } from "lucide-react";

export function WhatWeBuildSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        "AI-powered tools & platforms",
        "SaaS-style AI products",
        "Prompt-based utilities",
        "Automation-focused solutions",
        "Experimental products with real potential",
    ];

    return (
        <section
            id="about"
            ref={ref}
            className="relative overflow-hidden bg-black py-24"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-sm font-medium text-purple-400">
                                What We Build
                            </span>
                        </motion.div>

                        <h2 className="mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            We Build AI Products
                        </h2>

                        <p className="mb-8 text-lg leading-relaxed text-gray-300">
                            CodexAI creates modern AI platforms, tools, and utilities that
                            help creators, developers, and businesses work smarter. Our focus
                            is on simplicity, performance, and real-world usability.
                        </p>

                        <div className="space-y-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="mt-1 rounded-full bg-green-500/20 p-1">
                                        <Check className="h-4 w-4 text-green-400" />
                                    </div>
                                    <span className="text-gray-300">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Animated Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30">
                            {/* Fake terminal/code block */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>

                                <div className="space-y-2 font-mono text-sm">
                                    <motion.div
                                        className="text-cyan-400"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "100%" } : {}}
                                        transition={{ delay: 0.8, duration: 1 }}
                                    >
                                        <span className="text-purple-400">const</span> codexAI ={" "}
                                        {"{"}
                                    </motion.div>
                                    <motion.div
                                        className="pl-4 text-gray-400"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 1.2 }}
                                    >
                                        mission: <span className="text-green-400">"Build AI that works"</span>,
                                    </motion.div>
                                    <motion.div
                                        className="pl-4 text-gray-400"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 1.4 }}
                                    >
                                        focus: <span className="text-green-400">"User experience"</span>,
                                    </motion.div>
                                    <motion.div
                                        className="pl-4 text-gray-400"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 1.6 }}
                                    >
                                        status: <span className="text-green-400">"Shipping"</span>
                                    </motion.div>
                                    <motion.div
                                        className="text-cyan-400"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 1.8 }}
                                    >
                                        {"}"};
                                    </motion.div>
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
