import React from "react"

export default function Header() {
  return (
    <header className="header">
      <div className="title">MILLIYTECH.UZ</div>
      <div className="actions">
        <button
          className="icon-btn"
          title="Yopish"
          onClick={() => {
            const tg = (globalThis as any)?.Telegram?.WebApp
            tg?.close?.()
          }}
        >
          ×
        </button>
      </div>
    </header>
  )
}