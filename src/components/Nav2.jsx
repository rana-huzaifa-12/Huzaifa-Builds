import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Nav2 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Projects', to: '/projects' },
        { label: 'Blogs', to: '/blog' },
        { label: 'Contact Us', to: '/contact' },
        { label: 'About the Developer', to: '/about-the-developer' },
    ];

    const socialLinks = {
        facebook: 'https://www.facebook.com/people/Rana-Huzaifa/100013393063469/',
        instagram: 'https://www.instagram.com/huzaifa_rajput_126/',
        youtube: 'https://www.youtube.com/@PCLab126',
    };

    // Disable scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    return (
        <nav className="bg-[#bb9154] px-5 py-4 font-sans relative z-50">
            {/* Mobile Top Bar */}
            <div className="flex items-center justify-between lg:hidden">
                <div className="flex items-center gap-4">
                    <button
                        className="text-white text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl">
                        Huzaifa Builds
                    </span>
                </div>

                {/* Mobile Social Icons */}
                <div className="flex gap-3 sm:gap-4 md:gap-5 text-lg sm:text-xl md:text-2xl">
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white transition duration-200">
                        <FaFacebookF className="text-white hover:text-blue-700" />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white transition duration-200">
                        <FaInstagram className="text-white hover:text-pink-700" />
                    </a>
                    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white transition duration-200">
                        <FaYoutube className="text-white hover:text-red-500" />
                    </a>
                </div>
            </div>

            {/* Backdrop Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 backdrop-blur-sm z-40"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-[#836633]/90 backdrop-blur-md text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 z-50 shadow-lg`}
            >
                <div className="flex justify-between items-center px-5 py-4 border-b border-yellow-100">
                    <span className="text-lg font-bold">Menu</span>
                    <button className="text-white text-2xl" onClick={() => setMenuOpen(false)}>
                        <HiOutlineX />
                    </button>
                </div>
                <ul className="flex flex-col p-5 space-y-4">
                    {links.map(({ label, to }, i) => (
                        <li key={i}>
                            <Link
                                to={to}
                                className="block font-bold px-4 py-2 rounded hover:bg-[#bb9154] transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto">
                {/* Links */}
                <div className="flex gap-5 items-center">
                    {links.map(({ label, to }, i) => (
                        <Link
                            key={i}
                            to={to}
                            className="text-white font-bold px-4 py-2 rounded-md hover:bg-[#836633] transition duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Social Icons */}
                <div className="flex items-center gap-4 text-xl">
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white transition duration-200">
                        <FaFacebookF className="text-white hover:text-blue-700" />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white transition duration-200">
                        <FaInstagram className="text-white hover:text-pink-700" />
                    </a>
                    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white transition duration-200">
                        <FaYoutube className="text-white hover:text-red-500" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav2;
