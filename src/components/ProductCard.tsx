import React from 'react'
import type {Product} from '../models/product'

type Props = { p: Product; onOpen: (id: number) => void }

export default function ProductCard({p, onOpen}: Props) {
    return (
        <div className="product-card" tabIndex={0} onClick={() => onOpen(p.id)}
             onKeyDown={(e) => e.key === 'Enter' && onOpen(p.id)}>
            <div className="product-top">
                <img src={p.images[0]} alt={p.title} loading="eager"/>
            </div>
            <div className="product-info">
                <div className="product-price">{new Intl.NumberFormat('ru-RU').format(p.price)} UZS</div>
                <div className="product-title">{p.title}</div>
            </div>
        </div>
    )
}