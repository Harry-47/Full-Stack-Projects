import { motion } from 'framer-motion';

const CartSummary = ({ subtotal, shippingCost, taxRate, onCheckout }) => {
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 p-6 rounded-4xl shadow-xl border border-gray-200 lg:sticky lg:top-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>
      <div className="space-y-4 text-lg">
        <div className="flex justify-between border-b pb-2">
          <span>Subtotal:</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span>Shipping:</span>
          <span className="font-semibold">${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-2xl font-bold pt-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <motion.button
        type="button"
        onClick={onCheckout}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 w-full py-4 rounded-full text-white font-bold text-lg shadow-lg relative overflow-hidden transition-all duration-300 bg-gray-900 hover:bg-gray-600 cursor-pointer"
      >
        <span className="relative z-10">Proceed to Checkout</span>
        <span className="absolute top-0 left-0 w-10 h-full bg-white/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[1200%] transition-all duration-700 ease-out"></span>
      </motion.button>
    </motion.div>
  );
};

export default CartSummary;