import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FilterSidebar = ({ isOpen, onClose }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        brand: searchParams.get('brand') || '',
        minPrice: searchParams.get('minPrice') || '',
        maxPrice: searchParams.get('maxPrice') || '',
        rating: searchParams.get('rating') || '',
        discount: searchParams.get('discount') || ''
    });

    useEffect(() => {
        setFilters({
            brand: searchParams.get('brand') || '',
            minPrice: searchParams.get('minPrice') || '',
            maxPrice: searchParams.get('maxPrice') || '',
            rating: searchParams.get('rating') || '',
            discount: searchParams.get('discount') || ''
        });
    }, [searchParams]);

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleApply = () => {
        const newSearchParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                newSearchParams.set(key, value);
            }
        });
        newSearchParams.set('page', '1');
        setSearchParams(newSearchParams, { replace: true });
        onClose();
    };

    const handleClear = () => {
        setSearchParams({});
        setFilters({ brand: '', minPrice: '', maxPrice: '', rating: '', discount: '' });
        onClose();
    };

    const handleSidebarClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* Overlay for mobile */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            ></div>

            {/* Sidebar Content */}
            <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? '0%' : '-100%' }}
                transition={{ duration: 0.3 }}
                onClick={handleSidebarClick}
                className="fixed top-0 left-0 h-full w-full max-w-xs bg-gray-50 z-50 transform md:static md:translate-x-0 md:h-auto md:max-w-xs md:w-full md:flex-shrink-0 md:flex-grow-0 md:bg-transparent"
            >
                <div className="p-6 bg-white rounded-2xl shadow-lg h-full overflow-hidden poppins-regular md:shadow-none md:p-0">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold ml-5">Filters</h3>
                        {/*Close Button*/}
                        <motion.button
                            onClick={onClose}
                            className="md:hidden text-xl text-gray-500 hover:text-gray-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTimes />
                        </motion.button>
                    </div>

                    <div className="space-y-6">
                        {/* Brand Filter */}
                        <div>
                            <label
                                htmlFor="brand"
                                className="block text-sm font-medium text-gray-700 mb-2 text-center"
                            >
                                Brand
                            </label>
                            <input
                                id="brand"
                                name="brand"
                                type="text"
                                value={filters.brand}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-4xl shadow-sm focus:border-black focus:ring-1 focus:ring-black outline-none mx-auto max-w-[90%]"
                            />
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                                Price Range
                            </label>
                            <div className="flex space-x-3 justify-center">
                                <input
                                    name="minPrice"
                                    type="number"
                                    placeholder="Min"
                                    value={filters.minPrice}
                                    onChange={handleChange}
                                    className="mt-1 block w-1/2 p-3 border border-gray-300 rounded-4xl shadow-sm focus:border-black focus:ring-1 focus:ring-black outline-none"
                                />
                                <input
                                    name="maxPrice"
                                    type="number"
                                    placeholder="Max"
                                    value={filters.maxPrice}
                                    onChange={handleChange}
                                    className="mt-1 block w-1/2 p-3 border border-gray-300 rounded-4xl shadow-sm focus:border-black focus:ring-1 focus:ring-black outline-none"
                                />
                            </div>
                        </div>

                        {/* Rating Filter */}
                        <div>
                            <label
                                htmlFor="rating"
                                className="block text-sm font-medium text-gray-700 mb-2 text-center"
                            >
                                Minimum Rating
                            </label>
                            <input
                                id="rating"
                                name="rating"
                                type="number"
                                step="any"
                                min="0"
                                max="5"
                                value={filters.rating}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-4xl shadow-sm focus:border-black focus:ring-1 focus:ring-black outline-none mx-auto max-w-[90%]"
                            />
                        </div>

                        {/* Discount Filter */}
                        <div>
                            <label
                                htmlFor="discount"
                                className="block text-sm font-medium text-gray-700 mb-2 text-center"
                            >
                                Minimum Discount (%)
                            </label>
                            <input
                                id="discount"
                                name="discount"
                                type="number"
                                value={filters.discount}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-4xl shadow-sm focus:border-black focus:ring-1 focus:ring-black outline-none mx-auto max-w-[90%]"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3 px-2">
                            <motion.button
                                onClick={handleApply}
                                whileHover={{ scale: 1.05, originX: 0.5, originY: 0.5 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative w-full px-4 py-2 text-white font-bold bg-black rounded-4xl hover:bg-gray-800 transition-colors duration-300 shadow-lg cursor-pointer group"
                            >
                                <span className="relative z-10">Apply Filters</span>
                                <span className="absolute top-0 left-0 w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[1200%] transition-all duration-700 ease-out"></span>
                            </motion.button>

                            <motion.button
                                onClick={handleClear}
                                whileHover={{ scale: 1.05, originX: 0.5, originY: 0.5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-4 py-2 text-gray-800 font-bold bg-gray-200 rounded-4xl hover:bg-gray-300 transition-colors duration-200 cursor-pointer shadow-md"
                            >
                                Clear Filters
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    );
};

export default FilterSidebar;