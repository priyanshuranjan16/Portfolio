"use client";

import { tech_stack_items } from "@/data/tech-stack";
import React from "react";
import { useTheme } from "next-themes";

export function TechStack() {
    const { theme } = useTheme();

    const getIconColor = (color: string | undefined) => {
        if (!color) return undefined;
        if (theme === "dark") {
            if (color === "#000000" || color === "#181717") return "#ffffff";
        }
        return color;
    };


    return (
        <div className="h-[400px] border-2 border-zinc-300 dark:border-zinc-700 rounded-xl bg-background p-6 flex flex-col select-none">
            <div className="flex items-center justify-between mb-4 flex-none">
                <h2 className="text-3xl font-bold text-black dark:text-white">Tech Stack</h2>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black dark:[&::-webkit-scrollbar-thumb]:bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tech_stack_items.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center p-3 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            <item.icon
                                className="size-4 mr-2"
                                style={{ color: getIconColor(item.brandColor) }}
                            />
                            <span className="font-medium text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
