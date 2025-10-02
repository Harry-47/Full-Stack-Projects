
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ContactFormSection = () => {
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch('https://formspree.io/f/mrblykre', { // Formspree URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                toast.success("Message sent successfully! We'll get back to you soon.");
            } else {
                setStatus('error');
                toast.error("Oops! Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
            toast.error("Network error. Please check your connection.");
        }
    };

    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-4xl shadow-xl border border-gray-200"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-black peer transition-all duration-300"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-black"
                    >
                        Your Name
                    </label>
                </div>

                <div className="relative group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-black peer transition-all duration-300"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-black"
                    >
                        Your Email
                    </label>
                </div>

                <div className="relative group">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-black peer resize-none transition-all duration-300"
                        placeholder=" "
                        required
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-black"
                    >
                        Your Message
                    </label>
                </div>

                <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 rounded-4xl text-white font-bold shadow-lg relative overflow-hidden group transition-all duration-300 ${
                        status === 'submitting' ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
                    }`}
                >
                    <span className="relative z-10 flex items-center justify-center">
                        {status === 'submitting' ? (
                            <>
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    className="inline-block mr-2"
                                >
                                    🔄
                                </motion.span>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute top-0 left-0 w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[1200%] transition-all duration-700 ease-out"></span>
                </motion.button>
            </form>
        </motion.div>
    );
};

export default ContactFormSection;