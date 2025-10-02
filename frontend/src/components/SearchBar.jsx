import { FaSearch, FaSignOutAlt, FaShoppingCart, FaUserCircle, FaPhone } from 'react-icons/fa';
import { useNavigate, Link, Form, useSearchParams } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImCool } from "react-icons/im";

const Navbar = ({ page }) => {
    const searchParams = useSearchParams()[0]
    const navigate = useNavigate();
    const inputRef = useRef("");
    const [loginState, setLoginState] = useState(false);
    const totalQuantity = JSON.parse(localStorage.getItem('cart')).totalQuantity || 0;

   useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || searchParams.get('isLoggedIn') === "true";
        isLoggedIn && localStorage.setItem("isLoggedIn", "true");
        setLoginState(isLoggedIn);

       
    }, [location, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchTerm = inputRef.current.value.trim();

        if (searchTerm) {
            navigate(page === "admin" ? `/admin/products/search?keyword=${searchTerm}` : `/user/products/search?keyword=${searchTerm}`);
        } else {
            return; // Do nothing if the input is empty
        }
    };

    return (
        <nav className="w-full max-w-[100vw] flex items-center justify-between px-2 sm:px-4 py-3 bg-white shadow-md rounded-4xl poppins-regular overflow-x-hidden sm:sticky top-0 z-50 ">
            
            
            
            {/* Left side: Brand, About, and Contact links */}
            <div className=" hidden md:flex items-center gap-1 md:gap-4 navbar-brand-links ">
                <motion.div whileHover={{ scale: 1.05 }} className="flex text-lg sm:text-xl md:text-2xl font-bold items-center gap-1 ">
                    <Link to={page === "admin" || page === "admin-order" || page === "admin-user" ? "/admin/dashboard" : "/user/about"} className="flex items-center gap-1">
                        <ImCool className="text-gray-800 text-lg sm:text-2xl md:text-3xl animate-spin duration-300" />
                        <span className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-black via-gray-300 to-blue-500 bg-clip-text text-transparent animate-gradient-slow">
                            Harryesthetics
                        </span>
                    </Link>
                </motion.div>
                {page !== "admin" && page !== "admin-order" && page !== "admin-user" && (
                    <div className="hidden sm:flex items-center gap-4 text-sm md:text-base font-semibold">
                       
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="/user/contact" className="text-gray-700 hover:text-black transition-colors duration-300">
                                <FaPhone></FaPhone>
                            </Link>
                        </motion.div>
                    </div>
                )}
            </div>

            {/* The search bar */}
            {
                page !== "admin-order" && page!== "admin-user" && (
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center gap-1 p-0.5 sm:p-2 bg-gray-100 rounded-full w-full max-w-[45%] sm:max-w-[60%] md:max-w-lg mx-0.5 sm:mx-2 md:mx-4 relative group"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            name="search"
                            placeholder="Search Products..."
                            className="flex-1 p-0.5 sm:p-2 bg-gray-100 text-black outline-none rounded-full placeholder-gray-500 text-xs sm:text-sm transition-all duration-300 focus:w-full focus:bg-white"
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-0.5 sm:p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-200"
                        >
                            <FaSearch className="text-gray-700 text-xs sm:text-base" />
                        </motion.button>
                    </form>
                )
            }

            {/* Right side icons */}
            <motion.div className="flex items-center gap-0.5 sm:gap-1 md:gap-4 navbar-icons">
                {page === "admin" || page === "admin-order" || page==="admin-user"? (
                    <Form method="post" action="/auth/logout">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative p-3 w-16 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 overflow-hidden cursor-pointer group text-sm sm:text-lg md:text-2xl "
                        >
                            <span className="relative z-10"> <FaSignOutAlt className="inline-block" /></span>
                            <span className="absolute top-0 left-0 w-12 sm:w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[120%] transition-all duration-700 ease-out"></span>
                        </motion.button>
                    </Form>
                ) : (
                    <>
                        <Link to="/user/cart" className="relative">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 overflow-hidden cursor-pointer group text-sm sm:text-lg md:text-2xl"
                            >
                                <span className="relative z-10"><FaShoppingCart /></span>
                                <span className="absolute top-0 left-0 w-8 sm:w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[120%] transition-all duration-700 ease-out"></span>
                            </motion.button>
                            {totalQuantity > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs sm:text-xs font-bold rounded-full h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 flex items-center justify-center"
                                >
                                    {totalQuantity}
                                </motion.span>
                            )}
                        </Link>
                        {loginState ? (
                            <>
                                <Link to="/user/profile" className="relative">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 overflow-hidden cursor-pointer group text-sm sm:text-lg md:text-2xl"
                                    >
                                        <span className="relative z-10"><FaUserCircle /></span>
                                        <span className="absolute top-0 left-0 w-8 sm:w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[120%] transition-all duration-700 ease-out"></span>
                                    </motion.button>
                                </Link>
                                <Form method="post" action="/auth/logout">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 overflow-hidden cursor-pointer group text-sm sm:text-lg md:text-2xl"
                                    >
                                        <span className="relative z-10"><FaSignOutAlt /></span>
                                        <span className="absolute top-0 left-0 w-8 sm:w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[120%] transition-all duration-700 ease-out"></span>
                                    </motion.button>
                                </Form>
                            </>
                        ) : (
                            <Link to="/auth/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative p-1 sm:p-2 bg-black text-white rounded-full hover:bg-gray-800 overflow-hidden cursor-pointer group poppins-bold text-sm sm:text-sm md:text-base"
                                >
                                    <span className="relative z-10">Login</span>
                                    <span className="absolute top-0 left-0 w-8 sm:w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[120%] transition-all duration-700 ease-out"></span>
                                </motion.button>
                            </Link>
                        )}
                    </>
                )}
            </motion.div>
        </nav>
    );
};

export default Navbar;