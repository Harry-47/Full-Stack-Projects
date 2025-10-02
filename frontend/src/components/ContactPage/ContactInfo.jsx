import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-4xl shadow-xl border border-gray-200 flex flex-col justify-between"
        >
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-center text-gray-700">
                        <FaMapMarkerAlt className="text-black text-xl mr-4 flex-shrink-0" />
                        <p className="text-lg">
                            123 Aesthetic Lane, Block 7,
                            <br />
                            Sargodha, Punjab, Pakistan
                        </p>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <FaPhone className="text-black text-xl mr-4 flex-shrink-0" />
                        <p className="text-lg">+92 323 1234567 (Mon-Fri, 9am-5pm PKT)</p>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <FaEnvelope className="text-black text-xl mr-4 flex-shrink-0" />
                        <p className="text-lg">support@harryesthetics.com</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
                <div className="flex space-x-6 justify-center lg:justify-start">
                    <motion.a whileHover={{ scale: 1.2, color: '#3b5998' }} href="https://www.facebook.com/huraira.khan.96742" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors duration-300">
                        <FaFacebook size={32} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, color: '#e4405f' }} href="https://www.instagram.com/huraira.khan47" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors duration-300">
                        <FaInstagram size={32} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, color: '#00acee' }} href="https://www.x.com/huraira96742" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors duration-300">
                        <FaTwitter size={32} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactInfo;