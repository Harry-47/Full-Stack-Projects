import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const ContinueWithGoogle = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
        >
            
             
                <button 
                onClick={() => {
                    window.location.href = "http://localhost:3000/api/auth/google";
                }}
                    type="button"
                    className="relative overflow-hidden bg-white text-gray-700 w-full py-3 rounded-4xl font-semibold shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors duration-300 border-2 border-gray-300 hover:bg-gray-100"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </span>
                </button>
            
        </motion.div>
    );
};

export default ContinueWithGoogle;