import React from 'react';

const ServicesSec1 = () => {
    return (
        <section
            className="relative w-full min-h-[500px] flex items-center justify-center text-center bg-[url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/610fbb44-2f66-44a4-a89a-e8269ede3273.png')] bg-cover bg-center bg-gray-900"
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

            {/* Main heading */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest z-10 text-center">
                SERVICES
            </h2>

            {/* Floating image */}
            <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac793c99-3343-4954-957d-78df3197b51d.png"
                alt="Yellow excavator"
                className="hidden md:block md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 object-cover rounded-md shadow-xl z-20 absolute md:top-10 md:right-5 lg:top-16 lg:right-10 xl:top-20 xl:right-20"
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />




        </section>
    );
};

export default ServicesSec1;
