'use client';

export default function Contact() {
    return (
        <section id="contact" className="px-6 py-12 lg:py-20 max-w-7xl mx-auto overflow-hidden">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
                <h2 className="px-2 bg-lime-300 rounded-md text-4xl font-medium inline-block text-center lg:text-left">Contact Us</h2>
                <p className="max-w-xl text-lg text-black text-center lg:text-left">
                    Connect with Us: Let's Discuss Your Digital Marketing Needs
                </p>
            </div>

            <div className="relative bg-zinc-100 rounded-[45px] p-8 lg:p-14 overflow-hidden">
                {/* Using a flex container to allow the form to take full width or partial width */}
                <div className="flex flex-col lg:flex-row lg:justify-between relative z-10">

                    <form className="w-full lg:max-w-lg flex flex-col gap-6">
                        <div className="flex items-center gap-8 mb-4">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="type" value="say-hi" defaultChecked className="w-5 h-5 accent-lime-300" />
                                <span className="text-lg">Say Hi</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name="type" value="quote" className="w-5 h-5 accent-lime-300" />
                                <span className="text-lg">Get a Quote</span>
                            </label>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base text-black">Name</label>
                            <input type="text" placeholder="Name" className="w-full px-7 py-4 rounded-2xl border border-black bg-white outline-none focus:ring-1 focus:ring-lime-300" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base text-black">Email*</label>
                            <input type="email" placeholder="Email" className="w-full px-7 py-4 rounded-2xl border border-black bg-white outline-none focus:ring-1 focus:ring-lime-300" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base text-black">Message*</label>
                            <textarea placeholder="Message" className="w-full h-40 px-7 py-4 rounded-2xl border border-black bg-white outline-none resize-none focus:ring-1 focus:ring-lime-300" />
                        </div>

                        <button className="w-full py-5 bg-zinc-900 text-white rounded-2xl text-xl hover:bg-zinc-700 transition-all mt-4">
                            Send Message
                        </button>
                    </form>

                    {/* Illustration placeholder - right side */}
                    <div className="absolute top-0 -right-80 h-full w-1/2 hidden lg:flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <img src="/images/img_contact.png" alt="Contact Visual" className="object-contain h-full w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
