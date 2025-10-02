import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Ready to transform your space?
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Join our community and discover the perfect blend of style and substance.
                </motion.p>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/user/contact"
                        className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-4xl shadow-md hover:bg-gray-200 transition-colors duration-300"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCTA;