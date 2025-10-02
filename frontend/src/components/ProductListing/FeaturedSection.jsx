import { motion } from 'framer-motion';
import ProductCard from '../ProductCard'; 

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const FeaturedSection = ({ products }) => {
    if (!products || products.length === 0) {
        return null; // Don't render if no products
    }

    return (
        <motion.div
            className="w-full poppins-regular py-12 px-4 sm:px-6 lg:px-8 bg-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
                Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
                {products.map((product) => (
                    <motion.div
                        key={product._id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full max-w-[300px]" // Ensure cards take full width on smaller screens
                    >
                        <ProductCard product={product} page="user" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default FeaturedSection;