import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ShopSingle from './pages/ShopSingle';
import Cart from './pages/Cart';
import Account from './pages/Account';
import TermsOfService from './pages/TermsOfService';
import ShippingPolicy from './pages/ShippingPolicy';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import OrderHistory from './pages/OrderHistory';
import OrderDetail from './pages/OrderDetail';
import Wishlist from './pages/Wishlist';
import ForgotPassword from './pages/ForgotPassword';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import AdminLayout from './layouts/AdminLayout';
import ProductList from './pages/admin/ProductList';
import ProductForm from './pages/admin/ProductForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop-single" element={<ShopSingle />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account" element={<Account />} />
        <Route path="pages/dieu-khoan-dich-vu" element={<TermsOfService />} />
        <Route path="pages/chinh-sach-van-chuyen" element={<ShippingPolicy />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-success" element={<OrderSuccess />} />
        <Route path="account/orders" element={<OrderHistory />} />
        <Route path="account/orders/:id" element={<OrderDetail />} />
        <Route path="account/wishlist" element={<Wishlist />} />
        <Route path="blog" element={<Blog />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<div className="p-4"><h3>Dashboard (Coming Soon)</h3></div>} />
        <Route path="dashboard" element={<div className="p-4"><h3>Dashboard (Coming Soon)</h3></div>} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/edit/:id" element={<ProductForm />} />
        {/* Placeholder for other admin pages */}
        <Route path="*" element={<div className="p-4">Page under construction</div>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
