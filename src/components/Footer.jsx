import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#071430] text-white font-sans px-8 py-16">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Description */}
                <div className="space-y-6">
                    <div className="flex flex-col items-start">
                        <svg
                            width="48"
                            height="48"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="mb-2 stroke-amber-500"
                        >
                            <path
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="currentColor"
                                d="M3 21l9-18 9 18H3Z"
                            />
                            <path
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="currentColor"
                                d="M12 14v7"
                            />
                        </svg>
                        <div>
                            <h2 className="text-lg font-bold text-[#c89317]">Huzaifa Builds</h2>
                            <p className="text-xs uppercase tracking-widest text-[#c89317] mt-0.5 leading-[1] select-none">
                                Building the Future
                            </p>
                        </div>
                    </div>
                    <p className="leading-relaxed text-sm max-w-sm">
                        We specialize in modern construction, innovative project management,
                        equipment selection, and real estate advisory. Our commitment is to
                        bring your vision to life with precision and passion.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-4">
                        <a
                            href="https://www.facebook.com/people/Rana-Huzaifa/100013393063469/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-amber-600 border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors duration-300"
                            title="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.instagram.com/huzaifa_rajput_126/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-amber-600 border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors duration-300"
                            title="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.youtube.com/@PCLab126"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-amber-600 border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors duration-300"
                            title="YouTube"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://github.com/rana-huzaifa-12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-amber-600 border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors duration-300"
                            title="GitHub"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Contact Information</h3>
                    <ul className="space-y-3 text-gray-300 text-sm max-w-xs">
                        <li>
                            <span className="font-bold text-white">Phone:</span>{" "}
                            <a
                                href="tel:+923104871891"
                                className="hover:text-amber-600 transition-colors duration-300"
                            >
                                (+92) 310 4871891
                            </a>
                        </li>
                        <li>
                            <span className="font-bold text-white">Mail:</span>{" "}
                            <a
                                href="mailto:contact@huzaifabuilds.com"
                                className="hover:text-amber-600 transition-colors duration-300"
                            >
                                contact@huzaifabuilds.com
                            </a>
                        </li>
                        <li>
                            <span className="font-bold text-white">Address:</span> Plot #12, Main
                            Shahdara,<br />Lahore
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Useful Links</h3>
                    <ul className="space-y-4 text-gray-300 text-sm max-w-xs">
                        <li>
                            <Link to="/" className="hover:text-amber-600 transition-colors duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-amber-600 transition-colors duration-300">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-amber-600 transition-colors duration-300">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-amber-600 transition-colors duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Gallery */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Gallery</h3>
                    <div className="grid grid-cols-3 gap-3 max-w-xs">
                        {[
                            "8d44d6a0-eca5-4543-a368-e598fea97d6c",
                            "628efe66-44fc-4cfc-a2fc-f804bd370522",
                            "bb33a686-ba52-41c8-a7eb-ab9c0d648614",
                            "5f7f32bf-cc87-4d13-8ae0-aee116b74525",
                            "b29286d9-783e-4053-9af8-9cfcedffc0bf",
                            "0964abb6-00a4-4aef-baa8-231563ace739",
                        ].map((id, i) => (
                            <img
                                key={i}
                                src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/${id}.png`}
                                alt={`Gallery ${i + 1}`}
                                className="rounded-lg object-cover w-full h-[80px] transition duration-300 hover:scale-105 hover:shadow-md shadow-white hover:-translate-y-1"
                                onError={(e) => (e.target.style.display = "none")}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-[#1a2642] pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-400 text-xs max-w-[900px] mx-auto gap-4">


                <span>
                    Made with <b className="text-red-500 text-base">❤️</b> by <span className="text-[#ffdb81] font-semibold">Rana Huzaifa</span>
                </span>

                <span>© 2025 Huzaifa Builds. All rights reserved.</span>

                <nav className="flex gap-4 flex-wrap justify-center md:justify-end">
                    {["Privacy Policy", "Terms & Conditions", "FAQ"].map((item, index) => (
                        <React.Fragment key={index}>
                            <Link
                                to="/"
                                className="hover:text-amber-600 transition-colors duration-300"
                            >
                                {item}
                            </Link>
                            {index !== 2 && <span className="hidden md:inline" aria-hidden="true">|</span>}
                        </React.Fragment>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
