import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; 

const AboutHero = () => {
    return (
        <section className="bg-black text-white py-20 md:py-32 flex flex-col justify-center items-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >    <div className="h-75 overflow-hidden mb-8">
                <img src={logo} alt="brand logo"
                className='h-120 w-full object-cover bg-blend-multiply' />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    The Story of <span className="bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent">Harryesthetics</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    We believe that aesthetics is more than just design—it's a way of life. Our mission is to fill your world with beauty, one product at a time.
                </p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        to="/user/products"
                        className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-4xl shadow-md hover:bg-gray-200 transition-colors duration-300"
                    >
                        Explore Our Products
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutHero;