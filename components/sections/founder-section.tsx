"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export function FounderSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="vision"
            ref={ref}
            className="relative overflow-hidden bg-black py-24"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-[40%_60%]">
                    {/* Left Side - Profile */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative mx-auto aspect-square max-w-sm">
                            {/* Gradient circle */}
                            <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-1">
                                <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                                    <Image
                                        src="/rayyannew.png"
                                        alt="Mohammed Rayyan"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Pulsing glow */}
                            <motion.div
                                className="absolute -inset-4 rounded-full bg-purple-500/30 blur-3xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Floating badges */}
                            <motion.div
                                className="absolute -right-4 top-1/4 z-20 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <span className="text-sm font-medium text-purple-300">
                                    Founder
                                </span>
                            </motion.div>

                            <motion.div
                                className="absolute -left-4 top-1/2 z-20 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            >
                                <span className="text-sm font-medium text-blue-300">CEO</span>
                            </motion.div>

                            <motion.div
                                className="absolute -right-8 bottom-1/4 z-20 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                            >
                                <span className="text-sm font-medium text-cyan-300">
                                    Product Builder
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm md:p-12"
                    >
                        <div className="mb-6">
                            <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                                Mohammed Rayyan
                            </h3>
                            <p className="text-lg text-purple-400">Founder & CEO — CodexAI</p>
                        </div>

                        <div className="mb-8 space-y-4 text-gray-300">
                            <p className="leading-relaxed">
                                Mohammed Rayyan is a product-focused founder building CodexAI
                                with a design-first, builder-first mindset — shipping
                                purposeful AI tools that people actually want to use.
                            </p>
                            <p className="leading-relaxed">
                                CodexAI reflects a philosophy: ship fast, improve continuously,
                                and build with purpose.
                            </p>
                        </div>

                        {/* Quote callout */}
                        <div className="relative rounded-xl border border-purple-500/30 bg-purple-500/10 p-6">
                            <Quote className="absolute right-4 top-4 h-8 w-8 text-purple-500/20" />
                            <p className="relative z-10 text-lg font-medium italic text-white">
                                "Ship fast. Improve continuously. Build with purpose."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
