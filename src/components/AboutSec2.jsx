import React from 'react';

const AboutSec2 = () => {
    const data = [
        {
            title: "OUR MISSION",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-1 8a9 9 0 100-18 9 9 0 000 18zM7 20a5 5 0 0110 0" />
                </svg>
            ),
            text: "At Huzaifa Builds, our mission is to deliver top-notch construction solutions with innovation, quality, and integrity. We aim to turn our clients’ visions into reality through expert planning, flawless execution, and a relentless focus on excellence.",
        },
        {
            title: "OUR VISION",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m0-5a5 5 0 10-10 0 5 5 0 0010 0zM14.828 14.828a4 4 0 01-5.656 0" />
                </svg>
            ),
            text: "Our vision is to become a leading force in modern construction by embracing technology, sustainability, and client-centric values. We strive to set new benchmarks for the industry with every project we complete.",
        },
        {
            title: "OUR GOAL",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v14a7 7 0 007 7 7 7 0 007-7V8a5 5 0 00-5-5H5z" />
                </svg>
            ),
            text: "Our goal is to exceed client expectations by completing every project on time, within budget, and with unmatched quality. We invest in our team, adopt sustainable practices, and stay committed to innovation to ensure lasting results.",
        },
    ];

    return (
        <section className="bg-gray-200 py-10 px-6 md:px-10" >
            <div className="max-w-7xl mx-auto  p-10 md:p-14 rounded-xl flex flex-col md:flex-row justify-center gap-10">
                {data.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-gray-600 shadow hover:shadow-xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2 p-8 max-w-sm mx-auto flex flex-col items-center text-center"
                    >
                        <div className="bg-yellow-400 text-white rounded-full p-5 shadow-lg shadow-yellow-300/50 mb-6">
                            {card.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-3">{card.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSec2;
