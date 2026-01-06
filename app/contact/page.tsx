"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "eeb5250a-2f20-4cf2-939d-ce427a046265",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact from ${formData.name} - CodexAI Website`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Failed to send message. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <section className="relative overflow-hidden py-24">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10" />

                <div className="relative mx-auto max-w-4xl px-6">
                    {/* Header */}
                    <motion.div
                        className="mb-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1">
                            <span className="text-sm font-medium text-purple-400">
                                Get in Touch
                            </span>
                        </div>
                        <h1 className="mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            Contact Us
                        </h1>
                        <p className="text-lg text-gray-400">
                            Have a question or want to collaborate? We&apos;d love to hear from you.
                        </p>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <GlowingShadow glowColor="#7C3AED">
                            <div className="p-8 md:p-12">
                                {isSubmitted ? (
                                    <motion.div
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="mb-4 rounded-full bg-green-500/20 p-4">
                                            <Send className="h-8 w-8 text-green-400" />
                                        </div>
                                        <h3 className="mb-2 text-2xl font-bold text-white">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-400">
                                            Thank you for reaching out. We&apos;ll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                                <User className="h-4 w-4 text-purple-400" />
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/20"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                                <Mail className="h-4 w-4 text-purple-400" />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/20"
                                            />
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                                                <MessageSquare className="h-4 w-4 text-purple-400" />
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                placeholder="Tell us what's on your mind..."
                                                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/20"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-4">
                                            <ShimmerButton
                                                shimmerColor="#FFFFFF"
                                                background="linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)"
                                                className="w-full py-4 text-lg font-semibold"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <Send className="h-5 w-5" />
                                                        Send Message
                                                    </span>
                                                )}
                                            </ShimmerButton>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </GlowingShadow>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-gray-400">
                            Or reach out directly at{" "}
                            <a
                                href="mailto:contact@codexai.shop"
                                className="text-purple-400 transition-colors hover:text-purple-300"
                            >
                                contact@codexai.shop
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
