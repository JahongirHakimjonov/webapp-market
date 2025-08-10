import {useLocation, useNavigate} from "react-router-dom"
import React from "react"

function HomeIcon() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M3 10L12 3l9 7v11a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10z" stroke="currentColor"
                  strokeWidth="2"/>
        </svg>
    )
}

function SearchIcon() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
            <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
    )
}

function CategoriesIcon() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
        </svg>
    )
}

function CartIcon({count}: { count: number }) {
    return (
        <span style={{position: "relative", display: "inline-block"}}>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1" fill="currentColor"/>
        <circle cx="20" cy="21" r="1" fill="currentColor"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor"
              strokeWidth="2"/>
      </svg>
            {count > 0 && (
                <span style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "12px",
                    padding: "2px 6px",
                    minWidth: "20px",
                    textAlign: "center"
                }}>{count}</span>
            )}
    </span>
    )
}

export default function BottomNav({cartCount}: { cartCount: number }) {
    const loc = useLocation()
    const navigate = useNavigate()
    const tabs = [
        {to: "/", label: "Bosh sahifa", icon: <HomeIcon/>},
        {to: "/search", label: "Qidirish", icon: <SearchIcon/>},
        {to: "/categories", label: "Kategoriyalar", icon: <CategoriesIcon/>},
        {to: "/cart", label: "Korzinka", icon: <CartIcon count={cartCount}/>},
    ]
    return (
        <nav className="bottom-bar" aria-label="Pastki navigatsiya">
            {tabs.map(t => {
                const active = (t.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(t.to))
                return (
                    <button
                        key={t.to}
                        className={`tab ${active ? "active" : ""}`}
                        onClick={() => navigate(t.to)}
                        aria-label={t.label}
                    >
                        {t.icon}
                        <span style={{display: "block", fontSize: "12px"}}></span>
                    </button>
                )
            })}
        </nav>
    )
}