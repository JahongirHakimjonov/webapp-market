import type {Catalog} from "@/types"

export const catalog: Catalog = {
    categories: [
        {
            slug: "tshirt",
            name: "Futbolkalar",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
            subcategories: [{slug: "basic", name: "Oddiy"}, {slug: "print", name: "Printli"}]
        },
        {
            slug: "hoodie",
            name: "Xudi",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
            subcategories: [{slug: "light", name: "Yengil"}, {slug: "heavy", name: "Qalin"}]
        },
        {
            slug: "cap",
            name: "Kepkalar",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-category-Ddf8RDG8gcwdSsRMUZ7K3VTUT5B4SB.png",
            subcategories: [{slug: "snapback", name: "Snapback"}]
        }
    ],
    products: [
        {
            id: "p1",
            title: "Yasha T-shirt",
            price: 230000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: "tshirt",
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
            id: "p2",
            title: "Purple Tee",
            price: 250000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: "tshirt",
            subcategory: "print",
            description: "Yumshoq mato va sifatli bo‘yoq.",
            featured: true,
            keywords: ["purple", "tee"],
            variants: [{colorName: "Purple", colorHex: "#a78bfa", sizes: ["L", "XL"]}]
        },
        {
            id: "p3",
            title: "Classic Hoodie",
            price: 350000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: "hoodie",
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
            id: "p4",
            title: "Heavy Hoodie",
            price: 420000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: "hoodie",
            subcategory: "heavy",
            description: "Sovuq kunlar uchun qalin huddi.",
            featured: true,
            keywords: ["hoodie", "heavy"],
            variants: [{colorName: "Black", colorHex: "#111827", sizes: ["L", "XL", "XXL"]}]
        },
        {
            id: "p5",
            title: "City Cap",
            price: 150000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: "cap",
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
            id: "p6",
            title: "Basic T-shirt",
            price: 190000,
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hoodie-front-PD00uXKjTsu6vr8kVTaiDuXOCWkCFl.png",
            category: "tshirt",
            subcategory: "basic",
            description: "Oddiy va sifatli futbolka.",
            featured: false,
            keywords: ["basic", "cotton"],
            variants: [{colorName: "White", colorHex: "#ffffff", sizes: ["M", "L", "XL"]}]
        }
    ]
}