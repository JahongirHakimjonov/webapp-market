export type Variant = {
    colorName: string
    colorHex?: string
    sizes: string[]
}

export type SubCategory = {
    id: number
    slug: string
    name: string
    image: string
}

export type Category = {
    id: number
    slug: string
    name: string
    image?: string
    subcategories?: SubCategory[]
}

export type Product = {
    id: number
    title: string
    price: number
    image?: string
    category: Category
    subcategory: string
    description?: string
    keywords?: string[]
    featured?: boolean
    variants?: Variant[]
}

export type Catalog = {
    categories: Category[]
    products: Product[]
}