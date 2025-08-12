import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {catalog} from "@/data/catalog"
import {formatUZS} from "@/lib/format"
import {useCart} from "@/state/CartContext"
import {useBackButton, useMainButton} from "@/hooks/useTGButtons"

export default function ProductDetailPage() {
    const {productId} = useParams()
    useBackButton(true, () => history.back())

    const product = catalog.products.find(p => p.id === Number(productId))
    const [color, setColor] = React.useState<string | null>(null)
    const [size, setSize] = React.useState<string | null>(null)
    const variant = React.useMemo(() => product?.variants?.find(v => v.colorName === color) || null, [product, color])
    const sizes = variant?.sizes ?? []
    React.useEffect(() => {
        setSize(null)
    }, [color])

    const {add} = useCart()

    const handleAdd = React.useCallback(() => {
        if (!product || !size) return
        add({
            id: Number(product.id),
            title: product.title,
            price: product.price,
            image: product.image || "/placeholder.svg",
            color: color || "Noma’lum",
            size,
            qty: 1
        })
        const tg = (globalThis as any)?.Telegram?.WebApp
        tg?.HapticFeedback?.notificationOccurred?.("success")
    }, [add, product, size, color])

    useMainButton({
        visible: Boolean(size),
        text: "Qo‘shish",
        onClick: handleAdd
    })

    // Сброс MainButton при уходе со страницы
    useEffect(() => {
        return () => {
            const tg = (globalThis as any)?.Telegram?.WebApp
            tg?.MainButton?.hide?.()
        }
    }, [])

    if (!product) return <div className="hint">Mahsulot topilmadi.</div>

    return (
        <div>
            <div className="detail-img">
                <img src={product.image || "/placeholder.svg"} alt={product.title}
                     style={{width: "100%", height: "auto", display: "block"}}/>
            </div>

            <div style={{marginTop: 12}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h1 className="h1" style={{margin: 0}}>{formatUZS(product.price)}</h1>
                </div>
                <p className="subtitle">{product.description}</p>
            </div>

            <div style={{marginTop: 16}}>
                <div style={{fontWeight: 700, marginBottom: 8}}>Rangni tanlang</div>
                <div className="swatch-row">
                    {(product.variants || []).map(v => (
                        <button
                            key={v.colorName}
                            className={`swatch ${color === v.colorName ? "selected" : ""}`}
                            onClick={() => setColor(v.colorName)}
                        >
                            <span className="dot" style={{background: v.colorHex || "#e5e7eb"}}/>
                            <span style={{fontSize: 14}}>{v.colorName}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div style={{marginTop: 16}}>
                <div style={{fontWeight: 700, marginBottom: 8}}>O‘lchamni tanlang</div>
                <div className="size-row">
                    {sizes.length === 0 && <span className="hint">Avval rangni tanlang</span>}
                    {sizes.map(s => (
                        <button
                            key={s}
                            className={`size-btn ${size === s ? "selected" : ""}`}
                            onClick={() => setSize(s)}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}