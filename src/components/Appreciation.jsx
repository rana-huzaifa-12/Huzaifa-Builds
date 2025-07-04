import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        id: 1,
        name: "Zain Shafiq",
        role: "CEO, BuildWithZain Solutions",
        quote:
            "We’ve worked with many consultants before, but none have matched the professionalism and reliability of HUZAIFA BUILDS. ",
    },
    {
        id: 2,
        name: "Sarah Malik",
        role: "Project Manager, UrbanScope",
        quote:
            "HUZAIFA BUILDS exceeded our expectations in every way. Their team was responsive, talented, and always one step ahead.",
    },
    {
        id: 3,
        name: "Usman Tariq",
        role: "Director, Vision Developments",
        quote:
            "Reliable, skilled, and transparent. I’d recommend HUZAIFA BUILDS to anyone looking for top-tier consultancy.",
    },
];

const Appreciation = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white"
            style={{
                backgroundImage: "url('/crane.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 z-10">
                {/* Header */}
                <div className="bg-[rgba(0,0,0,0.6)] p-6 rounded-md max-w-6xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 tracking-wide drop-shadow-md select-none">
                        APPRECIATED BY OUR CUSTOMERS
                    </h2>
                    <p className="mt-4 text-base md:text-md max-w-3xl mx-auto drop-shadow-sm">
                        At HUZAIFA BUILDS, we don’t just deliver services — we build lasting trust.
                        Our clients consistently praise our commitment to quality, transparency, and
                        timely delivery. Their words reflect the strong relationships we've earned
                        through dedication and results.
                    </p>
                </div>

                {/* Swiper Testimonials */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={24}
                    slidesPerView={1}
                >
                    {testimonials.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="max-w-lg mx-auto bg-slate-900 bg-opacity-95 rounded-xl p-8 shadow-lg text-center shasow-black">
                                <blockquote className="italic text-white text-lg leading-relaxed">
                                    “{review.quote}”
                                </blockquote>
                                <p className="mt-6 text-yellow-300 font-semibold">— {review.name}</p>
                                <p className="text-sm text-gray-300">{review.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Appreciation;
