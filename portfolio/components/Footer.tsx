export default function Footer() {
    return (
        <footer className="py-8 px-4 border-t border-neutral-900 bg-neutral-950 text-center">
            <p className="text-neutral-600 text-sm font-mono">
                © {new Date().getFullYear()} Immersive Portfolio. All Rights Reserved.
            </p>
        </footer>
    );
}
