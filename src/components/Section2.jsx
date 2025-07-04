import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// import './styles.css'; // Optional: add your custom styles here
import { EffectCards } from 'swiper/modules';

const images = [
    '/ps1.png',
    '/ps2.gif',
    '/1man.png',
    '/ps3.png',
    '/ps4.png',
    '/1man.png',
    '/ps2.gif',
    '/ps3.png',
    '/ps4.png',
    '/ps1.png',
    '/ps2.gif',
    '/ps3.png',
    '/1man.png',
    '/ps1.png',
    '/ps2.gif',
    '/ps3.png',
    '/ps4.png',
    '/ps1.png',
    '/ps2.gif',
    '/1man.png',
    '/ps3.png',
    '/ps4.png',
    '/ps1.png',
    '/ps2.gif',
    '/1man.png',
    '/ps3.png',
    '/ps4.png',
];


const Sec2 = () => {
    return (
        <section
            className="flex flex-wrap gap-10 my-10 px-[10vw] justify-center items-start py-12"
            aria-label="About This Project"
        >
            {/* Image */}
            <div className="flex-1 min-w-[300px] max-w-[500px] rounded-xl overflow-hidden ">







                <div className="w-full py-10 flex justify-center items-center bg-gray-100">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-[300px] h-[400px]"

                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                    onError={(e) => (e.target.src = '/fallback.png')}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>



            </div>

            {/* Text Section */}
            <div className="flex-1 min-w-[300px] max-w-[550px]">
                <h2 className="text-[#b49140] font-extrabold text-2xl mb-2">
                    About This Project
                </h2>
                <em className="block font-semibold italic mb-4 text-gray-700">
                    A fully responsive construction website built using React and Tailwind CSS.
                </em>
                <p className="leading-relaxed mb-4 text-gray-800">
                    <strong className="font-bold">Huzaifa Builds</strong> is a modern web
                    application designed for construction companies. It includes a stylish
                    homepage, image sliders, service sections, and contact details. The site
                    is fully responsive and utilizes technologies such as React, Swiper.js,
                    Tailwind CSS, and AOS animations to deliver a clean and professional user experience.
                </p>

                {/* Key Points */}
                <div className="bg-gray-300 rounded-xl p-5 font-bold text-gray-800 grid grid-cols-2 gap-y-4 gap-x-6 mt-6">
                    <div className="relative pl-5 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-[#b49140] before:rounded-full before:left-0 before:top-2">
                        Built with React & Tailwind
                    </div>
                    <div className="relative pl-5 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-[#b49140] before:rounded-full before:left-0 before:top-2">
                        Swiper.js and AOS Integrated
                    </div>
                    <div className="col-span-2 relative pl-5 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-[#b49140] before:rounded-full before:left-0 before:top-2">
                        Clean UI, Fast Loading, Fully Responsive
                    </div>
                </div>

                {/* Signature */}
                <div className="flex flex-wrap justify-between items-center gap-6 mt-10">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/455b0cf1-4613-435b-b103-2d706b397021.png"
                            alt="Developer"
                            className="w-[65px] h-[65px] rounded-full object-contain bg-white shadow-md"
                            onError={(e) =>
                            (e.target.src =
                                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/427c0d61-aba5-46d3-a13c-cba4fb690c42.png")
                            }
                        />
                        <div className="max-w-[280px]">
                            <strong className="text-[#b49140] text-sm uppercase tracking-wide block mb-1">
                                Rana  Huzaifa
                            </strong>
                            <span className="text-sm text-gray-800 leading-tight block">
                                Frontend Developer<br />
                                HTML, CSS, Tailwind CSS, JavaScript, React JS
                            </span>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/logo2.png"
                            alt="Project Logo"
                            className="w-[75px] h-[75px] rounded-full object-contain bg-[#010124] shadow-md"
                        />
                    </div>
                </div>

                {/* Button */}
                <button
                    type="button"
                    className="mt-12 block bg-[#001029] hover:bg-[#b49140] text-white shadow-blue-950 font-extrabold text-lg py-3 px-10 rounded-md mx-auto shadow-lg hover:shadow-xl transition duration-300 uppercase"
                    aria-label="More About Us"
                >
                    More About Us
                </button>
            </div>
        </section>
    );
};

export default Sec2;
