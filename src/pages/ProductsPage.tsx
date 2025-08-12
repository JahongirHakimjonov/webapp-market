import React from "react"
import {useParams} from "react-router-dom"
import {catalog} from "@/data/catalog"
import {ProductCard} from "@/components/ProductCard"
import {useBackButton} from "@/hooks/useTGButtons"
import emptyGif from "@/assets/unknown.gif";

export default function ProductsPage() {
    const {subCategoryId} = useParams<{ subCategoryId: string }>()
    useBackButton(true, () => history.back())

    // Находим подкатегорию и её родительскую категорию
    let cat, subcat
    for (const c of catalog.categories) {
        subcat = c.subcategories?.find(sc => String(sc.id) === subCategoryId)
        if (subcat) {
            cat = c
            break
        }
    }

    if (!subcat) {
        return (
            <div style={{textAlign: "center", marginTop: 32}}>
                <img src={emptyGif} alt="Korzinka bo‘sh" style={{maxWidth: 200}}/>
                <div style={{marginTop: 12, color: "#888"}}>Mavjud emas.</div>
            </div>
        )
    }
    console.log("================================")
    console.log(subcat)
    console.log("=======================================")

    const list = catalog.products.filter(
        p => String(p.subcategory) === String(subcat?.slug)
    )

    return (
        <div>
            <div className="h1">{subcat.name}</div>
            <div className="grid">
                {list.map(p => <ProductCard key={p.id} product={p}/>)}
            </div>
        </div>
    )
}