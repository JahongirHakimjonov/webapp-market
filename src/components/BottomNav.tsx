import { NavLink, useLocation, useNavigate } from "react-router-dom"
import React from "react"

export default function BottomNav({ cartCount }: { cartCount: number }) {
  const loc = useLocation()
  const navigate = useNavigate()
  const tabs = [
    { to: "/", label: "Bosh sahifa" },
    { to: "/search", label: "Qidirish" },
    { to: "/categories", label: "Kategoriyalar" },
    { to: "/cart", label: "Korzinka" },
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
            <span>{t.label === "Korzinka" ? (cartCount > 0 ? `🛍️ ${cartCount}` : "🛍️") : t.label === "Qidirish" ? "🔎" : t.label === "Kategoriyalar" ? "🔳" : "🏠"}</span>
          </button>
        )
      })}
    </nav>
  )
}