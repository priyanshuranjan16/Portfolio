"use client";

import React from "react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

export function ConversationCta() {



    const contactEmail = DATA.contact.email;

    return (
        <div className="flex flex-col items-center justify-center space-y-8 p-6 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
                <div className="inline-block rounded-full bg-foreground text-background px-3 py-1 text-sm font-medium">
                    Contact Me
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl max-w-full px-2">
                    Still curious about how to bring those imaginative thoughts to life ?
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-8">
                <div className="text-center md:text-left">
                    <p className="text-muted-foreground text-2xl italic">
                        let me make <br />your own story <br />for you
                    </p>
                </div>

                {/* Desktop arrows (horizontal) */}
                <div className="hidden md:flex items-center gap-2 text-muted-foreground/50">
                    <span className="text-xl">→</span>
                    <span className="text-xl text-red-500 font-bold">➜</span>
                    <span className="text-xl">→</span>
                </div>

                {/* Mobile arrows (vertical, pointing down) */}
                <div className="flex md:hidden flex-col items-center gap-1 text-muted-foreground/50">
                    <span className="text-xl">↓</span>
                    <span className="text-xl text-red-500 font-bold">↓</span>
                    <span className="text-xl">↓</span>
                </div>

                <div className="relative group">
                    <div className="relative flex items-center bg-background rounded-full p-1.5 pr-2 border shadow-sm hover:shadow-md transition-shadow">
                        <div className="pl-4 pr-3 text-sm font-medium">
                            Drop me an Email
                            {/* <span className="text-xl text-muted-foreground/50">→</span> */}
                        </div>



                        <a
                            href={`mailto:${contactEmail}`}
                            className={cn(
                                "ml-2 rounded-full h-9 w-9 p-0 flex items-center justify-center transition-colors bg-foreground text-background hover:bg-foreground/90"
                            )}
                        >
                            <Mail className="size-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full pt-20 pb-10 flex justify-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-300 dark:text-gray-700 tracking-tighter leading-none select-none text-center">
                    Engineering clarity <br className="hidden md:block" />out of complexity
                </h1>
            </div>

            <div className="text-center text-sm text-gray-400 pb-0 pt-10  select-none">
                &copy; 2026 Priyanshu Ranjan. Crafted with ❤️.
            </div>
        </div >
    );
}
