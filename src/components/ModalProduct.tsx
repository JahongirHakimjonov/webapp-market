import React from 'react'
import type {Product} from '../models/product'

type CartItem = { productId: number; color: { name: string; hex: string }; size?: string | null; qty: number }

export default function ModalProduct({p, state, setState, addToCart}: {
    p: Product;
    state: any;
    setState: (s: any) => void;
    addToCart: (it: CartItem) => void
}) {
    if (!p) return null
    const selColor = p.colors[state.selectedColorIndex]
    const sizes = selColor?.sizes ?? []
    const canAdd = sizes.length === 0 || Boolean(state.selectedSize)

    return (
        <div className="modal-backdrop" onClick={(e) => {
            if (e.target === e.currentTarget) setState(null)
        }}>
            <div className="modal-panel">
                <div className="modal-hero">
                    <div className="modal-left"><img src={p.images[0]} alt={p.title}
                                                     onClick={() => setState((s: any) => ({
                                                         ...s,
                                                         lightbox: p.images[0]
                                                     }))} style={{cursor: 'zoom-in'}}/></div>
                    <div className="modal-right">
                        <h3>{p.title} • {new Intl.NumberFormat('ru-RU').format(p.price)} UZS</h3>
                        <div style={{color: 'var(--hint)', marginTop: 8}}>{p.description}</div>

                        <div className="label">Rangni tanlang</div>
                        <div className="colors">
                            {p.colors.map((c, i) => (
                                <div key={c.name}
                                     className={`color-swatch ${i === state.selectedColorIndex ? 'active' : ''}`}
                                     style={{background: c.hex}} title={c.name} onClick={() => setState((s: any) => ({
                                    ...s,
                                    selectedColorIndex: i,
                                    selectedSize: null
                                }))}/>
                            ))}
                        </div>

                        <div className="label">O'lchamni tanlang</div>
                        <div className="sizes">
                            {sizes.length === 0 ? <div style={{color: 'var(--hint)'}}>Bu mahsulot uchun o'lcham talab
                                qilinmaydi</div> : sizes.map(sz => (
                                <div key={sz} className={`size ${state.selectedSize === sz ? 'active' : ''}`}
                                     onClick={() => setState((s: any) => ({...s, selectedSize: sz}))}>{sz}</div>
                            ))}
                        </div>

                        <div className="controls">
                            <div className="qty">
                                <button onClick={() => setState((s: any) => ({...s, qty: Math.max(1, s.qty - 1)}))}>−
                                </button>
                                <div style={{minWidth: 28, textAlign: 'center'}}>{state.qty}</div>
                                <button onClick={() => setState((s: any) => ({...s, qty: s.qty + 1}))}>+</button>
                            </div>
                            <button className="addbtn"
                                    style={{width: 'auto', padding: '10px 12px', minWidth: 120, marginLeft: 'auto'}}
                                    onClick={() => {
                                        if (window.Telegram?.WebApp) {
                                            window.Telegram.WebApp.sendData(JSON.stringify({
                                                id: p.id,
                                                title: p.title,
                                                price: p.price
                                            }))
                                        } else {
                                            navigator.clipboard?.writeText(window.location.href);
                                            alert('Havola nusxalandi')
                                        }
                                    }}>Ulashing
                            </button>
                        </div>

                        <button className="addbtn" disabled={!canAdd} style={{opacity: canAdd ? 1 : 0.6}}
                                onClick={() => {
                                    const colorObj = p.colors[state.selectedColorIndex]
                                    addToCart({
                                        productId: p.id,
                                        color: colorObj,
                                        size: state.selectedSize || null,
                                        qty: state.qty
                                    })
                                    setState(null)
                                }}>{`Qo'shish ${state.qty > 1 ? `×${state.qty}` : ''}`}</button>

                    </div>
                </div>
                <div style={{position: 'absolute', right: 18, top: 18}}>
                    <button style={{borderRadius: '50%', padding: '8px 10px'}} onClick={() => setState(null)}>✖</button>
                </div>
            </div>
        </div>
    )
}