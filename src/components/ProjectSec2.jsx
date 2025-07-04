import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const ProjectSec2 = () => {
    const projects = [
        {
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3b4c77e-73a1-4aa1-b25e-fb832963521b.png',
            alt: 'Modern multi-story commercial building with glass windows and trees alongside the road under a partly cloudy blue sky',
        },
        {
            src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/59bc3fd9-0b39-46d6-bafe-83540467214b.png',
            alt: 'Tall modern apartment building illuminated at dusk with street lamps and cars in front, tropical plants around',
        },
        {
            src: 'https://img.freepik.com/premium-photo/modern-construction-site-start-construction-monolithic-high-rise-building-construction-industry-technologies_331695-2786.jpg?w=1060',
            alt: 'Multi-storey building construction site with cranes',
        },
        {
            src: '/ps1.png',
            alt: 'Project site 1 with early-stage construction activities and framework',
        },
        {
            src: '/ps2.png',
            alt: 'Project site 2 showing high-rise foundation and steel structures',
        },
        {
            src: '/ps3.png',
            alt: 'Project site 3 nearing completion with modern design elements',
        },
    ];

    return (
        <section className="relative bg-gray-50 font-sans text-gray-800 overflow-hidden">
            {/* Background shape */}
            <div className="absolute top-0 right-0 w-[40vw] h-full bg-gradient-to-br from-[#fef3e7] to-[#fbf0e2] clip-path-polygon pointer-events-none z-[-1]" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-20 pb-16 text-center">
                <div className="inline-block py-1 px-4 mb-4 rounded border border-yellow-600 text-yellow-700 text-xs font-semibold tracking-widest">
                    CONSTRUCTION PROJECTS
                </div>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5">
                    Our Recent Projects
                </h2>

                <p className="max-w-4xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed mb-12">
                    Explore our successfully delivered and in-progress construction projects that reflect our unwavering commitment to quality, attention to detail, and innovation. From landmark commercial structures to vital infrastructure developments, each project showcases our expertise in planning, architectural design, and seamless execution — consistently delivering results you can trust.
                </p>

                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }

                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="w-full max-w-6xl mx-auto mySwiper"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                                <img
                                    src={project.src}
                                    alt={project.alt}
                                    className="w-full h-[260px] object-cover"
                                    onError={(e) => (e.currentTarget.style.display = 'none')}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .clip-path-polygon {
                    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
                }
                .swiper-slide {
                    display: flex;
                    justify-content: center;
                }
                .swiper-pagination {
                    display: none !important;
                }
            `}</style>
        </section>
    );
};

export default ProjectSec2;
