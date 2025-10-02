import { motion } from 'framer-motion';

const OrderHistorySummary = ({ order }) => {
    const subtotal = order?.subtotal || 0;
    const shippingCost = order?.shippingCost || 0;
    const totalPrice = order?.totalPrice || 0;
    
    const tax = totalPrice - subtotal - shippingCost;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-8 rounded-4xl shadow-xl w-full poppins-regular border border-gray-200"
        >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h3>
            <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center">
                    <span className="text-lg">Order Date:</span>
                    <span className="font-semibold text-lg text-gray-900">{new Date(order.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Subtotal:</span>
                    <span className="font-semibold text-lg text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Shipping:</span>
                    <span className="font-semibold text-lg text-gray-900">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Tax:</span>
                    <span className="font-semibold text-lg text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-300 pt-6 mt-6 flex justify-between items-center font-bold text-xl text-black">
                    <span>Total Price:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default OrderHistorySummary;