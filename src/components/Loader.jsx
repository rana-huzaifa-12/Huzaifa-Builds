import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    const [loaderSize, setLoaderSize] = useState(70);

    useEffect(() => {

        const updateSize = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setLoaderSize(40);
            } else if (width < 1024) {
                setLoaderSize(60); // Medium screens
            } else {
                setLoaderSize(80); // Large screens
            }
        };

        updateSize(); // Set size on load
        window.addEventListener("resize", updateSize); // Update size on resize

        return () => window.removeEventListener("resize", updateSize); // Clean up
    }, []);

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-[#03071e] z-50">
            <HashLoader color="#f67322" size={loaderSize} />
        </div>
    );
}

export default Loader;
