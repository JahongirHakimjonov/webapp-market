import React from "react"

export default function Header() {
    return (
        <header className="header">
            <div className="title-with-cart">
                <span className="title">MILLIYTECH.UZ</span>
                <span className="cart-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <circle cx="9" cy="21" r="1" fill="currentColor"/>
                        <circle cx="20" cy="21" r="1" fill="currentColor"/>
                        <path
                            d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
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