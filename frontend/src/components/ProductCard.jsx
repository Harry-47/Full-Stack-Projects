import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import deleteProduct from "../utils/deleteProduct";
import { useState, useEffect } from "react";
import handleAddToCart from "./WishlistSidebar/handleAddToCart";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProductCard = ({ product, page }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isPresent = wishlist.some(item => item._id === product._id);
        setIsWishlisted(isPresent);
    }, [product._id]);

    const handleDelete = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const confirmed = window.confirm("Are you sure you want to delete this product?");
        if (confirmed) {
            await deleteProduct(product._id);
        }
    };

    const handleWishlistToggle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (isWishlisted) {
            wishlist = wishlist.filter(item => item._id !== product._id);
        } else {
            product.discountedPrice = calculateDiscountedPrice(product.price, product.discount)
            wishlist.push(product);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        setIsWishlisted(!isWishlisted);
        toast.success(isWishlisted ? `${product.title} removed from wishlist!` : `${product.title} added to wishlist!`);
    };

    const handleAddToCartClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        handleAddToCart(product, 1);
    };

    // Function to calculate discounted price
    const calculateDiscountedPrice = (price, discount) => {
        const discountedAmount = price * (discount / 100);
        return (price - discountedAmount).toFixed(2); // Round to two decimal places
    };

    return (
        <Link
            to={page === "admin" ? `/admin/dashboard/edit/${product._id}` : `/user/products/${product._id}`}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative group overflow-hidden flex flex-col w-[300px] min-h-[400px] bg-white border border-gray-200 hover:border-black"
        >
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col flex-1"
            >
                {/* Product Image */}
                <div className="relative overflow-hidden h-52 bg-gray-100 p-4">
                    <motion.img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-118"
                    />
                    {product.onSale && (
                        <span className="absolute top-2 left-2 text-xs font-semibold bg-red-500 text-white px-3 py-1 rounded-full">
                            Sale!
                        </span>
                    )}
                </div>

                {/* Action Icons */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                    {page === "user" ? (
                        <motion.button
                            className="p-3 bg-white rounded-full shadow-md text-gray-500 transition-colors duration-300 cursor-pointer"
                            whileHover={{ scale: 1.1, rotate: 360, backgroundColor: 'white' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleWishlistToggle}
                            title="Add to Wishlist"
                        >
                            <FaHeart className={`${isWishlisted ? 'text-red-500' : 'text-gray-500'}`} />
                        </motion.button>
                    ) : (
                        <motion.button
                            className="p-3 bg-white rounded-full shadow-md text-red-500 transition-colors duration-300 cursor-pointer"
                            whileHover={{ scale: 1.1, rotate: 360, backgroundColor: 'white' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleDelete}
                            title="Delete Product"
                        >
                            <MdDelete />
                        </motion.button>
                    )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-1 p-6 relative z-10">
                    <h3 className="text-lg font-bold line-clamp-2 text-gray-900 group-hover:text-black transition-colors duration-300">
                        {product.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                        {product.brand}
                    </p>

                    {/* Price, Rating, and Discount */}
                    <div className="flex flex-col gap-2 mt-auto pt-4">
                        <div className="flex items-center gap-1 text-yellow-400">
                            <FaStar />
                            <span className="text-sm font-semibold text-gray-800">{product.rating || "4.5"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            {product.discount > 0 ? (
                                <>
                                    <p className="text-xl font-bold text-green-600">
                                        {calculateDiscountedPrice(product.price, product.discount)} $
                                    </p>
                                    <p className="text-sm text-gray-500 line-through">
                                        {product.price} $
                                    </p>
                                </>
                            ) : (
                                <p className="text-xl font-bold text-green-600">
                                    {product.price} $
                                </p>
                            )}
                            {product.discount > 0 && (
                                <span className="text-xs font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                                    {product.discount}% OFF!
                                </span>
                            )}
                        </div>

                        {/* Sales and Stock */}
                        <div className="flex justify-between gap-30 mt-2 text-xs font-semibold text-gray-600">
                            <div className="flex items-center gap-1">
                                <span className="text-gray-500">Sales:</span>
                                <span>{product.sales}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-500">Stock:</span>
                                <span>{product.stock}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add to Cart Button (User only) */}
                {page === "user" && (
                    <motion.button
                        className="absolute bottom-26 right-6 z-30 p-4 bg-black text-white rounded-full shadow-lg"
                        onClick={handleAddToCartClick}
                        whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaShoppingCart className="text-lg" />
                    </motion.button>
                )}
            </motion.div>
        </Link>
    );
};

export default ProductCard;