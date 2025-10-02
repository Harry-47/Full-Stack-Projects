import { motion } from 'framer-motion';
import { FaBoxes, FaTruck, FaClock, FaCheckCircle } from 'react-icons/fa';

const OrderStats = ({ orders }) => {
    // Agar orders array nahi hai to kuch na dikhao
    if (!orders || orders.length === 0) {
        return null;
    }

    // Orders ko status wise count kar lo
    const totalOrders = orders.length;
    const deliveredOrders = orders.filter(order => order.status === 'Delivered').length;
    const pendingOrders = orders.filter(order => order.status === 'Pending' || order.status === 'Shipped').length;
    const canceledOrders = orders.filter(order => order.status === 'Canceled' || order.status === 'Failed').length;

    const stats = [
        { icon: <FaBoxes size={24} />, label: "Total Orders", value: totalOrders, color: "bg-blue-100 text-blue-800" },
        { icon: <FaCheckCircle size={24} />, label: "Delivered", value: deliveredOrders, color: "bg-green-100 text-green-800" },
        { icon: <FaClock size={24} />, label: "Pending", value: pendingOrders, color: "bg-yellow-100 text-yellow-800" },
        { icon: <FaTruck size={24} />, label: "Canceled", value: canceledOrders, color: "bg-red-100 text-red-800" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between p-6 rounded-3xl shadow-lg bg-white"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>
                        {stat.icon}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default OrderStats;