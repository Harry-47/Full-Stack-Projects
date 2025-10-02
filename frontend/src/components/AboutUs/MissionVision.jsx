import { motion } from 'framer-motion';
import { FaEye, FaRocket } from 'react-icons/fa';

const MissionVision = () => {
    return (
        <section className="py-20 px-6 bg-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center bg-white p-8 rounded-4xl shadow-xl"
                >
                    <FaRocket size={48} className="text-black mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600">
                        To curate a collection of timeless products that inspire creativity and enhance everyday living, ensuring every item tells a unique story of craftsmanship and style.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center bg-white p-8 rounded-4xl shadow-xl"
                >
                    <FaEye size={48} className="text-black mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600">
                        To become the leading destination for aesthetic goods, building a community of art enthusiasts and individuals who appreciate the beauty in simplicity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVision;