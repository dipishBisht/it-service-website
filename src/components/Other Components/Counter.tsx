import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
    start: number;
    end: number;
    duration: number;
}

const CounterItem: React.FC<CounterProps> = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);
    const increment = end > start ? 1 : -1;
    const range = Math.abs(end - start);
    const stepTime = Math.abs(Math.floor(duration / range));

    useEffect(() => {
        if (count !== end) {
            const timer = setInterval(() => {
                setCount(prevCount => {
                    const newCount = prevCount + increment;
                    if (newCount === end) {
                        clearInterval(timer);
                    }
                    return newCount;
                });
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [count, end, increment, stepTime]);

    return <span className="text-4xl font-bold">{count}+</span>;
};

const Counter: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="flex flex-col gap-8 px-16 py-16 text-white">
            <div>
                <ul className="grid grid-cols-4 text-center gap-4 gap-y-10 max-800:grid-cols-2 max-550:grid-cols-1">
                    <li className="flex flex-col gap-5">
                        {inView && <CounterItem start={0} end={5} duration={2000} />}
                        <span className="text-xl text-[#dadada]">Years in IT</span>
                    </li>
                    <li className="flex flex-col gap-5">
                        {inView && <CounterItem start={0} end={10} duration={2000} />}
                        <span className="text-xl text-[#dadada]">Professional Team Members</span>
                    </li>
                    <li className="flex flex-col gap-5">
                        {inView && <CounterItem start={0} end={5} duration={2000} />}
                        <span className="text-xl text-[#dadada]">Projects Delivered</span>
                    </li>
                    <li className="flex flex-col gap-5">
                        {inView && <CounterItem start={0} end={20} duration={2000} />}
                        <span className="text-xl text-[#dadada]">Satisfied Clients</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Counter;
