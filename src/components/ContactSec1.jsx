import React from 'react'

function ContactSec1() {
    return (
        <div>
            <section className="relative bg-gradient-to-b from-black/75 to-black/40" >
                <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eeaab302-4730-43a3-bfda-c09fd68d6cad.png"
                    alt="Industrial factory interior with molten metal pouring, surrounded by machinery and rising smoke"
                    className="w-full object-cover h-[250px]"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                {/* Colored overlay */}
                <div className="absolute inset-0 bg-[rgba(166,138,58,0.75)] mix-blend-multiply" />
                {/* Centered heading */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white font-extrabold text-4xl md:text-5xl select-none drop-shadow-lg">
                        Contact Us
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default ContactSec1
