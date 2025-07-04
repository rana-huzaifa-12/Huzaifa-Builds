import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const hasStarted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasStarted.current) {
                        hasStarted.current = true;
                        let start = 0;
                        const duration = 2000;
                        const incrementTime = 30;

                        const step = () => {
                            start += Math.ceil(end / (duration / incrementTime));
                            if (start > end) start = end;
                            setCount(start);
                            if (start < end) {
                                setTimeout(step, incrementTime);
                            }
                        };

                        step();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [end]);

    return (
        <div ref={ref} className="flex flex-col items-center">
            <span className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl">{count}+</span>
            <span className="text-white mt-2 text-sm sm:text-base">{label}</span>
        </div>
    );
};






const CounterSection = () => {
    return (
        <section className="bg-[#0A1F38] rounded-lg p-6 md:p-12 max-w-7xl mx-auto mt-12">
            <div className="flex flex-col sm:flex-row justify-around gap-8 text-center">
                <Counter end={320} label="Happy Customers" />
                <Counter end={135} label="Projects Completed" />
                <Counter end={28} label="Skilled Employees" />
                <Counter end={1} label="Office Branches" />
            </div>
        </section>
    );
};

export default CounterSection;
