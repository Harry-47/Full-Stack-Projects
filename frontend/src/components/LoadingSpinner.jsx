import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    const spinnerVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }
    };

    return (
        <div className="flex justify-center items-center min-h-screen poppins-regular bg-white">
            <div className="flex flex-col items-center">
                {/* Main animated circle */}
                <motion.div
                    className="w-16 h-16 rounded-full border-4 border-t-4 border-black border-opacity-70"
                    variants={spinnerVariants}
                    animate="animate"
                >
                </motion.div>

                {/* Animated text */}
                <motion.p
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    className="mt-6 text-xl font-semibold text-gray-800"
                >
                    Loading...
                </motion.p>
            </div>
        </div>
    );
};

export default LoadingSpinner;