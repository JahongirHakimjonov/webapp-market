import React from "react"

export default function SkeletonGrid() {
  return (
    <div className="grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="skeleton" aria-hidden="true" />
      ))}
    </div>
  )
}