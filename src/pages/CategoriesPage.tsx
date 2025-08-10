import React from "react"
import {Link} from "react-router-dom"
import {catalog} from "@/data/catalog"

export default function CategoriesPage() {
    return (
        <div>
            <div className="h1">Kategoriyalar</div>
            <div className="grid">
                {catalog.categories.map(cat => (
                    <Link key={cat.slug} to={`/categories/${cat.slug}`} className="card">
                        <div className="p">
                            <div className="aspect-square">
                                <img src={cat.image || "/placeholder.svg"} alt={cat.name}/>
                            </div>
                            <div className="price" style={
                                {fontSize: 12, marginTop: "0.5rem"}
                            }>{cat.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}