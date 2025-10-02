import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const handleAddToCart = async (product, quantity) => {

    try {

        const response = await fetch('http://localhost:3000/api/user/cart/add', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            credentials: 'include',

            body: JSON.stringify({

                productId: product._id,

                quantity: quantity,

            }),

        });



        if (response.status === 401) {

            toast.warn('Please log in first to add items to your cart.');

            redirect('/auth/login')

        } else if (response.ok) {

            toast.success(`Added ${quantity} ${product.title} to cart `)
            redirect('/user/cart');

        } else {

            toast.warn('Something went wrong. Please try again.');

        }

    } catch (error) {

        console.error('Failed to add to cart:', error);

        toast.warn('Could not connect to the server.');

    }

};



export default handleAddToCart;