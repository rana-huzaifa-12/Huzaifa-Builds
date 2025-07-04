import React from 'react';

const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center h-screen text-white flex items-center px-4 sm:px-8"
            style={{
                backgroundImage: 'url("/builderon-img01.jpg")',
            }}
            role="banner"
            aria-label="Construction project management hero section with motivational heading and call to action buttons"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl w-full text-center sm:text-center lg:text-left mx-auto sm:mx-auto lg:ml-16 px-2 sm:px-0">
                <h1 className="font-montserrat font-bold text-[clamp(2rem,5vw,4rem)] leading-tight mb-4">
                    Bring Your Dreams to Reality
                </h1>
                <p className="text-[#eee] text-[clamp(0.95rem,2.2vw,1.2rem)] leading-relaxed mb-8 px-1 sm:px-0">
                    Huzaifa Builds is your trusted partner for construction in DHA, project management,
                    operations & maintenance, asset management, project development, town planning, real estate
                    advisory, and equipment selection. Explore our services to see how we can help turn your
                    vision into reality.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button
                        type="button"
                        aria-label="Contact us button"
                        className="bg-[#b08d4f] hover:bg-[#a47c36] text-white font-semibold text-sm sm:text-base uppercase px-6 py-2 sm:px-7 sm:py-3 rounded transition-colors duration-300"
                    >
                        Contact Us
                    </button>
                    <button
                        type="button"
                        aria-label="Learn more button"
                        className="text-white hover:text-[#7c643a] font-bold text-sm sm:text-base uppercase px-5 py-2 sm:py-3 transition duration-500 hover:bg-white rounded"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
