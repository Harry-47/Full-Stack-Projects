// src/components/CheckoutCarousel.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'; 
import image1 from '../assets/image1.png'; 
import image2 from '../assets/image2.png'; 
import image3 from '../assets/image3.png'; 
import image4 from '../assets/image4.png'; 

const carouselContent = [
    { 
        id: 1, 
        text: "Hype. Redefined. With our cutting-edge tech, style meets substance.", 
        image: image1,
        style: 'text-cyan-100'
    },
    { 
        id: 2, 
        text: "Where innovation meets elegance. We're more than just a brand.", 
        image: image2,
        style: 'text-cyan-100'
    },
    { 
        id: 3, 
        text: "This is not just a purchase, it's an aesthetic statement.", 
        image: image3,
        style: 'text-cyan-100' 
    },
    { 
        id: 4, 
        text: "Quality that speaks for itself. Built for you, by us.", 
        image: image4,
        style: 'text-cyan-100' 
    },
];

const CheckoutCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % carouselContent.length
            );
        }, 3000); // Change every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    const currentItem = carouselContent[currentIndex];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className={`relative p-8 rounded-4xl  shadow-xl flex flex-col justify-center items-center h-118 text-center ${currentItem.style}`}
            >
                <div className="absolute inset-0 rounded-4xl overflow-hidden">
                    <img
                        src={currentItem.image}
                        alt="Product Aesthetic"
                        className="w-full h-full object-cover rounded-4xl  dark:brightness-50"
                    />
                </div>
                
                <div className="relative z-10 flex flex-col items-center bg-gradient-to-r from-purple-400 via-blue-400 to-white p-6 rounded-4xl text-transparent bg-clip-text">
                    <img src={logo} alt="Logo" className="w-24 h-auto mb-6 rounded-2xl object-cover" />
                    <h2 className="text-3xl font-bold mb-4">
                        {currentItem.text}
                    </h2>
                    <p className="text-sm italic">
                        The aesthetics you've been waiting for.
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CheckoutCarousel;