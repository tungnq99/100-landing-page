import Hero from '@/components/Hero';
import Diagram from '@/components/Diagram';
import BottomImage from '@/components/BottomImage';

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen px-6 md:px-12 lg:px-24 py-12 gap-24">
            <nav className="flex justify-between items-center w-full mb-12">
                <div className="font-bold text-xl tracking-tight">Deeplayer</div>
                <div className="flex gap-8 text-sm font-medium text-gray-600 items-center">
                    <a href="#" className="hover:text-text-jungle transition-colors">About</a>
                    <a href="#" className="hover:text-text-jungle transition-colors">Resources</a>
                    <button className="bg-primary-green text-white px-5 py-2.5 rounded-md hover:translate-y-[-1px] transition-transform shadow-sm">
                        Build Your Chain
                    </button>
                </div>
            </nav>

            <Hero />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full items-end mt-12">
                <div className="w-full flex justify-start">
                    <Diagram />
                </div>
                <div className="w-full h-full flex items-end">
                    <BottomImage />
                </div>
            </div>
        </main>
    );
}
