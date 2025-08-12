import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type CartItem = {
  id: number
  title: string
  price: number
  image: string
  color: string
  size: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (index: number) => void
  clear: () => void
}

const Ctx = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("cart_items")
    if (saved) {
      try { setItems(JSON.parse(saved)) } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => ({
    items,
    add: (item) => {
      setItems(prev => {
        const idx = prev.findIndex(p => p.id === item.id && p.color === item.color && p.size === item.size)
        if (idx >= 0) {
          const copy = [...prev]; copy[idx] = { ...copy[idx], qty: copy[idx].qty + item.qty }; return copy
        }
        return [...prev, item]
      })
    },
    remove: (index) => setItems(prev => prev.filter((_, i) => i !== index)),
    clear: () => setItems([])
  }), [items])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("CartProvider missing")
  return ctx
}