import React from 'react';

const AboutSec1 = () => {
    return (
        <div className="bg-gray-50 text-gray-900 font-sans">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[22rem] md:h-[28rem] flex items-center justify-center px-6 md:px-16"
                style={{
                    backgroundImage:
                        "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67bb95aa-c4f5-400f-a75d-d80162f14b16.png')",
                }}
            >
                {/* 🔲 Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                {/* Heading */}
                <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide z-10 drop-shadow-lg select-none">
                    ABOUT US
                </h1>

                {/* Pill Scrollbar */}
                <div className="pill-scrollbar z-0 absolute bottom-0 left-0 right-0 h-14 flex justify-center gap-1 overflow-hidden pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span
                            key={i}
                            className="inline-block w-2 h-16 bg-white rounded-full opacity-70 transform skew-y-[-20deg]"
                        ></span>
                    ))}
                </div>

                {/* Floating Card Image (Responsive on md+) */}
                <div className="hidden md:flex absolute md:top-10 md:right-5 lg:top-16 lg:right-10 xl:top-20 xl:right-20 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 shadow-lg rounded-lg bg-white overflow-hidden items-center justify-center z-20">
                    <img
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7b86900a-da85-4d1c-bfe3-42a9e9f70c08.png"
                        alt="Excavator machinery"
                        className="w-full h-full object-contain"
                        onError={(e) => (e.target.style.display = 'none')}
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gray-50 relative">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="relative bg-white p-10 shadow-md rounded-lg">
                        <div className="inline-block px-3 py-1 border border-yellow-600 text-yellow-600 text-xs font-semibold rounded-md tracking-wide mb-4 select-none">
                            INTRODUCTION
                        </div>
                        <h2 className="text-3xl font-extrabold leading-tight text-slate-900 mb-4">
                            Why Clients Trust Huzaifa Builds?
                        </h2>
                        <p className="text-gray-700 text-base leading-relaxed">
                            At <strong>Huzaifa Builds</strong>, we’ve earned a solid reputation in the construction industry by delivering top-quality work through transparency, innovation, and dedication. From residential to commercial projects, we prioritize client satisfaction, professional craftsmanship, and on-time delivery. Our deep knowledge of modern construction, trusted workforce, and ethical project execution set us apart in a highly competitive market.
                        </p>
                        <div className="absolute top-0 left-0 w-20 h-20 bg-gray-100 transform -translate-x-12 -translate-y-12 rotate-45"></div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center text-gray-900 bg-white p-10 shadow-md rounded-lg">
                        <blockquote className="italic text-lg md:text-xl leading-relaxed mb-6 text-slate-900">
                            “We don’t just construct buildings — we build trust and future-proof solutions.”
                        </blockquote>
                        <p className="text-yellow-600 font-bold mb-6 select-none">- Huzaifa R., Founder</p>

                        <ul className="space-y-4">
                            {[
                                'Transparent project management with 100% satisfaction guarantee',
                                'Expert engineers, modern equipment, and skilled staff',
                                'Timely delivery, premium quality, and client-focused approach',
                            ].map((text, index) => (
                                <li className="flex items-start gap-3" key={index}>
                                    <span className="mt-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold select-none">
                                        ✓
                                    </span>
                                    <span className="font-semibold text-gray-900">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSec1;
