import React from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomeLatest from "./pages/HomeLatest";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetail from "./pages/CategoryDetail";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import {useTelegramTheme} from "./hooks/useTelegramTheme";
import {useBackButton} from "./hooks/useTGButtons";
import {useCart} from "./state/CartContext";


export default function App() {
    // Hooks must be called every render (don’t call them conditionally)
    useTelegramTheme();
    const {items} = useCart();
    const loc = useLocation();
    const navigate = useNavigate();

    // Show BackButton when we're not on the home route.
    // If you want to limit which routes show back button, replace with an allow-list:
    // const showBack = ["/search", "/cart"].includes(loc.pathname) || loc.pathname.startsWith("/categories") || loc.pathname.startsWith("/product/");
    const showBack = loc.pathname !== "/";

    useBackButton(showBack, () => navigate("/"));

    const cartCount = items.reduce((a, i) => a + (i.qty || 0), 0);


    // Normal Telegram-only rendering
    return (
        <>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomeLatest/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/categories" element={<CategoriesPage/>}/>
                    <Route path="/categories/:slug" element={<CategoryDetail/>}/>
                    <Route path="/product/:id" element={<ProductDetail/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="*" element={<HomeLatest/>}/>
                </Routes>
            </div>
            <BottomNav cartCount={cartCount}/>
        </>
    );
}
