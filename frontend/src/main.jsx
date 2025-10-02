// main.jsx
import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loading the components 🚀
const ProductDetails = lazy(() => import('./pages/User/ProductDetails/ProductDetails.jsx'));
const ProductListing = lazy(() => import('./pages/User/ProductListing/ProductListing.jsx'));
const ProductListingCategory = lazy(() => import('./pages/User/ProductListingCategory/ProductListingCategory.jsx'));
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard/Dashboard.jsx'));
const AdminProductListing = lazy(() => import('./pages/Admin/ProductListing/AdminProductListing.jsx'));
const AdminProductListingCategory = lazy(() => import('./pages/Admin/ProductListingCategory/AdminProductListingCategory.jsx'));
const UsersData = lazy(() => import('./pages/Admin/UsersData/UsersData.jsx'));
const Orders = lazy(() => import('./pages/Admin/Orders/Orders.jsx'));
const AddProduct = lazy(() => import('./pages/Admin/AddProduct/AddProduct.jsx'));
const AdminProductDetails = lazy(() => import('./pages/Admin/ProductDetails/ProductDetails.jsx'));
const CartPage = lazy(() => import('./pages/User/Cartpage/Cartpage.jsx'));
const Checkout = lazy(() => import('./pages/User/Checkout/Checkout.jsx'));
const UserProfile = lazy(() => import('./pages/User/UserProfile/UserProfile.jsx'));
const Register = lazy(() => import('./pages/Auth/Register/Signup.jsx'));
const Login = lazy(() => import('./pages/Auth/Login/Login.jsx'));
const FAQPage = lazy(() => import('./pages/User/FAQ/FAQPage.jsx'));
const AboutPage = lazy(() => import('./pages/User/About/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/User/Contact/ContactPAge.jsx'));
const Forget = lazy(() => import('./pages/Auth/Forget/Forget.jsx'));
const Reset = lazy(() => import('./pages/Auth/Reset/Reset.jsx'));

