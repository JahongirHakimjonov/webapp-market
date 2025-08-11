import React, {useEffect} from "react"
import {useCart} from "@/state/CartContext"
import {formatUZS} from "@/lib/format"
import {useMainButton} from "@/hooks/useTGButtons"
import emptyGif from "@/assets/unknown.gif"

export default function CartPage() {
    const {items, remove, clear} = useCart()
    const total = items.reduce((a, i) => a + i.price * i.qty, 0)

    useMainButton({
        visible: items.length > 0,
        text: "To‘lovga o‘tish",
        onClick: () => {
            const tg = (globalThis as any)?.Telegram?.WebApp
            const payload = JSON.stringify({type: "checkout", items, total})
            if (tg?.sendData) tg.sendData(payload)
            else tg?.close?.()
        }
    })

    useEffect(() => {
        return () => {
            const tg = (globalThis as any)?.Telegram?.WebApp
            tg?.MainButton?.hide?.()
        }
    }, [])

    if (items.length === 0) {
        return (
            <div style={{textAlign: "center", marginTop: 32}}>
                <img src={emptyGif} alt="Korzinka bo‘sh" style={{maxWidth: 200}}/>
                <div style={{marginTop: 12, color: "#888"}}>Korzinka bo‘sh.</div>
            </div>
        )
    }

    return (
        <div>
            <div className="h1">Korzinka</div>
            <div style={{display: "grid", gap: 12}}>
                {items.map((it, idx) => (
                    <div key={idx} className="card">
                        <div className="p" style={{display: "flex", gap: 12, alignItems: "center"}}>
                            <img src={it.image || "/placeholder.svg"} alt={it.title}
                                 style={{width: 64, height: 64, borderRadius: 12, objectFit: "cover"}}/>
                            <div style={{flex: 1}}>
                                <div style={{fontWeight: 700}}>{it.title}</div>
                                <div className="subtitle">Rang: {it.color} • O‘lcham: {it.size} • {it.qty} dona</div>
                                <div style={{fontWeight: 800}}>{formatUZS(it.price * it.qty)}</div>
                            </div>
                            <button className="btn ghost" onClick={() => remove(idx)}>O‘chirish</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{fontSize: 18, fontWeight: 800}}>{formatUZS(total)}</div>
                <div className="row">
                    <button className="btn ghost" onClick={clear}>Tozalash</button>
                </div>
            </div>
        </div>
    )
}