import React from "react"
import { catalog } from "@/data/catalog"
import { ProductCard } from "@/components/ProductCard"

export default function SearchPage() {
  const [q, setQ] = React.useState("")
  const results = React.useMemo(() => {
    if (!q.trim()) return []
    const t = q.toLowerCase()
    return catalog.products.filter(p => p.title.toLowerCase().includes(t) || (p.keywords || []).join(" ").toLowerCase().includes(t))
  }, [q])

  return (
    <div>
      <div className="h1">Qidirish</div>
      <div className="hint">So‘rovingizni kiriting</div>
      <div className="row" style={{ marginTop: 12 }}>
        <input className="input" placeholder="So‘rovingiz" value={q} onChange={e => setQ(e.target.value)} />
        <button className="btn" onClick={() => (globalThis as any)?.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.("medium")}>🔎</button>
      </div>
      <div style={{ height: 8 }} />
      <div className="grid">
        {results.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}