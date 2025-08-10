import { useEffect } from "react"

export function useTelegramTheme() {
  useEffect(() => {
    const tg = (globalThis as any)?.Telegram?.WebApp
    if (!tg) return
    try {
      tg.ready?.()
      if (tg.colorScheme) {
        document.documentElement.style.setProperty("color-scheme", tg.colorScheme === "dark" ? "dark" : "light")
      }
    } catch {}
  }, [])
}