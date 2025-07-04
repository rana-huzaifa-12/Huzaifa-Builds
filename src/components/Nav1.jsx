import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";


const Nav1 = () => {
    return (

        <div className="flex flex-col md:flex-row items-center justify-around px-5 md:px-10 py-5 bg-[#061531] text-[#ffdb81] font-sans gap-6 md:gap-0 flex-wrap">

            <div className="flex flex-col items-center text-center w-full md:w-auto">
                <img
                    src="logo.png"
                    alt="Logo"
                    className="w-38 h-38  md:w-[140px] md:h-[160px] object-contain"
                />
            </div>


            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-white items-center">

                <div className="hidden md:flex items-center gap-3 p-3 hover:bg-blue-950 rounded">

                    <div className="w-12 h-12 border-2 border-[#ffdb81] flex items-center justify-center rounded-sm">
                        <p className="w-5 h-5"><FaPhone /></p>
                    </div>
                    <div>
                        <div> <a href="tel:+923245898647" className="hover:text-[#ffdb81]">
                            (+92) 310 4871891
                        </a>
                        </div>
                        <div className="text-sm text-[#ffdb81]">Phone Number</div>
                    </div>

                </div>


                <div className="hidden md:flex items-center gap-3 p-3 hover:bg-blue-950 rounded">
                    <div className="w-12 h-12 border-2 border-[#ffdb81] flex items-center justify-center rounded-sm">
                        <p className="w-5 h-5"><MdEmail /></p>
                    </div>
                    <div>
                        <div><a href="mailto:ranarajpoot1266@gmail.com" className="hover:text-[#ffdb81]">
                            ranarajpoot1266@gmail.com
                        </a>
                        </div>
                        <div className="text-sm text-[#ffdb81]">Email Us</div>
                    </div>
                </div>


                <div className="hidden md:flex items-center gap-3 p-3 hover:bg-blue-950 rounded">
                    <div className="w-12 h-12 border-2 border-[#ffdb81] flex items-center justify-center rounded-sm">
                        <p className="w-5 h-5"><MdLocationPin /></p>
                    </div>
                    <div>
                        <div>Shahdara Lahore</div>
                        <div className="text-sm text-[#ffdb81]">Our Location</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav1;
