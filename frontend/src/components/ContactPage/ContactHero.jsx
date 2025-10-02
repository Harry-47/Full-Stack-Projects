
import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <section className="bg-black text-white py-20 md:py-32 flex flex-col justify-center items-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Get in <span className="bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    We'd love to hear from you! Whether you have a question about our products, need support, or just want to say hello, our team is ready to assist.
                </p>
            </motion.div>
        </section>
    );
};

export default ContactHero;