"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Sparkles, Zap, Building2, Users } from "lucide-react";

export function PhilosophySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const cards = [
        {
            icon: Target,
            title: "Problem-First Approach",
            description: "We identify real problems before building solutions",
            color: "from-purple-500 to-purple-700",
        },
        {
            icon: Sparkles,
            title: "Clean & Minimal UI",
            description: "Beautiful interfaces that users love to interact with",
            color: "from-blue-500 to-blue-700",
        },
        {
            icon: Zap,
            title: "Performance Over Clutter",
            description: "Fast, efficient, and optimized for the best experience",
            color: "from-cyan-500 to-cyan-700",
        },
        {
            icon: Building2,
            title: "Scalable Architecture",
            description: "Built to grow from MVP to enterprise",
            color: "from-green-500 to-green-700",
        },
        {
            icon: Users,
            title: "User-Focused Design",
            description: "Every decision prioritizes the end user",
            color: "from-purple-500 to-blue-500",
        },
    ];

    return (
        <section ref={ref} className="relative overflow-hidden bg-black py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1">
                        <span className="text-sm font-medium text-purple-400">
                            How We Build
                        </span>
                    </div>
                    <h2 className="mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                        Our Philosophy
                    </h2>
                </motion.div>

                {/* Horizontal Scrolling Cards */}
                <div className="overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-6 px-2" style={{ width: "max-content" }}>
                        {cards.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.title}
                                    className="group w-80 flex-shrink-0"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/20">
                                        {/* Accent line */}
                                        <div
                                            className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${card.color}`}
                                        />

                                        <div
                                            className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${card.color} p-3`}
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>

                                        <h3 className="mb-3 text-xl font-bold text-white">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-400">{card.description}</p>

                                        {/* Glow on hover */}
                                        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-blue-600/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile scroll hint */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 md:hidden">
                        ← Scroll to see more →
                    </p>
                </div>
            </div>
        </section>
    );
}
