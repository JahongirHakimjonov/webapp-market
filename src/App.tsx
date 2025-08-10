import React from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import BottomNav from "./components/BottomNav"
import HomeLatest from "./pages/HomeLatest"
import SearchPage from "./pages/SearchPage"
import CategoriesPage from "./pages/CategoriesPage"
import CategoryDetail from "./pages/CategoryDetail"
import ProductDetail from "./pages/ProductDetail"
import CartPage from "./pages/CartPage"
import { useTelegramTheme } from "./hooks/useTelegramTheme"
import { useBackButton } from "./hooks/useTGButtons"
import { useCart } from "./state/CartContext"

export default function App() {
    useTelegramTheme()
    const { items } = useCart()
    const loc = useLocation()
    const navigate = useNavigate()

    // Show Telegram BackButton when we are NOT on "/" (home tab); use it to navigate to "/"
    const onHome = loc.pathname === "/"
    useBackButton(!onHome && (loc.pathname === "/" || loc.pathname === "/search" || loc.pathname.startsWith("/categories") || loc.pathname === "/cart"), () => navigate("/"))

    return (
        <>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomeLatest />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/categories/:slug" element={<CategoryDetail />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="*" element={<HomeLatest />} />
                </Routes>
            </div>
            <BottomNav cartCount={items.reduce((a, i) => a + i.qty, 0)} />
        </>
    )
}