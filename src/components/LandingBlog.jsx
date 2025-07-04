import React from "react";

const LandingBlog = () => {
    return (
        <div className="bg-white text-gray-700 font-sans min-h-[80vh] " >
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 h-full ">

                {/* First Card */}
                <article className="border border-slate-800 rounded-md overflow-hidden flex flex-col h-full transition duration-300 hover:shadow-lg shadow-black hover:-translate-y-1">
                    <div className="flex-shrink-0">
                        <img
                            src="/1man.png"
                            alt="Smiling construction worker"
                            className="w-full h-64 object-cover"
                            onError={(e) => (e.target.style.display = 'none')}
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-slate-900 font-bold text-lg mb-3">
                            CONSTRUCTION IS HARD WORKING PROJECT
                        </h3>
                        <p className="text-base leading-relaxed flex-grow">
                            Construction is one of the most physically and mentally demanding professions. It involves long hours, labor-intensive tasks, and precise coordination between multiple teams...
                        </p>
                        <a href="#" className="mt-4 inline-block text-sm font-semibold text-yellow-700 hover:text-yellow-800 transition-colors select-none">
                            READ MORE
                        </a>
                    </div>
                </article>

                {/* Second Card */}
                <article className="border border-slate-800 rounded-md overflow-hidden flex flex-col h-full transition duration-300 hover:shadow-lg shadow-black hover:-translate-y-1">
                    <div className="flex-shrink-0">
                        <img
                            src="/ps3.png"
                            alt="Construction workers group"
                            className="w-full h-64 object-cover"
                            onError={(e) => (e.target.style.display = 'none')}
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-slate-900 font-bold text-lg mb-3">
                            BUILDING THE CONSTRUCTION PROJECT
                        </h3>
                        <p className="text-base leading-relaxed flex-grow">
                            Building a construction project is a complex journey that begins with a blueprint and evolves into a tangible structure through planning, coordination, and hands-on execution...
                        </p>
                        <a href="#" className="mt-4 inline-block text-sm font-semibold text-yellow-700 hover:text-yellow-800 transition-colors select-none">
                            READ MORE
                        </a>
                    </div>
                </article>

                {/* Text Content + CTA */}
                <section className="flex flex-col justify-center max-w-md">
                    <h2 className="text-slate-900 font-extrabold text-3xl mb-6">
                        Checkout Our Latest Blog
                    </h2>
                    <p className="mb-5 leading-relaxed text-base">
                        Stay updated with the latest trends, innovations, and expert tips in the world of construction. From modern architecture to sustainable building practices...
                    </p>
                    <p className="mb-8 leading-relaxed text-base">
                        Discover how technology is transforming construction sites and learn practical strategies to improve project efficiency...
                    </p>
                    <button
                        type="button"
                        className="bg-slate-900 text-white font-semibold shadow-blue-950 px-6 py-3 rounded shadow-lg hover:bg-[#b49140] transition duration-300 w-max select-none focus:outline-none focus:ring-4 focus:ring-slate-300"
                    >
                        VIEW ALL BLOGS
                    </button>
                </section>
            </div>
        </div>
    );
};

export default LandingBlog;
