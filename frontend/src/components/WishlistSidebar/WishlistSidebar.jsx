import { useState, useEffect } from "react";
import { FaTimes, FaHeart, FaPlus, FaMinus, FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import handleAddToCart from './handleAddToCart';

const WishlistSidebar = ({ isOpen, onClose }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
    const initialQuantities = {};
    storedWishlist.forEach(item => {
      initialQuantities[item._id] = 1;
    });
    setQuantities(initialQuantities);
  }, [isOpen]);

  const handleRemoveItem = (e, id) => {
    e.stopPropagation();
    const updatedWishlist = wishlistItems.filter(item => item._id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const handleQuantityChange = (e, id, change) => {
    e.stopPropagation();
    setQuantities(prev => {
      const newQuantity = Math.max(1, prev[id] + change);
      return { ...prev, [id]: newQuantity };
    });
  };

  const handleAddToCartClick = async (e, item) => {
    e.stopPropagation();
    const quantity = quantities[item._id] || 1;
    await handleAddToCart(item, quantity);
    handleRemoveItem(e, item._id);
    onClose();
  };

  const shineVariant = {
    animate: {
      backgroundPosition: ['-100% 50%', '100% 50%'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: -10 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed top-0 right-0 h-screen w-80 md:w-96 bg-gray-100 shadow-xl z-50 flex flex-col rounded-4xl poppins-regular"
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
              <FaHeart className="text-red-500" /> My Wishlist
            </h2>
            <motion.button onClick={onClose} className="text-gray-600 hover:text-black transition-transform duration-300 transform hover:rotate-180 cursor-pointer">
              <FaTimes size={24} />
            </motion.button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {wishlistItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your wishlist is empty.</p>
            ) : (
              wishlistItems.map(item => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 rounded-2xl shadow-md flex gap-4 items-center"
                >
                  <img src={item.image} alt={item.title} className="h-16 w-16 object-cover rounded-xl" />

                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
                    <p className="text-green-500 text-xs mt-1">
                      <span className="font-bold text-gray-400!">Price:</span>  {(item.discountedPrice * (quantities[item._id] || 1)).toFixed(2)} $
                    </p>


                    <div className="flex items-center gap-2 mt-2">
                      <motion.button
                        onClick={(e) => handleQuantityChange(e, item._id, -1)}
                        className="text-gray-500 p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaMinus size={10} />
                      </motion.button>
                      <span className="text-sm font-medium w-6 text-center">{quantities[item._id]}</span>
                      <motion.button
                        onClick={(e) => handleQuantityChange(e, item._id, 1)}
                        className="text-gray-500 p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaPlus size={10} />
                      </motion.button>
                    </div>
                  </div>


                  {/* Positioned the buttons with flexbox for better control */}
                  <div className="flex flex-col items-center gap-4"> 
                    <motion.button
                      onClick={(e) => handleAddToCartClick(e, item)}
                      className="text-white bg-black p-2 rounded-full text-xs hover:bg-gray-800 transition-colors hover:scale-110 cursor-pointer"
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaShoppingCart />
                    </motion.button>
                    <motion.button
                      onClick={(e) => handleRemoveItem(e, item._id)}
                      className="text-red-500 hover:text-red-700 hover:scale-110 cursor-pointer"
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTrashAlt size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WishlistSidebar;