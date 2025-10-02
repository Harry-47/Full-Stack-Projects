import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ReviewModal = ({ isOpen, onClose, order, onSubmit }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (order) {
            setReviews(
                order.items.map(item => ({
                    // ⭐ Yahan masla theek karo. item.productId se sirf _id nikalo.
                    productId: item.productId._id, // ✅ Ab ye sirf ID bhejay ga
                    rating: 0,
                    review: '',
                }))
            );
        }
    }, [order]);

    const handleRatingChange = (productId, newRating) => {
        setReviews(prevReviews => prevReviews.map(review =>
            review.productId === productId ? { ...review, rating: newRating } : review
        ));
    };

    const handleReviewTextChange = (productId, newReview) => {
        setReviews(prevReviews => prevReviews.map(review =>
            review.productId === productId ? { ...review, review: newReview } : review
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allRatingsGiven = reviews.every(review => review.rating > 0);
        if (!allRatingsGiven) {
            toast.warn('Please give a rating to all products before submitting.');
            return;
        }
        onSubmit(reviews);
    };

    if (!isOpen || !order) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-8 rounded-4xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto poppins-regular relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Review Your Order</h2>
                        <form onSubmit={handleSubmit}>
                            {reviews.map((reviewData, index) => {
                                // ⭐ Yahan bhi tum product ko sahi se find kar rahe ho, lekin ab seedha _id se find hoga
                                const product = order.items.find(item => item.productId?._id === reviewData.productId)?.productId;
                                if (!product) return null;
                                return (
                                    <div key={product._id} className="mb-6 p-4 border rounded-xl shadow-sm bg-gray-50">
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-16 h-16 object-cover rounded-xl mr-4"
                                            />
                                            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                                        </div>
                                        {/* Rating Stars */}
                                        <div className="flex items-center mb-4">
                                            {[...Array(5)].map((_, i) => {
                                                const ratingValue = i + 1;
                                                return (
                                                    <FaStar
                                                        key={ratingValue}
                                                        className={`cursor-pointer transition-colors ${ratingValue <= reviewData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                        size={24}
                                                        // ⭐ Yahan bhi ID use ho rahi hai
                                                        onClick={() => handleRatingChange(product._id, ratingValue)}
                                                    />
                                                );
                                            })}
                                        </div>
                                        {/* Review Textarea */}
                                        <textarea
                                            value={reviewData.review}
                                            // ⭐ Yahan bhi ID use ho rahi hai
                                            onChange={(e) => handleReviewTextChange(product._id, e.target.value)}
                                            placeholder="Write your review here..."
                                            className="w-full h-24 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                                        />
                                    </div>
                                );
                            })}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 mt-4 rounded-full bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 transition-colors"
                            >
                                Submit Reviews
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ReviewModal;