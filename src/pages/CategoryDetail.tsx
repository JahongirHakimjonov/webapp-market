import React from "react"
import { useParams } from "react-router-dom"
import { catalog } from "@/data/catalog"
import { ProductCard } from "@/components/ProductCard"
import { useBackButton } from "@/hooks/useTGButtons"

export default function CategoryDetail() {
  const { slug } = useParams()
  useBackButton(true, () => history.back())
  const cat = catalog.categories.find(c => c.slug === slug)
  const subcats = cat?.subcategories || []
  return (
    <div>
      <div className="h1">{cat?.name || "Kategoriya"}</div>
      <div style={{ display: "grid", gap: 24 }}>
        {subcats.map(sc => {
          const list = catalog.products.filter(p => p.category === cat?.slug && p.subcategory === sc.slug)
          return (
            <section key={sc.slug}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>{sc.name}</div>
              <div className="grid">
                {list.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}