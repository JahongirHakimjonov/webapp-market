import React from "react"
import {useParams} from "react-router-dom"
import {catalog} from "@/data/catalog"
import {ProductCard} from "@/components/ProductCard"
import {useBackButton} from "@/hooks/useTGButtons"
import emptyGif from "@/assets/unknown.gif"

export default function ProductsPage() {
    const {subCategoryId} = useParams<{ subCategoryId?: string }>()
    useBackButton(true, () => window.history.back())

    // find subcategory and its parent category
    let foundCategory = undefined
    let foundSubcategory = undefined

    for (const c of catalog.categories) {
        const sc = c.subcategories?.find(s => String(s.id) === String(subCategoryId))
        if (sc) {
            foundCategory = c
            foundSubcategory = sc
            break
        }
    }

    if (!foundSubcategory) {
        return (
            <div style={{textAlign: "center", marginTop: 32}}>
                <img src={emptyGif} alt="Korzinka bo‘sh" style={{maxWidth: 200}}/>
                <div style={{marginTop: 12, color: "#888"}}>Mavjud emas.</div>
            </div>
        )
    }

    // filter products by subcategory id (robust string comparison)
    const list = catalog.products.filter(
        p => String(p.subcategory) === String(foundSubcategory.slug)
    )

    return (
        <div>
            <div className="h1">{foundSubcategory.name}</div>

            <div className="grid">
                {list.map(p => (
                    <ProductCard key={p.id} product={p}/>
                ))}
            </div>
        </div>
    )
}
