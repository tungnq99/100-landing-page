'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Code } from 'lucide-react';

export default function BuildFaster() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Animated UI Mockup */}
                    <div className="relative">
                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-accent/5 rounded-full blur-[100px] -z-10"></div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-md mx-auto lg:mx-0"
                        >
                            {/* Chat Header */}
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center text-white font-bold">D</div>
                                <div>
                                    <div className="font-bold text-sm">Devnote AI</div>
                                    <div className="text-xs text-green-500 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                                    </div>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="space-y-4">
                                {/* User Message */}
                                <div className="flex justify-end">
                                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                                        Create a React component for a subscription plan card.
                                    </div>
                                </div>

                                {/* AI Reply */}
                                <div className="flex justify-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 bg-primary-dark rounded-full flex items-center justify-center text-white text-xs">AI</div>
                                    <div className="space-y-2 max-w-[90%]">
                                        <div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-none text-sm shadow-sm">
                                            Sure! Here's a customized component with Tailwind CSS:
                                        </div>
                                        <div className="bg-[#1E1E1E] rounded-xl p-4 text-xs font-mono text-gray-300 overflow-hidden relative group">
                                            <div className="absolute top-2 right-2 flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                            </div>
                                            <pre>
                                                {`export function PlanCard({ price }) {
  return (
    <div className="p-6 border rounded-xl">
       <h3 className="text-xl">Pro Plan</h3>
       <div className="text-3xl font-bold">
         \${price}<span className="text-sm">/mo</span>
       </div>
       <button className="btn-primary">
         Select Plan
       </button>
    </div>
  )
}`}
                                            </pre>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1 }}
                                                className="absolute bottom-2 right-2 bg-primary-accent text-white px-2 py-1 rounded text-[10px] font-sans font-bold shadow-lg"
                                            >
                                                Copied!
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="mt-6 relative">
                                <input type="text" placeholder="Ask follow-up..." className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary-accent" disabled />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary-accent text-white rounded-full">
                                    <Code size={12} />
                                </button>
                            </div>

                            {/* Floating Comment Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                className="absolute -right-8 top-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2"
                            >
                                <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">Code Validated</div>
                                    <div className="text-[10px] text-gray-500">No errors found</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="lg:pl-10">
                        <span className="text-primary-accent font-bold tracking-wider uppercase text-sm mb-2 block">Workflow</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
                            Build Faster, <br /> Smarter.
                        </h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            AI-driven code generation that understands your project context.
                            Stop switching context between documentation and your IDE.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Context-aware code completion',
                                'Instant refactoring suggestions',
                                'Automated unit test generation',
                                'Security vulnerability scanning'
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-text-main font-medium"
                                >
                                    <div className="bg-green-100 p-1 rounded-full text-primary-accent">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
