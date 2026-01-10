"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { tech_stack_items } from "@/data/tech-stack";
import { useTheme } from "next-themes";

export function TechPile() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<any[]>([]);
    const { theme } = useTheme();

    useEffect(() => {
        if (!containerRef.current) return;

        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Runner = Matter.Runner;

        const engine = Engine.create();
        const world = engine.world;
        const { clientWidth: width, clientHeight: height } = containerRef.current;

        // Create bodies for icons
        const iconBodies = tech_stack_items.map((item, index) => {
            const size = 40; // Approximated size for physics body
            const margin = 40; // Keep icons away from edges
            const spawnWidth = Math.max(width - margin * 2, size);
            const x = Math.random() * spawnWidth + margin;
            const y = -Math.random() * 500 - 100; // Start above the view

            const body = Bodies.circle(x, y, size / 2, {
                restitution: 0.4,
                friction: 0.5,
                frictionAir: 0.02,
                density: 0.05,
                render: { opacity: 0 } // We will render react components instead
            });
            return { body, item, index };
        });

        // Walls - very thick walls positioned well inside container to prevent any escape
        const wallThickness = 200; // Extra thick walls
        const sideWallOffset = 25; // Position walls inside the container boundary

        // Ground at bottom
        const ground = Bodies.rectangle(
            width / 2,
            height + wallThickness / 2 - 5,
            width * 2,
            wallThickness,
            { isStatic: true, render: { opacity: 0 } }
        );

        // Left wall - positioned inside container
        const leftWall = Bodies.rectangle(
            sideWallOffset - wallThickness / 2,
            height / 2,
            wallThickness,
            height * 3,
            { isStatic: true, render: { opacity: 0 } }
        );

        // Right wall - positioned inside container
        const rightWall = Bodies.rectangle(
            width - sideWallOffset + wallThickness / 2,
            height / 2,
            wallThickness,
            height * 3,
            { isStatic: true, render: { opacity: 0 } }
        );

        // Top wall to prevent icons from going too high
        const topWall = Bodies.rectangle(
            width / 2,
            -wallThickness / 2 - 600,
            width * 2,
            wallThickness,
            { isStatic: true, render: { opacity: 0 } }
        );

        World.add(world, [ground, leftWall, rightWall, topWall, ...iconBodies.map(i => i.body)]);

        // Mouse control
        const mouse = Mouse.create(containerRef.current);
        mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        World.add(world, mouseConstraint);

        // Runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Resize Observer - update wall positions when container resizes
        const resizeObserver = new ResizeObserver(() => {
            if (!containerRef.current) return;
            const newWidth = containerRef.current.clientWidth;
            const newHeight = containerRef.current.clientHeight;

            // Update wall positions
            Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + wallThickness / 2 - 5 });
            Matter.Body.setPosition(leftWall, { x: sideWallOffset - wallThickness / 2, y: newHeight / 2 });
            Matter.Body.setPosition(rightWall, { x: newWidth - sideWallOffset + wallThickness / 2, y: newHeight / 2 });
            Matter.Body.setPosition(topWall, { x: newWidth / 2, y: -wallThickness / 2 - 600 });

            // Push any icons that are now outside bounds back into the safe zone
            iconBodies.forEach(({ body }) => {
                const safeMargin = sideWallOffset + 20;
                let newX = body.position.x;
                let needsMove = false;

                if (body.position.x < safeMargin) {
                    newX = safeMargin + 20;
                    needsMove = true;
                } else if (body.position.x > newWidth - safeMargin) {
                    newX = newWidth - safeMargin - 20;
                    needsMove = true;
                }

                if (needsMove) {
                    Matter.Body.setPosition(body, { x: newX, y: body.position.y });
                    Matter.Body.setVelocity(body, { x: 0, y: body.velocity.y });
                }
            });
        });
        resizeObserver.observe(containerRef.current);

        // Sync loop - just update positions, no respawn needed
        let animationFrameId: number;
        const updateLoop = () => {
            const newItems = iconBodies.map(({ body, item, index }) => ({
                key: index,
                x: body.position.x,
                y: body.position.y,
                angle: body.angle,
                item: item
            }));
            setItems(newItems);
            animationFrameId = requestAnimationFrame(updateLoop);
        };
        updateLoop();

        return () => {
            resizeObserver.disconnect();
            Runner.stop(runner);
            cancelAnimationFrame(animationFrameId);
            World.clear(world, false);
            Engine.clear(engine);
        };
    }, []);

    const getIconColor = (color: string | undefined) => {
        if (!color) return undefined;
        if (theme === "dark") {
            if (color === "#000000" || color === "#181717") return "#ffffff";
        }
        return color;
    };

    return (
        <div className="w-full h-[400px] relative overflow-hidden bg-background border-2 border-zinc-300 dark:border-zinc-700 rounded-xl select-none" ref={containerRef}>
            <div className="absolute top-4 left-0 w-full text-center pointer-events-none z-10">
                <h2 className="text-3xl font-bold text-black dark:text-white">What I Work With
                </h2>
            </div>
            {items.map(({ key, x, y, angle, item }) => (
                <div
                    key={key}
                    className="absolute flex items-center justify-center p-1"
                    style={{
                        transform: `translate(${x - 20}px, ${y - 20}px) rotate(${angle}rad)`,
                        width: "40px",
                        height: "40px",
                        cursor: "grab"
                    }}
                >
                    <item.icon className="w-8 h-8 pointer-events-none" style={{ color: getIconColor(item.brandColor) }} />
                </div>
            ))}
        </div>
    );
}
