import React from "react"
import { Link } from "react-router-dom"
import { catalog } from "@/data/catalog"

export default function CategoriesPage() {
  return (
    <div>
      <div className="h1">Kategoriyalar</div>
      <div className="grid">
        {catalog.categories.map(cat => (
          <Link key={cat.slug} to={`/categories/${cat.slug}`} className="card">
            <div className="p">
              <div className="aspect-square" style={{ display: "grid", placeItems: "center" }}>
                <span style={{ fontWeight: 800 }}>{cat.name}</span>
              </div>
              <div className="subtitle" style={{ marginTop: 8 }}>{cat.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}