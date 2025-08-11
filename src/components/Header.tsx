import React from "react"

export default function Header() {
    return (
        <header className="header">
            <div className="title-with-cart">
                <span className="title">MILLIYTECH.UZ</span>
                <span className="cart-icon">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animated-cart"
                    aria-hidden="true"
                >
                  <path d="M6 6h15l-1.5 9h-13z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="9" cy="20" r="1" fill="currentColor"/>
                  <circle cx="18" cy="20" r="1" fill="currentColor"/>
                </svg>
              </span>
            </div>
            <div className="actions">
                <button
                    className="exit-icon-btn"
                    title="Yopish"
                    onClick={() => {
                        const tg = (globalThis as any)?.Telegram?.WebApp
                        tg?.close?.()
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                        <line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}