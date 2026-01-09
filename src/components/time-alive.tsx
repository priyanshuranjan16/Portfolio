"use client";

import { useEffect, useState } from "react";

interface TimeAliveProps {
    birthDate: string;
}

export function TimeAlive({ birthDate }: TimeAliveProps) {
    const [years, setYears] = useState<string>("0");

    useEffect(() => {
        const start = new Date(birthDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = now - start;
            const yearsAlive = diff / (1000 * 60 * 60 * 24 * 365.25);
            setYears(yearsAlive.toFixed(9));
        }, 50);

        return () => clearInterval(interval);
    }, [birthDate]);

    return (
        <span className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground tabular-nums tracking-tighter">
            {years}
        </span>
    );
}
