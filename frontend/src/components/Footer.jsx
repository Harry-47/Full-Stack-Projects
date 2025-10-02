import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <motion.footer
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-black text-white mt-10 poppins-regular"
        >
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand and Social Media */}
                    <div className="flex flex-col items-start space-y-4">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">Harryesthetics</h2>
                        <p className="text-gray-400">
                            Your one-stop shop for all things aesthetic.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/huraira.khan.96742" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <FaFacebook size={24} />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.x.com/huraira96742" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <FaTwitter size={24} />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/huraira.khan47" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-900 transition-colors duration-300">
                                <FaInstagram size={24} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                        <Link to="/user/products" className="text-gray-400 hover:text-white transition-colors duration-300">
                            Shop
                        </Link>
                        <Link to="/user/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                            About Us
                        </Link>
                        <Link to="/user/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                            Contact
                        </Link>
                        <Link to="/user/faqs" className="text-gray-400 hover:text-white transition-colors duration-300">
                            FAQs
                        </Link>
                    </div>

                    {/* My Account */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-white mb-2">My Account</h3>
                        <Link to="/auth/login" className="text-gray-400 hover:text-white transition-colors duration-300">
                            Login
                        </Link>
                        <Link to="/user/cart" className="text-gray-400 hover:text-white transition-colors duration-300">
                            View Cart
                        </Link>
                        <Link to="/user/profile" className="text-gray-400 hover:text-white transition-colors duration-300">
                            My Orders
                        </Link>
                    </div>

                    {/* Developer Links */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-white mb-2">Connect with Developer</h3>
                        <div className="flex space-x-4">
                            <motion.a whileHover={{ scale: 1.4 }} href="https://github.com/harry-47" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.4 }} href="https://linkedin.com/in/abu-huraira-121788362/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.4 }} href="https://www.upwork.com/freelancers/~01a554c1d7deb8a74f?mp_source=share" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                <SiUpwork size={24} />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.8 }} href="https://www.fiverr.com/s/8zDkpEE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                <SiFiverr size={24} />
                            </motion.a>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Harryesthetics. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;