// Loaders and Actions (in ko lazy nahi karna hota, yeh aam imports rahenge)
import loadProductDetails from './pages/User/ProductDetails/utils/loadProductDetails.js';
import { productListingLoader } from './pages/User/ProductListing/utils/loader.js';
import { AdminproductListingCategoryLoader } from './pages/Admin/ProductListingCategory/utils/ProdcutListingCategoryLoader.js';
import ProductListingCategoryLoader from './pages/User/ProductListingCategory/utils/ProductListingCategoryLoader.js';
import AdminDashboardLoader from './pages/Admin/Dashboard/utils/AdminDashboardLoader.js';
import logout from './pages/Auth/logout.js';
import AdminProductListingLoader from './pages/Admin/ProductListing/utils/AdminProductListingLoader.js';
import loadUsersData from './pages/Admin/UsersData/utils/loadUsersData.js';
import actionUsersData from './pages/Admin/UsersData/utils/actionUsersData.js';
import loadOrders from './pages/Admin/Orders/utils/loadOrders.js';
import actionAddProduct from './pages/Admin/AddProduct/utils/actionAddProduct.js';
import loadAdminProductDetails from './pages/Admin/ProductDetails/utils/loadProductDetials.js';
import actionEditProduct from './pages/Admin/ProductDetails/utils/actionProductDetails.js';
import laodCartpage from './pages/User/Cartpage/utils/loadCartpage.js';
import actionCartPage from './pages/User/Cartpage/utils/actionCartPage.js';
import { actionCheckout } from './pages/User/Checkout/utils/actionCheckout.js';
import loadUserProfile from './pages/User/UserProfile/utils/loadUserProfile.js';
import actionLogin from './pages/Auth/Login/actionLogin.js';
import actionRegister from './pages/Auth/Register/actionRegister.js';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<LoadingSpinner/>}><ProductListing /></Suspense>,
    loader: productListingLoader,
  },
  {
    path: '/user/products',
    element: <Suspense fallback={<LoadingSpinner/>}><ProductListing /></Suspense>,
    loader: productListingLoader,
  },
  {
    path: '/user/products/search/',
    element: <Suspense fallback={<LoadingSpinner/>}><ProductListingCategory /></Suspense>,
    loader: ProductListingCategoryLoader,
  },
  {
    path: '/user/products/category/:category',
    element: <Suspense fallback={<LoadingSpinner/>}><ProductListingCategory /></Suspense>,
    loader: ProductListingCategoryLoader,
  },
  {
    path: '/user/products/:productId',
    element: <Suspense fallback={<LoadingSpinner/>}><ProductDetails /></Suspense>,
    loader: loadProductDetails,
  },
  {
    path: '/product/:productId',
    element: <Suspense fallback={<LoadingSpinner/>}><ProductDetails /></Suspense>,
    loader: loadProductDetails,
  },
  {
    path: '/user/cart',
    element: <Suspense fallback={<LoadingSpinner/>}><CartPage /></Suspense>,
    loader: laodCartpage,
    action: actionCartPage,
  },
  {
    path: '/user/checkout',
    element: <Suspense fallback={<LoadingSpinner/>}><Checkout /></Suspense>,
    action: actionCheckout,
  },
  {
    path: '/user/profile/',
    element: <Suspense fallback={<LoadingSpinner/>}><UserProfile /></Suspense>,
    loader: loadUserProfile,
  },
   {
    path: '/user/profile/:id',
    element: <Suspense fallback={<LoadingSpinner/>}><UserProfile /></Suspense>,
    loader: loadUserProfile,
  },
  {
    path: '/user/faqs',
    element: <Suspense fallback={<LoadingSpinner/>}><FAQPage /></Suspense>,
  },
  {
    path: '/user/about',
    element: <Suspense fallback={<LoadingSpinner/>}><AboutPage /></Suspense>,
  },
  {
    path: '/user/contact',
    element: <Suspense fallback={<LoadingSpinner/>}><ContactPage /></Suspense>,
  },
  {
    path: '/auth/login',
    element: <Suspense fallback={<LoadingSpinner/>}><Login /></Suspense>,
    action: actionLogin,
  },
  {
    path: '/auth/register',
    element: <Suspense fallback={<LoadingSpinner/>}><Register /></Suspense>,
    action: actionRegister,
  },
  {
    path: '/auth/logout',
    action: logout,
  },
  {
    path: '/auth/forget-password',
    element: <Suspense fallback={<LoadingSpinner/>}><Forget /></Suspense>,
  },
  {
    path: '/auth/reset-password/:token',
    element: <Suspense fallback={<LoadingSpinner/>}><Reset /></Suspense>,
  },
  {},
  {
    path: '/admin/dashboard',
    element: <Suspense fallback={<LoadingSpinner/>}><AdminDashboard /></Suspense>,
    loader: AdminDashboardLoader,
  },
  {
    path: '/admin/dashboard/products',
    element: <Suspense fallback={<LoadingSpinner/>}><AdminProductListing /></Suspense>,
    loader: AdminProductListingLoader,
  },
  {
    path: '/admin/dashboard/users',
    element: <Suspense fallback={<LoadingSpinner/>}><UsersData /></Suspense>,
    loader: loadUsersData,
    action: actionUsersData,
  },
  {
    path: '/admin/dashboard/orders',
    element: <Suspense fallback={<LoadingSpinner/>}><Orders /></Suspense>,
    loader: loadOrders,
  },
  {
    path: '/admin/products/search/',
    element: <Suspense fallback={<LoadingSpinner/>}><AdminProductListingCategory /></Suspense>,
    loader: AdminproductListingCategoryLoader,
  },
  {
    path: '/admin/products/category/:category',
    element: <Suspense fallback={<LoadingSpinner/>}><AdminProductListingCategory /></Suspense>,
    loader: AdminproductListingCategoryLoader,
  },
  {
    path: '/admin/dashboard/add-product',
    element: <Suspense fallback={<LoadingSpinner/>}><AddProduct /></Suspense>,
    action: actionAddProduct,
  },
  {
    path: '/admin/dashboard/edit/:id',
    element: <Suspense fallback={<LoadingSpinner/>}><AdminProductDetails /></Suspense>,
    loader: ({ params }) => loadAdminProductDetails(params.id),
    action: actionEditProduct,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
        position="top-right"
      />
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);