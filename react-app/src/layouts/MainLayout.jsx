import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    return (
        <>
            <Header onOpenCart={() => setIsCartOpen(true)} />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
