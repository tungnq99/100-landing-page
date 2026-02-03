import { ButtonHTMLAttributes, forwardRef } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming utils exists, or I will create it.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(107,237,185,0.5)]":
                            variant === "primary",
                        "bg-transparent border border-primary text-primary hover:bg-primary/10":
                            variant === "secondary",
                        "bg-transparent text-gray-300 hover:text-white": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-12 px-6 text-base": size === "md", // PRD: 12px vertical, 24px horizontal -> h-12 seems right (48px)
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {children}
                {icon && <MoveRight className="ml-2 h-4 w-4" />}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
