import { motion } from 'framer-motion';

const OrderSummary = ({ order }) => {
    // You can now safely use order.totalPrice
    // and check for its existence before calling toFixed()
    const finalPrice = order.totalPrice ? order.totalPrice.toFixed(2) : '0.00';
    const finalTax = order.totalPrice ? (order.totalPrice * 0.05).toFixed(2) : '0.00';
    const finalShipping = '10.00';
    const finalTotal = order.totalPrice ? (order.totalPrice + (order.totalPrice * 0.05) + 10).toFixed(2) : '0.00';

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 poppins-regular p-8 rounded-4xl shadow-xl w-full border border-gray-200"
        >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
            <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center">
                    <span className="text-lg">Order Status:</span>
                    <span className="font-semibold text-lg text-black">{order.status}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Order Total:</span>
                    <span className="font-semibold text-lg text-black">${finalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Tax (5%):</span>
                    <span className="font-semibold text-lg text-black">${finalTax}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Shipping:</span>
                    <span className="font-semibold text-lg text-black">${finalShipping}</span>
                </div>
                <div className="border-t border-gray-300 pt-6 mt-6 flex justify-between items-center font-bold text-xl text-black">
                    <span>Final Amount:</span>
                    <span>${finalTotal}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default OrderSummary;