import React from "react";

const Ourmap = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row p-6">

                {/* Map Section */}
                <div className="md:w-1/2 md:pr-4 mb-6 md:mb-0">
                    <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
                        GET IN TOUCH AND CONTACT US!!
                    </h1>
                    <iframe
                        title="Company Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799013094!2d-74.2598656874512!3d40.69767006347757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a174d80cb97%3A0x847e483a9d7bf172!2s2nd%20Floor%2C%2045-A%20Khayaban-e-Iqbal%2C%20Sector%20XX%20DHA%20Phase%203%2C%20Lahore%2C%2054000!5e0!3m2!1sen!2s!4v1631234567890!5m2!1sen!2s"
                        className="w-full h-72 rounded"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="md:w-1/2">
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name*"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Your Subject*"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        <textarea
                            placeholder="Message*"
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            rows={5}
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-950 hover:bg-[#b49140] text-white font-semibold py-2 px-6 rounded transition duration-500"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ourmap;
