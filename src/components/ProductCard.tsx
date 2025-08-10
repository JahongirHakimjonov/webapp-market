import React from "react"
import { Link } from "react-router-dom"
import type { Product } from "@/types"
import { formatUZS } from "@/lib/format"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <div className="p">
        <div className="aspect-square">
          <img src={product.image || "/placeholder.svg"} alt={product.title} />
        </div>
        <div className="price">{formatUZS(product.price)}</div>
        <div className="subtitle">{product.title}</div>
      </div>
    </Link>
  )
}