import React from 'react';

const ServicesSec2 = () => {
    const services = [
        {
            title: 'Project Management Consultancy',
            description:
                'We’re here to support you through every stage of your project. From detailed planning and resource allocation to execution and oversight.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 5h10M4 10h14M4 15h14M17 20h3v-12h-3" />
                    <path d="M12 14l-3 3 3 3M14 4h6v3" />
                </svg>
            ),
        },
        {
            title: 'Project Development Consultancy',
            description:
                'We offer expert consultancy from initial project conceptualization to final documentation, supporting all stages of your development cycle.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 3v2a2 2 0 0 1-2 2H6v5h11v5h-4v2h4a2 2 0 0 0 2-2v-2h1a2 2 0 0 0 2-2v-3a4 4 0 0 0-4-4h-2V3z" />
                </svg>
            ),
        },
        {
            title: 'DHA Construction Consultancy',
            description:
                'We provide dedicated consultancy for DHA bylaws compliance, utility approvals, construction-phase documentation and execution.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h3v8H3zM12 6v12M6 3h.01M18 3h.01M10 18h4l2-6h-8l2 6zm8 0v-2h-2l2 6h-8m0-8v6" />
                </svg>
            ),
        },
        {
            title: 'Real Estate Advisory Consultancy',
            description:
                'We help you identify high-potential real estate investments through in-depth market analysis and strategic insights.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 7v6h16V7H4zm0 6h16v5H4v-5zm10-5h6" />
                </svg>
            ),
        },
        {
            title: 'Town Planning',
            description:
                'Dedicated planning that supports sustainable growth and smart city initiatives, tailored to your vision and local regulations. We collaborate closely with stakeholders to ensure long-term functionality and urban resilience.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 17v-6h18v6H3zM6 12v5m3-5v5m3-8v8m3-5v5" />
                </svg>
            ),
        },
        {
            title: 'Operation & Maintenance',
            description:
                'Ensure smooth and efficient daily operations with expert-level maintenance planning and execution support. We also provide risk-based maintenance plans to reduce downtimes and maximize productivity over time.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.7 12.3a5 5 0 0 1-5.4 7.732 7.949 7.949 0 0 1-2.732-11.4 7.967 7.967 0 0 1 8.066-3.7" />
                </svg>
            ),
        },
        {
            title: 'Asset Management',
            description:
                'Maximize the value and lifecycle of your assets with tailored management strategies aligned to your long-term goals. Our plans include lifecycle cost analysis, asset performance tracking, and optimization modeling.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2s-10 4.477-10 10 4.477 10 10 10zm0-12a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
                </svg>
            ),
        },
        {
            title: 'Construction',
            description:
                'Our construction services ensure quality, safety, and timely project delivery from start to finish. We maintain rigorous site inspections, contractor coordination, and milestone tracking throughout every phase.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7.5h3a1.5 1.5 0 1 1 0 3h-3M5 12l7-7 7 7M12 21v-4.5" />
                </svg>
            ),
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white text-slate-900 font-sans" >
            <div className="text-center max-w-3xl mx-auto">
                <p className="inline-block text-sm font-semibold tracking-widest uppercase border border-yellow-700 rounded-md px-4 py-1 text-yellow-700 mb-4 select-none">
                    Flawless Services
                </p>
                <h2 className="text-5xl font-extrabold text-slate-900 mb-6 drop-shadow-sm">
                    Our Top Notch Services
                </h2>
                <p className="text-lg font-medium leading-relaxed text-slate-900 max-w-3xl mx-auto drop-shadow-md">
                    We offer specialized consultancy services across town planning, real estate advisory, operations &amp;
                    maintenance, and equipment procurement. From feasibility analysis and strategic planning to regulatory
                    compliance and asset optimization, our expert guidance helps clients make informed decisions at every
                    project stage. With a focus on efficiency, risk management, and long-term value, we empower you to build
                    smarter, not harder.
                </p>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <article
                        key={index}
                        className="bg-slate-900 min-h-[380px] flex flex-col justify-start p-6 rounded-xl shadow-2xl transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-black "
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f8f1e8] text-[#bb9154] mb-5 shadow-md">
                            {service.icon}
                        </div>
                        <h3 className="text-[#bb9154] font-semibold text-xl mb-3 leading-snug">
                            {service.title}
                        </h3>
                        <p className="text-white text-base leading-relaxed">
                            {service.description}
                        </p>
                    </article>

                ))}
            </div>
        </section>
    );
};

export default ServicesSec2;
