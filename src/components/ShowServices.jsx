import React from "react";

const services = [
    {
        title: "Project Management Consultancy",
        description:
            "We’re here to support you through every stage of your project. From detailed planning and resource allocation to vendor coordination and management...",
        imgSrc:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a517726f-b444-425d-ba86-cfec982a1342.png",
        fallback:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a7b5c907-69f7-4de7-9730-ebcb7e49355e.png?text=Image+not+available",
    },
    {
        title: "Project Development Consultancy",
        description:
            "We offer expert consultancy from initial project conceptualization to final documentation. Our services cover site assessment, feasibility...",
        imgSrc:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1da4651b-141b-4182-b169-2b0bc22d9d53.png",
        fallback:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7003fb70-a934-453d-be8c-db50fd3bc2c2.png",
    },
    {
        title: "DHA Construction Consultancy",
        description:
            "We provide dedicated consultancy for DHA bylaws compliance, utility approvals, and construction-phase documentation. Our team assists in...",
        imgSrc:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cdc0aa2e-e92f-4010-a556-edc8325f776c.png",
        fallback: "https://placehold.co/600x360?text=Image+not+available",
    },
];

const ShowServices = () => {
    return (
        <section className="bg-white text-gray-700 font-sans min-h-screen " >
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                <h2 h2 className="text-4xl font-extrabold mb-6 text-[#b49140]" >
                    HUZAIFA BUILDS TOP NOTCH SERVICES
                </h2 >
                <p className="max-w-3xl mx-auto mb-14 text-gray-600 text-lg leading-relaxed">
                    Backed by years of hands-on experience and a dedication to excellence,
                    we deliver high-quality services built for long-term success. From
                    large-scale construction projects to strategic planning and precision
                    engineering, our work is driven by integrity and professional
                    expertise.
                </p>

                <div className="grid gap-10 md:grid-cols-3 text-left">
                    {services.map((service, index) => (
                        <article
                            key={index}
                            className="bg-[#04112c] rounded-2xl p-8 min-h-[500px] shadow-2xl 
                                       transform transition-all duration-300 ease-in-out 
                                       hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_0_30px_#b49140] "
                        >
                            <div>
                                <div className="overflow-hidden rounded-lg mb-6">
                                    <img
                                        src={service.imgSrc}
                                        alt={service.title}
                                        className="w-full h-64 object-cover rounded-lg"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = service.fallback;
                                        }}
                                    />
                                </div>
                                <h3 className="text-[#b49140] font-semibold mb-3 text-xl leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-white/90 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-[#b49140] font-semibold hover:text-white"
                                >
                                    LEARN MORE
                                    <svg
                                        className="ml-2 w-5 h-5 stroke-[#b49140]"
                                        fill="none"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M13 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center pt-4 mt-12">
                    <button
                        type="button"
                        className="bg-slate-900 text-white font-semibold px-6 py-3 rounded 
                                   shadow-blue-950 shadow-lg hover:bg-[#b49140] 
                                   transition duration-300 w-max select-none 
                                   focus:outline-none focus:ring-4 focus:ring-[#b49140]"
                    >
                        VIEW ALL SERVICES
                    </button>
                </div>
            </div >
        </section >
    );
};

export default ShowServices;
