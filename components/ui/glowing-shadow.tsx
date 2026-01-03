"use client";

import React, { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface GlowingShadowProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export function GlowingShadow({
    children,
    className,
    glowColor = "#7C3AED",
}: GlowingShadowProps) {
    return (
        <div
            style={
                {
                    "--glow-color": glowColor,
                } as CSSProperties
            }
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl",
                "transition-all duration-500",
                "hover:scale-[1.02] hover:border-white/20",
                "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
                className,
            )}
        >
            {/* Glowing border effect */}
            <div
                className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor})`,
                }}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
