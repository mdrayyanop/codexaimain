"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Cpu, Zap, Code, Layers, Rocket } from "lucide-react";
import { ProductsSection } from "@/components/sections/products-section";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

export default function ProductsPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            icon: Cpu,
            title: "AI-Powered Solutions",
            description: "Leveraging cutting-edge machine learning and neural networks to solve real-world problems.",
            color: "#7C3AED",
        },
        {
            icon: Code,
            title: "Clean Architecture",
            description: "Built with modern frameworks and best practices for scalability and maintainability.",
            color: "#3B82F6",
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for performance with instant responses and seamless user experiences.",
            color: "#06B6D4",
        },
        {
            icon: Layers,
            title: "Full Stack",
            description: "End-to-end solutions from frontend interfaces to backend AI processing.",
            color: "#10B981",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            {/* Hero Section */}
            <section ref={ref} className="relative overflow-hidden py-16">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10" />

                <div className="relative mx-auto max-w-7xl px-6">
                    {/* Header */}
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1">
                            <Sparkles className="h-4 w-4 text-purple-400" />
                            <span className="text-sm font-medium text-purple-400">
                                What We Build
                            </span>
                        </div>
                        <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                            Building the Future of AI
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-gray-400 md:text-xl">
                            At CodexAI, we craft intelligent tools that empower users, automate workflows,
                            and transform ideas into powerful digital experiences. Every product we build
                            is designed with precision, performance, and purpose.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                >
                                    <GlowingShadow glowColor={feature.color}>
                                        <div className="p-6 text-center">
                                            <div
                                                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                                                style={{ backgroundColor: `${feature.color}20` }}
                                            >
                                                <Icon className="h-7 w-7" style={{ color: feature.color }} />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </GlowingShadow>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Our Approach */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <GlowingShadow glowColor="#7C3AED">
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col items-center gap-8 md:flex-row">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500">
                                            <Rocket className="h-10 w-10 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                                            Our Development Philosophy
                                        </h2>
                                        <p className="text-gray-400">
                                            We believe in building AI tools that are not just powerful, but also
                                            accessible and intuitive. Every line of code is written with the end user
                                            in mind. We ship fast, iterate continuously, and never compromise on quality.
                                            Our products are designed to scale globally while maintaining the personal
                                            touch that makes technology feel human.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GlowingShadow>
                    </motion.div>
                </div>
            </section>

            {/* Products Section */}
            <ProductsSection />
        </div>
    );
}
