export type Variant = {
  colorName: string
  colorHex?: string
  sizes: string[]
}

export type Product = {
  id: string
  title: string
  price: number
  image?: string
  category: string
  subcategory: string
  description?: string
  keywords?: string[]
  featured?: boolean
  variants?: Variant[]
}

export type Category = {
  slug: string
  name: string
  image?: string
  subcategories?: { slug: string; name: string }[]
}

export type Catalog = {
  categories: Category[]
  products: Product[]
}