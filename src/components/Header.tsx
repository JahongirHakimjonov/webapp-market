import React from "react"

export default function Header() {
    return (
        <header className="header">
            <div className="title">MILLIYTECH.UZ</div>
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