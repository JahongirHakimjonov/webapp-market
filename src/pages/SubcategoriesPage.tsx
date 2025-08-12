import React from "react"
import {Link, useParams} from "react-router-dom"
import {catalog} from "@/data/catalog"
import emptyGif from "@/assets/unknown.gif"
import {useBackButton} from "@/hooks/useTGButtons"

export default function SubcategoriesPage() {
    const {categoryId} = useParams<{ categoryId?: string }>()
    // use a safe back handler
    useBackButton(true, () => window.history.back())

    const category = catalog.categories.find(cat => cat.id === Number(categoryId))

    if (!category) {
        return (
            <div style={{textAlign: "center", marginTop: 32}}>
                <img src={emptyGif} alt="Korzinka bo‘sh" style={{maxWidth: 200}}/>
                <div style={{marginTop: 12, color: "#888"}}>Mavjud emas.</div>
            </div>
        )
    }

    return (
        <div>
            <div className="h1">{category.name}</div>

            <div className="grid">
                {category.subcategories?.map(sub => (
                    <Link key={sub.id} to={`/subcategories/${sub.id}`} className="card">
                        <div className="p">
                            <div className="aspect-square">
                                <img src={sub.image || "/placeholder.svg"} alt={sub.name || "subcategory"}/>
                            </div>

                            <div
                                className="price"
                                style={{
                                    fontSize: 16,
                                    marginTop: "0.5rem",
                                    marginBottom: "0.5rem",
                                    fontWeight: "normal",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                {sub.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
