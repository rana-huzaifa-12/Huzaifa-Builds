import React from 'react';

const AboutTheDeveloper = () => {
    return (
        <section className="w-full bg-white text-[#061531] px-6 sm:px-10 md:px-16 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Left: Developer Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl border shadow-md shadow-[#061531]/40">
                    <img
                        src="/huzaifa.jpg"
                        alt="Developer"
                        className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/400x400?text=Developer';
                        }}
                    />
                </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#061531]">About the Developer</h1>

                <p className="text-lg sm:text-xl leading-relaxed">
                    Hi! I'm <span className="font-bold text-[#061531]">Rana Huzaifa</span>, an aspiring <span className="font-bold text-[#061531]">MERN Stack Developer</span> currently focused on crafting powerful and responsive front-end experiences.
                    <br /><br />
                    I'm the developer behind <span className="font-bold text-[#061531]">Huzaifa Builds</span>, also known as <span className="font-bold text-[#061531]">Construct Mate</span> — a project aimed at enhancing the digital experience in the construction and furnishing space.
                    <br /><br />
                    With a solid base in HTML, CSS, JavaScript, and React, I specialize in building user-friendly interfaces using tools like Tailwind CSS, Swiper.js, and AOS for modern scroll and carousel interactions.
                </p>

                <div className="mt-8 text-sm sm:text-base text-[#061531]">
                    Built with: <span className="font-semibold ">React, Tailwind CSS, Swiper.js, IntersectionObserver, and more.</span>
                </div>
            </div>
        </section>
    );
};

export default AboutTheDeveloper;
