"use client";

import { ReactLenis as Lenis } from "@studio-freight/react-lenis";

interface ReactLenisProps {
    children: React.ReactNode;
}

export function ReactLenis({ children }: ReactLenisProps) {
    return (
        <Lenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            {children as any}
        </Lenis>
    );
}
