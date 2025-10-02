import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Pagination = ({ currentPage, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", newPage.toString());
      setSearchParams(newSearchParams);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-6 poppins-regular ">
      <motion.button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden px-4 py-2 text-sm font-bold bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">Previous</span>
        <span className="absolute top-0 left-0 w-10 h-full bg-black/10 -skew-x-12 transform -translate-x-full group-hover:translate-x-[1200%] transition-all duration-700 ease-out"></span>
      </motion.button>

      <div className="overflow-ellipsis p-4 space-x-3 space-y-4 w-fit">
      {pages.map(page => (
        <motion.button
          key={page}
          onClick={() => handlePageChange(page)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 text-sm font-bold rounded-4xl transition-colors duration-200 ${page === currentPage ? 'bg-black text-white shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {page}
        </motion.button>
      ))}
      </div>

      <motion.button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden px-4 py-2 text-sm font-bold bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">Next</span>
        <span className="absolute top-0 left-0 w-10 h-full bg-black/10 -skew-x-12 transform -translate-x-full group-hover:translate-x-[1200%] transition-all duration-700 ease-out"></span>
      </motion.button>
    </div>
  );
};

export default Pagination;