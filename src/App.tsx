import React, {useEffect, useState} from 'react'
import ProductCard from './components/ProductCard'
import BottomTabs from './components/BottomTabs'
import ModalProduct from './components/ModalProduct'
import Lightbox from './components/Lightbox'
import type {Product} from './models/product'
import {DATA} from "./ data";

type CartItem = { productId: number; color: { name: string; hex: string }; size?: string | null; qty: number }

export default function App() {
    const [tab, setTab] = useState<'latest' | 'search' | 'categories' | 'cart'>('latest')
    const [query, setQuery] = useState('')
    const [cart, setCart] = useState<CartItem[]>([])
    const [modal, setModal] = useState<any>(null) // { productId, selectedColorIndex, selectedSize, qty }
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
    const [searchResults, setSearchResults] = useState<Product[]>([])

    useEffect(() => {
        // load cart
        try {
            const raw = localStorage.getItem('tg_webapp_cart');
            if (raw) setCart(JSON.parse(raw))
        } catch (e) {
        }
        // preload images
        DATA.products.flatMap(p => p.images).forEach(u => {
            const im = new Image();
            im.src = u
        })

        // Telegram WebApp init
        if (window.Telegram?.WebApp) {
            try {
                window.Telegram.WebApp.ready()
                window.Telegram.WebApp.MainButton.hide()
                const themeVars = window.Telegram.WebApp.themeParams
                if (themeVars) {
                    const root = document.documentElement
                    root.style.setProperty('--tg-theme-bg-color', themeVars.bg_color)
                    root.style.setProperty('--tg-theme-section-bg-color', themeVars.section_bg_color)
                    root.style.setProperty('--tg-theme-text-color', themeVars.text_color)
                    root.style.setProperty('--tg-theme-hint-color', themeVars.hint_color)
                    root.style.setProperty('--tg-theme-button-color', themeVars.button_color)
                }
            } catch (e) {
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tg_webapp_cart', JSON.stringify(cart));
    }, [cart])

    function formatPrice(v: number) {
        return new Intl.NumberFormat('ru-RU').format(v) + ' UZS'
    }

    function openProduct(id: number) {
        const p = DATA.products.find(x => x.id === id)
        if (!p) return
        setModal({productId: id, selectedColorIndex: 0, selectedSize: null, qty: 1})
    }

    function addToCart(it: CartItem) {
        setCart(prev => {
            const ex = prev.find(i => i.productId === it.productId && i.color.name === it.color.name && i.size === it.size)
            if (ex) return prev.map(p => p === ex ? {...p, qty: p.qty + it.qty} : p)
            return [...prev, it]
        })
        alert("Mahsulot savatga qo'shildi")
        setTab('cart')
    }

    function removeFromCart(idx: number) {
        setCart(prev => prev.filter((_, i) => i !== idx))
    }

    function doSearch(q: string) {
        if (!q) {
            setSearchResults([]);
            return
        }
        const found = DATA.products.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()))
        setSearchResults(found)
    }

    const cartCount = cart.reduce((s, i) => s + i.qty, 0)

    return (
        <div className="wrap tg-theme-aware">
            <header style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <div style={{flex: 1}}>
                    <div className="brand"><h1>MILLIYTECH.UZ</h1><p>@milliytech_bot • kiyimlar</p></div>
                </div>
            </header>

            <main id="mainContent">
                {tab === 'latest' && (
                    <div className="card-grid">
                        {DATA.products.map(p => <ProductCard key={p.id} p={p} onOpen={openProduct}/>)}
                    </div>
                )}

                {tab === 'search' && (
                    <div className="search-wrap">
                        <div className="search-box">
                            <input placeholder="Mahsulot, model yoki tavsif qidirish" value={query}
                                   onChange={e => setQuery(e.target.value)}
                                   onKeyDown={e => e.key === 'Enter' && doSearch(query)}/>
                            <button onClick={() => doSearch(query)}>Qidirish</button>
                        </div>
                        <div style={{marginTop: 14}}>
                            {query === '' ? <div className="empty">So‘rov kiriting</div> : searchResults.length === 0 ?
                                <div className="empty">Hech nima topilmadi</div> : (
                                    <div className="card-grid">{searchResults.map(p => <ProductCard key={p.id} p={p}
                                                                                                    onOpen={openProduct}/>)}</div>
                                )}
                        </div>
                    </div>
                )}

                {tab === 'categories' && (
                    <div className="cat-list">
                        {DATA.categories.map(cat => (
                            <div key={cat.id} className="category"
                                 onClick={() => {
                                     setTab('categories');
                                     console.log('open category', cat.id);
                                 }}>
                                <img src={cat.img} alt={cat.name}/>
                                <div><h3>{cat.name}</h3>
                                    <p>{DATA.products.filter(p => p.category === cat.id).length} mahsulot</p></div>
                            </div>
                        ))}
                    </div>
                )}

                {tab === 'cart' && (
                    <div style={{marginTop: 12}}>
                        {cart.length === 0 && <div className="empty">Savat bo'sh</div>}
                        {cart.map((item, idx) => {
                            const p = DATA.products.find(x => x.id === item.productId)!
                            return (
                                <div key={idx} className="cart-item">
                                    <img src={p.images[0]} alt={p.title}/>
                                    <div style={{flex: 1}}>
                                        <div style={{fontWeight: 800, color: 'var(--text)'}}>{p.title}</div>
                                        <div
                                            style={{color: 'var(--hint)'}}>{item.color ? item.color.name : ''} • {item.size || ''}</div>
                                        <div style={{
                                            marginTop: 8,
                                            fontWeight: 800,
                                            color: 'var(--text)'
                                        }}>{formatPrice(p.price)} x {item.qty}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => removeFromCart(idx)}
                                                style={{background: 'transparent', border: 0}}>X
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                        {cart.length > 0 && (
                            <div style={{marginTop: 12}}>
                                <div style={{fontWeight: 800, fontSize: 18, color: 'var(--text)'}}>
                                    Jami: {formatPrice(cart.reduce((s, i) => s + (DATA.products.find(p => p.id === i.productId)!.price * i.qty), 0))}
                                </div>
                                <button className="addbtn" onClick={() => {
                                    if (window.Telegram && window.Telegram.WebApp) {
                                        const payload = {
                                            cart,
                                            total: cart.reduce((s, i) => s + (DATA.products.find(p => p.id === i.productId)!.price * i.qty), 0)
                                        }
                                        window.Telegram.WebApp.MainButton.setText('Buyurtmani yuborish')
                                        window.Telegram.WebApp.MainButton.show()
                                        const handler = () => {
                                            window.Telegram.WebApp.sendData(JSON.stringify(payload));
                                            alert('Buyurtma yuborildi');
                                            window.Telegram.WebApp.offEvent('mainButtonClicked', handler);
                                            window.Telegram.WebApp.MainButton.hide()
                                        }
                                        window.Telegram.WebApp.onEvent('mainButtonClicked', handler)
                                    } else alert('Buyurtma: ' + JSON.stringify({cart}))
                                }}>Buyurtma berish
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </main>

            <BottomTabs tab={tab} setTab={(t) => setTab(t as any)} cartCount={cartCount}/>

            {modal && (
                <ModalProduct p={DATA.products.find(x => x.id === modal.productId)!} state={modal}
                              setState={(s: any) => setModal(s)} addToCart={(it) => addToCart(it)}/>
            )}

            <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)}/>
        </div>
    )
}