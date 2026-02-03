import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-20", // PRD: 24px mobile, 48px tablet, 80px desktop
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
