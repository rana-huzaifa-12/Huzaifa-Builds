import React from 'react';

const ProjectSec1 = () => {
    return (
        <section
            className="relative w-full h-84 flex items-center justify-center bg-black bg-opacity-60"
            style={{
                backgroundImage:
                    "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93c6f214-ec4d-4cec-93b6-1340d13d2867.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="relative text-white font-extrabold text-4xl md:text-5xl tracking-wide select-none z-10">
                PROJECTS
            </h1>
        </section>
    );
};

export default ProjectSec1;
