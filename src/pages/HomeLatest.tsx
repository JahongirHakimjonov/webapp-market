import React from "react"
import { catalog } from "@/data/catalog"
import { ProductCard } from "@/components/ProductCard"

export default function HomeLatest() {
  const latest = [...catalog.products].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).slice(0, 12)
  return (
    <div>
      <div className="h1">🔥 Yangiliklar</div>
      <div className="grid">
        {latest.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}