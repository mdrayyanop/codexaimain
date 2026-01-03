"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Globe, Zap, Shield } from "lucide-react";

export function VisionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directions = [
        { icon: TrendingUp, text: "Expanding AI product ecosystem" },
        { icon: Globe, text: "Launching standalone platforms" },
        { icon: Zap, text: "Building globally accessible tools" },
        { icon: Shield, text: "AI-based services & solutions" },
    ];

    return (
        <section ref={ref} className="relative overflow-hidden bg-black py-24">
            {/* Animated background network */}
            <div className="absolute inset-0 opacity-20">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                            id="network"
                            x="0"
                            y="0"
                            width="100"
                            height="100"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="50" cy="50" r="2" fill="#7C3AED" opacity="0.3" />
                            <line
                                x1="50"
                                y1="50"
                                x2="100"
                                y2="50"
                                stroke="#7C3AED"
                                strokeWidth="0.5"
                                opacity="0.2"
                            />
                            <line
                                x1="50"
                                y1="50"
                                x2="50"
                                y2="100"
                                stroke="#7C3AED"
                                strokeWidth="0.5"
                                opacity="0.2"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network)" />
                </svg>
            </div>

            <div className="relative mx-auto max-w-4xl px-6">
                <motion.div
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20 p-12 backdrop-blur-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Gradient border */}
                    <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-50 blur-xl" />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <motion.div
                            className="mb-6 inline-block rounded-full bg-cyan-500/10 px-4 py-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-sm font-medium text-cyan-400">
                                Looking Ahead
                            </span>
                        </motion.div>

                        <motion.h2
                            className="mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            Our Vision
                        </motion.h2>

                        <motion.p
                            className="mb-12 text-lg leading-relaxed text-gray-300 md:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                        >
                            To grow CodexAI into a global technology company that builds
                            impactful AI products and platforms — shaping how people interact
                            with technology in the future.
                        </motion.p>

                        {/* Future directions */}
                        <motion.div
                            className="grid gap-6 md:grid-cols-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            {directions.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.text}
                                        className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        <div className="rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 p-2">
                                            <Icon className="h-5 w-5 text-white" />
                                        </div>
                                        <span className="text-left text-sm font-medium text-gray-300 group-hover:text-white">
                                            {item.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
