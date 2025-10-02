import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const HeroBanner = () => {
    return (
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-gray-900 flex items-center justify-center poppins-regular">
            {/* Background Image */}
            <img
                src={logo} 
                alt="Harryesthetics Hero"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Text and Button */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4 drop-shadow-lg"
                >
                    <span className="bg-gradient-to-r from-gray-200 via-blue-400 to-white text-transparent bg-clip-text">
                        Elevate Your Style. Define Your Presence.
                    </span>
                </motion.h1>
                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, ...textVariants.visible.transition }}
                    className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
                >
                    Discover the latest trends and timeless pieces from Sargodha, Punjab, Pakistan's finest collection.
                </motion.p>
                
            </div>
        </div>
    );
};

export default HeroBanner;