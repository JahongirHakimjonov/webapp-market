import type {Catalog} from "@/types"

export const catalog: Catalog = {
    categories: [
        {
            id: 1,
            slug: "tshirt",
            name: "Futbolkalar",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
            subcategories: [{
                id: 3,
                slug: "basic",
                name: "Oddiy",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
            }, {
                id: 4,
                slug: "print",
                name: "Printli",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
            }]
        },
        {
            id: 2,
            slug: "hoodie",
            name: "Xudi",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
            subcategories: [
                {
                    id: 1,
                    slug: "light",
                    name: "Yengil",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                },
                {
                    id: 2,
                    slug: "heavy",
                    name: "Qalin",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }
            ]
        },
        {
            id: 3,
            slug: "cap",
            name: "Kepkalar",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
            subcategories: [{
                id: 5,
                slug: "snapback",
                name: "Snapback",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
            }]
        }
    ],
    products: [
        {
            id: 1,
            title: "Yasha T-shirt",
            price: 230000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: {
                id: 1,
                slug: "tshirt",
                name: "Futbolkalar",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
                subcategories: [{
                    id: 3, slug: "basic", name: "Oddiy",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }, {
                    id: 4,
                    slug: "print",
                    name: "Printli",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }]
            },
            subcategory: "print",
            description: "Futbolka 100% paxta, kundalik kiyim uchun qulay.",
            featured: true,
            keywords: ["yasha", "tshirt", "white"],
            variants: [
                {colorName: "White", colorHex: "#ffffff", sizes: ["M", "L", "XL", "XXL"]},
                {colorName: "Black", colorHex: "#111827", sizes: ["M", "L"]}
            ]
        },
        {
            id: 2,
            title: "Purple Tee",
            price: 250000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: {
                id: 1,
                slug: "tshirt",
                name: "Futbolkalar",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
                subcategories: [{
                    id: 3, slug: "basic", name: "Oddiy",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }, {
                    id: 4, slug: "print", name: "Printli",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }]
            },
            subcategory: "print",
            description: "Yumshoq mato va sifatli bo‘yoq.",
            featured: true,
            keywords: ["purple", "tee"],
            variants: [{colorName: "Purple", colorHex: "#a78bfa", sizes: ["L", "XL"]}]
        },
        {
            id: 3,
            title: "Classic Hoodie",
            price: 350000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: {
                id: 2,
                slug: "hoodie",
                name: "Xudi",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
                subcategories: [
                    {
                        id: 1,
                        slug: "light",
                        name: "Yengil",
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                    },
                    {
                        id: 2,
                        slug: "heavy",
                        name: "Qalin",
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                    }
                ]
            },
            subcategory: "light",
            description: "Yengil huddi, bahor va kuz uchun.",
            featured: false,
            keywords: ["hoodie", "light"],
            variants: [
                {colorName: "Gray", colorHex: "#e5e7eb", sizes: ["M", "L", "XL"]},
                {colorName: "Navy", colorHex: "#1f2937", sizes: ["M", "XL"]}
            ]
        },
        {
            id: 4,
            title: "Heavy Hoodie",
            price: 420000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: {
                id: 2,
                slug: "hoodie",
                name: "Xudi",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
                subcategories: [
                    {
                        id: 1,
                        slug: "light",
                        name: "Yengil",
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                    },
                    {
                        id: 2,
                        slug: "heavy",
                        name: "Qalin",
                        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                    }
                ]
            },
            subcategory: "heavy",
            description: "Sovuq kunlar uchun qalin huddi.",
            featured: true,
            keywords: ["hoodie", "heavy"],
            variants: [{colorName: "Black", colorHex: "#111827", sizes: ["L", "XL", "XXL"]}]
        },
        {
            id: 5,
            title: "City Cap",
            price: 150000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: {
                id: 3,
                slug: "cap",
                name: "Kepkalar",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
                subcategories: [{
                    id: 5,
                    slug: "snapback",
                    name: "Snapback",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }]
            },
            subcategory: "snapback",
            description: "Shahar uslubidagi qulay kepka.",
            featured: true,
            keywords: ["cap", "snapback"],
            variants: [
                {colorName: "Beige", colorHex: "#f3e8d7", sizes: ["One Size"]},
                {colorName: "Gray", colorHex: "#d1d5db", sizes: ["One Size"]}
            ]
        },
        {
            id: 6,
            title: "Basic T-shirt",
            price: 190000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: {
                id: 1,
                slug: "tshirt",
                name: "Futbolkalar",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
                subcategories: [{
                    id: 3, slug: "basic", name: "Oddiy",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }, {
                    id: 4,
                    slug: "print",
                    name: "Printli",
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png"
                }]
            },
            subcategory: "basic",
            description: "Oddiy va sifatli futbolka.",
            featured: false,
            keywords: ["basic", "cotton"],
            variants: [{colorName: "White", colorHex: "#ffffff", sizes: ["M", "L", "XL"]}]
        }
    ]
}