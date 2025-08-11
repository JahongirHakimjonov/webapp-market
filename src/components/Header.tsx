import React from "react"

export default function Header() {
    const handleClose = () => {
        const tg = (globalThis as any)?.Telegram?.WebApp
        tg?.close?.()
    }

    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <h1 className="text-lg font-bold text-gray-800 select-none">
                MILLIYTECH.UZ
            </h1>
            <button
                onClick={handleClose}
                aria-label="Yopish"
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </header>
    )
}
