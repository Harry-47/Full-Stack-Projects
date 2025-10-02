import { useRef } from "react";
import ProductCard from "./ProductCard";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

const ProductSlider = ({ category, products, page }) => {
    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="w-full poppins-regular py-8"
        >
            <div className="flex justify-between items-center mb-6 w-full px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase">{category}</h2>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to={`/${page}/products/category/${category}`}
                        className="relative px-6 py-2 text-white font-bold bg-black rounded-4xl shadow-md hover:bg-gray-800 transition-colors duration-300 overflow-hidden group"
                    >
                        <span className="relative z-10">View all</span>
                        <span className="absolute top-0 left-0 w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[240%] transition-all duration-700 ease-out"></span>
                    </Link>
                </motion.div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 scrollbar-hide w-full px-6"
            >
                {products.map((product) => (
                    <div className="flex-shrink-0" key={product._id}>
                        <ProductCard product={product} page={page} />
                    </div>
                ))}
            </div>

            <div className="relative w-full mt-6 px-6">
                <div className="w-full h-2 bg-gray-200 rounded-4xl">
                    <motion.div
                        className="h-full bg-black rounded-full"
                        style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
                    ></motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductSlider;