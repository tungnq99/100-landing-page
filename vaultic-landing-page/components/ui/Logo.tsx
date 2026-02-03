import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            {/* Fallback to text if image fails or for simplicity first */}
            <span className="font-heading text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                Vaultic
            </span>
        </Link>
    );
}
