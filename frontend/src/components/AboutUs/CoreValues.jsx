import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaLeaf, FaSmile } from 'react-icons/fa';

const values = [
    {
        icon: FaHeart,
        title: "Passion",
        description: "We pour our hearts into every product, ensuring it meets our high standards of quality and design.",
    },
    {
        icon: FaStar,
        title: "Excellence",
        description: "We are committed to delivering the best user experience, from browsing our site to receiving your order.",
    },
    {
        icon: FaLeaf,
        title: "Sustainability",
        description: "Our products are ethically sourced and made with materials that are kind to the planet.",
    },
    {
        icon: FaSmile,
        title: "Customer First",
        description: "Your happiness is our priority. We are always here to assist you with a smile.",
    },
];

const CoreValues = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-12"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Core Values
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-6 rounded-3xl shadow-md text-center"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <value.icon size={48} className="text-black mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;