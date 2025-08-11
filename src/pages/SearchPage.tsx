import React from "react";
import {catalog} from "@/data/catalog";
import {ProductCard} from "@/components/ProductCard";
import emptyGif from "@/assets/thinking.gif"; // Добавьте свой путь к GIF

function SearchIcon() {
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
            <line
                x1="16.65"
                y1="16.65"
                x2="21"
                y2="21"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}

export default function SearchPage() {
    const [q, setQ] = React.useState("");

    const results = React.useMemo(() => {
        if (!q.trim()) return [];
        const t = q.toLowerCase();
        return catalog.products.filter(
            (p) =>
                p.title.toLowerCase().includes(t) ||
                (p.keywords?.join(" ") || "").toLowerCase().includes(t)
        );
    }, [q]);

    return (
        <div>
            <div className="h1">Qidirish</div>
            <div className="hint">So‘rovingizni kiriting</div>
            <div className="row" style={{marginTop: 12}}>
                <input
                    className="input"
                    placeholder="So‘rovingiz"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                <button
                    className="btn"
                    onClick={() =>
                        (globalThis as any)?.Telegram?.WebApp?.HapticFeedback?.impactOccurred?.(
                            "medium"
                        )
                    }
                    aria-label="Qidirish"
                >
                    <SearchIcon/>
                </button>
            </div>

            <div style={{height: 8}}/>
            {(!q.trim() || results.length === 0) ? (
                <div style={{textAlign: "center", marginTop: 32}}>
                    <img src={emptyGif} alt="Hech narsa topilmadi" style={{maxWidth: 200}}/>
                    <div style={{marginTop: 12, color: "#888"}}>Hech narsa topilmadi</div>
                </div>
            ) : (
                <div className="grid">
                    {results.map((p) => (
                        <ProductCard key={p.id} product={p}/>
                    ))}
                </div>
            )}
        </div>
    );
}