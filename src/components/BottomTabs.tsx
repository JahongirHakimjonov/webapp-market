import React from 'react'

type Props = { tab: string; setTab: (t: string) => void; cartCount: number }

export default function BottomTabs({tab, setTab, cartCount}: Props) {
    return (
        <nav className="bottom" role="navigation" aria-label="Main tabs">
            <div className="tabs">
                <div className={`tab ${tab === 'latest' ? 'active' : ''}`} data-tab="latest"
                     onClick={() => setTab('latest')}>
                    <button aria-label="So'nggi"><i className="bi bi-house" style={{fontSize: 20}}/></button>
                </div>
                <div className={`tab ${tab === 'search' ? 'active' : ''}`} data-tab="search"
                     onClick={() => setTab('search')}>
                    <button aria-label="Qidiruv"><i className="bi bi-search" style={{fontSize: 20}}/></button>
                </div>
                <div className={`tab ${tab === 'categories' ? 'active' : ''}`} data-tab="categories"
                     onClick={() => setTab('categories')}>
                    <button aria-label="Kategoriyalar"><i className="bi bi-grid-3x3-gap" style={{fontSize: 20}}/>
                    </button>
                </div>
                <div className={`tab ${tab === 'cart' ? 'active' : ''}`} data-tab="cart" onClick={() => setTab('cart')}>
                    <button aria-label="Savat"><i className="bi bi-cart" style={{fontSize: 20, position: 'relative'}}>
                    </i></button>
                    <div id="cartCount" style={{position: 'absolute', right: 12, top: -6}}>{cartCount > 0 ?
                        <span className="badge">{cartCount}</span> : null}</div>
                </div>
            </div>
        </nav>
    )
}