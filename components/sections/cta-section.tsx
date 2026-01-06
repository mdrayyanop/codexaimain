"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="contact"
            ref={ref}
            className="relative overflow-hidden bg-black py-24"
        >
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)",
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Mesh overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_100%)]" />

            <motion.div
                className="relative mx-auto max-w-4xl px-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="mb-6 inline-block rounded-full bg-purple-500/10 px-4 py-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-sm font-medium text-purple-400">
                        Let's Build Together
                    </span>
                </motion.div>

                <motion.h2
                    className="mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    Ready to Build with AI?
                </motion.h2>

                <motion.p
                    className="mb-12 text-lg text-gray-300 md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    Join us in shaping the future of intelligent products.
                </motion.p>

                <motion.div
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <a href="https://rayyan.codexai.shop/" target="_blank" rel="noopener noreferrer">
                        <ShimmerButton
                            shimmerColor="#FFFFFF"
                            background="linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)"
                            className="px-12 py-4 text-lg font-bold"
                        >
                            Get Started
                        </ShimmerButton>
                    </a>

                    <a href="/products">
                        <ShimmerButton
                            shimmerColor="#FFFFFF"
                            background="transparent"
                            className="border-2 border-white/20 px-12 py-4 text-lg font-semibold"
                        >
                            View Products
                        </ShimmerButton>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
