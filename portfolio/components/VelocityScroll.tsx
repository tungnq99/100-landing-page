"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden tracking-tighter leading-[0.85] m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div
                className="font-heading font-bold text-6xl md:text-9xl uppercase flex whitespace-nowrap flex-nowrap text-neutral-800"
                style={{ x }}
            >
                <span className="block mr-8 md:mr-16">{children} </span>
                <span className="block mr-8 md:mr-16">{children} </span>
                <span className="block mr-8 md:mr-16">{children} </span>
                <span className="block mr-8 md:mr-16">{children} </span>
            </motion.div>
        </div>
    );
}

export default function VelocityScroll() {
    return (
        <section className="py-20 bg-neutral-950 overflow-hidden relative z-10">
            <ParallaxText baseVelocity={-2}>Creative Developer • Designer • Storyteller •</ParallaxText>
            <ParallaxText baseVelocity={2}>Motion • User Experience • Interface •</ParallaxText>
        </section>
    );
}
