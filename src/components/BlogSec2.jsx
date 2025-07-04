import React from 'react';

const BlogSec2 = () => {
    const blogs = [
        {
            img: '/ps1.png',
            alt: 'Excavator at construction site',
            fallback: 'https://placehold.co/600x400/png?text=Image+Not+Available',
            title: 'Hard Work on the Ground',
            text: 'Construction is a physically demanding job requiring strength, skill, and focus. From heavy machinery to site prep, every worker plays a vital role in shaping the world around us.',
        },
        {
            img: '/ps2.png',
            alt: 'Team of workers reviewing blueprints',
            fallback: 'https://placehold.co/600x400/png?text=Image+Not+Available',
            title: 'Coordinated Construction Planning',
            text: 'Behind every great structure is a team of professionals planning each phase. Our process emphasizes communication, timelines, and quality from concept to completion.',
        },
        {
            img: '/ps3.png',
            alt: 'Glass skyscrapers against blue sky',
            fallback: 'https://placehold.co/600x400/png?text=Image+Not+Available',
            title: 'Skyscraper Innovation',
            text: 'Modern skyscrapers are marvels of innovation—combining design, sustainability, and structural integrity. Explore how engineering pushes the limits of vertical space.',
        },
    ];

    return (
        <div className="bg-gray-100 px-8 py-36 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <article
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-black/60 transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
                    >
                        <img
                            src={blog.img}
                            alt={blog.alt}
                            className="w-full object-cover h-60 rounded-lg"
                            onError={(e) => (e.currentTarget.src = blog.fallback)}
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-md font-bold text-yellow-700 uppercase mb-2 leading-snug">
                                {blog.title}
                            </h3>
                            <p className="text-gray-900 font-semibold text-sm flex-grow">
                                {blog.text}
                            </p>
                            <a
                                href="#"
                                className="text-yellow-700 font-semibold text-sm mt-4 inline-block uppercase tracking-wider "
                            >
                                Read More
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BlogSec2;
