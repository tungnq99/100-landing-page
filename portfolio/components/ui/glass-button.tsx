import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
    "relative isolate block cursor-pointer rounded-full transition-transform active:scale-95 group overflow-hidden",
    {
        variants: {
            size: {
                default: "text-base font-medium",
                sm: "text-sm font-medium",
                lg: "text-lg font-medium",
                icon: "h-10 w-10",
            },
            variant: {
                default: "",
                ghost: "opacity-70 hover:opacity-100  hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
                primary: "bg-white text-neutral-950 shadow-[0_0_15px_rgba(255,255,255,0.4)]",
            }
        },
        defaultVariants: {
            size: "default",
            variant: "default",
        },
    }
);

const glassButtonTextVariants = cva(
    "glass-button-text relative block select-none tracking-tighter z-10 transition-colors",
    {
        variants: {
            size: {
                default: "px-6 py-3.5",
                sm: "px-4 py-2",
                lg: "px-8 py-4",
                icon: "flex h-10 w-10 items-center justify-center",
            },
            variant: {
                default: "text-white",
                ghost: "text-white",
                primary: "text-neutral-950 font-semibold",
            }
        },
        defaultVariants: {
            size: "default",
            variant: "default",
        },
    }
);

export interface GlassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
    contentClassName?: string;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, children, size, variant, contentClassName, ...props }, ref) => {
        const isPrimary = variant === "primary";

        return (
            <div
                className={cn(
                    "glass-button-wrap cursor-pointer rounded-full relative",
                    className
                )}
            >
                <button
                    className={cn("glass-button w-full h-full", glassButtonVariants({ size, variant }))}
                    ref={ref}
                    {...props}
                >
                    <span
                        className={cn(
                            glassButtonTextVariants({ size, variant }),
                            contentClassName
                        )}
                    >
                        {children}
                    </span>
                    <>
                        <div className="glass-button-bg absolute inset-0 rounded-full bg-white/5 border border-white/10 transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
                        <div className="glass-button-glow absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </>

                    {isPrimary && (
                        <>
                            <div className="glass-button-bg absolute inset-0 rounded-full bg-white/5 border border-white/10 transition-colors duration-300 bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
                            <div className="glass-button-glow absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 opacity-100 transition-opacity duration-500"></div>
                        </>
                    )}
                </button>
            </div>
        );
    }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
