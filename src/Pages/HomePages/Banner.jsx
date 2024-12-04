


import { useState, useEffect } from 'react';
import 'animate.css';

const Banner = () => {

    const slides = [
        {
            id: 1,
            photoURL: "https://i.ibb.co.com/z4fMvDH/tyson-moultrie-BQTHOGNHo08-unsplash.jpg"
        },
        {
            id: 2,
            photoURL: "https://i.ibb.co.com/MgcVS1Q/felix-mooneeram-evlk-Ofk-Q5r-E-unsplash.jpg"
        },
        {
            id: 3,
            photoURL: "https://i.ibb.co.com/Hqfq4Xb/myke-simon-ats-Uq-Im3wxo-unsplash.jpg"
        },
        
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const animations = ['animate__fadeIn', 'animate__slideInRight', 'animate__zoomIn']; // Animations

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval
    }, [slides.length]);

    return (
        <div>
            <div className="relative w-full h-80 overflow-hidden bg-gray-800 text-white">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.photoURL}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? `opacity-100 ${animations[currentIndex % animations.length]}` : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
