export default function Footer() {
    return (
        <footer className="py-8 px-4 border-t border-neutral-900 bg-neutral-950">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-neutral-600 text-sm font-mono">
                    © {new Date().getFullYear()} Nguyen Quang Tung. All Rights Reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href="mailto:tungnq99@gmail.com"
                        className="text-neutral-600 hover:text-neutral-300 text-sm font-mono transition-colors"
                    >
                        tungnq99@gmail.com
                    </a>
                    <a
                        href="https://github.com/tungnq99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-neutral-300 text-sm font-mono transition-colors"
                    >
                        github.com/tungnq99
                    </a>
                </div>
            </div>
        </footer>
    );
}

