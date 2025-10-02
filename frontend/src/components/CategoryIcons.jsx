import {
  FaMobile, FaTshirt, FaLaptop, FaBook, FaHeadphones,
  FaHome, FaBicycle, FaFutbol, FaShoppingCart, FaTv, FaSpa,
  FaBabyCarriage, FaShoePrints, FaGamepad, FaCampground
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const categories = [
  { name: 'Mobiles', icon: <FaMobile /> },
  { name: 'Clothing', icon: <FaTshirt /> },
  { name: 'Laptops', icon: <FaLaptop /> },
  { name: 'Books', icon: <FaBook /> },
  { name: 'Accessories', icon: <FaHeadphones /> },
  { name: 'Home & Garden', icon: <FaHome /> },
  { name: 'Sports', icon: <FaFutbol /> },
  { name: 'Cycling', icon: <FaBicycle /> },
  { name: 'Toys & Games', icon: <FaGamepad /> },
  { name: 'Footwear', icon: <FaShoePrints /> },
  { name: 'Baby Products', icon: <FaBabyCarriage /> },
  { name: 'Electronics', icon: <FaTv /> },
  { name: 'Groceries', icon: <FaShoppingCart /> },
  { name: 'Beauty & Care', icon: <FaSpa /> },
  { name: 'Outdoor Gear', icon: <FaCampground /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const CategoryIcons = ({ page }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 poppins-regular text-gray-700 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Shop by Category</h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, originX: 0.5, originY: 0.5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full cursor-pointer"
            >
              <Link
                to={`/${page}/products/category/${cat.name}`}
                className="flex flex-col items-center text-center w-full p-4 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 relative group rounded-2xl overflow-hidden"
              >
                <div className="text-3xl mb-1 relative z-10">{cat.icon}</div>
                <span className="text-xs font-medium relative z-10">{cat.name}</span>
                <span className="absolute top-0 left-0 w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[530%] transition-all duration-700 ease-out"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryIcons;