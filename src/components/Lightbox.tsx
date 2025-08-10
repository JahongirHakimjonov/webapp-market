import React from 'react'

export default function Lightbox({src, onClose}: { src: string | null; onClose: () => void }) {
    if (!src) return null
    return (
        <div className="lightbox" onClick={onClose}>
            <img src={src} alt="full"/>
        </div>
    )
}