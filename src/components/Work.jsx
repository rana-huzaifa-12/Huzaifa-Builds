import React from "react";

const Work = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 md:px-10 py-20 bg-[#f8f9fb] font-sans">
            <section
                className="w-full max-w-[1200px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl text-white grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                style={{ minHeight: "450px" }}
            >
                {/* Left Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md select-none">
                        EXCELLENCE SKILLS
                        <br />
                        & QUALITY WORK
                    </h1>
                    <p className="text-gray-200 text-lg max-w-2xl leading-relaxed select-text">
                        We bring experience, reliability, and a commitment to high standards.
                        Every project is handled with care, completed on time, and built to last.
                        You can trust us to deliver honest work, dependable & sustainable results.
                    </p>
                    <button
                        className="bg-[#d4aa57] text-slate-900 font-semibold rounded-lg py-4 px-8 shadow-lg w-fit select-none hover:bg-[#d4ba85] hover:shadow-xl transition-all duration-300 text-lg"
                        aria-label="Hire our services"
                    >
                        HIRE OUR SERVICES
                    </button>
                </div>

                {/* Right Content */}
                <div
                    className="relative bg-cover bg-center flex flex-col justify-center items-center p-12 text-white "
                    style={{
                        backgroundImage: "url('/ps1.png')",
                        borderTopRightRadius: "1rem",
                        borderBottomRightRadius: "1rem",
                    }}
                >
                    <div className="max-w-md bg-gray-900  bg-opacity-100 backdrop-blur-md rounded-xl p-8 space-y-4 w-full text-center">
                        <div className="flex justify-center">
                            <div
                                className="bg-[#e6bf7f] p-5 rounded-xl inline-flex items-center justify-center drop-shadow-md select-none"
                                aria-hidden="true"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10l2.745-1.5a2.25 2.25 0 012.596.45l2.5 3a16 16 0 006.601 6.601l3 2.5a2.25 2.25 0 00.45 2.596L14 21m-4-2.25v-6.75M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="uppercase text-xs sm:text-sm font-semibold tracking-wide text-white select-none">
                            FOR FURTHER INQUIRIES CALL
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white select-text drop-shadow-lg">
                            (+92) 310 4871891
                        </p>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed select-text">
                            When quality matters and timelines count, we're just a call away —
                            skilled hands, honest work, and results you can trust.
                        </p>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Work;
