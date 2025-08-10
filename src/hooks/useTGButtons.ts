import { useEffect } from "react"

export function useBackButton(visible: boolean, onClick: () => void) {
  useEffect(() => {
    const tg = (globalThis as any)?.Telegram?.WebApp
    if (!tg?.BackButton) return

    const handler = () => onClick()

    if (visible) {
      try {
        tg.BackButton.show()
        tg.BackButton.onClick?.(handler)
        tg.onEvent?.("backButtonClicked", handler)
      } catch {}
    } else {
      tg.BackButton.hide?.()
    }

    return () => {
      try {
        tg.BackButton.offClick?.(handler)
        tg.offEvent?.("backButtonClicked", handler)
        if (!visible) tg.BackButton.hide?.()
      } catch {}
    }
  }, [visible, onClick])
}

export function useMainButton(opts: { visible: boolean; text: string; onClick: () => void; isLoading?: boolean }) {
  const { visible, text, onClick, isLoading } = opts
  useEffect(() => {
    const tg = (globalThis as any)?.Telegram?.WebApp
    if (!tg?.MainButton) return

    const handler = () => onClick()

    try {
      tg.MainButton.setText?.(text)
      if (typeof isLoading !== "undefined") {
        if (isLoading) tg.MainButton.showProgress?.()
        else tg.MainButton.hideProgress?.()
      }
      if (visible) {
        tg.MainButton.show()
        tg.MainButton.onClick?.(handler)
        tg.onEvent?.("mainButtonClicked", handler)
      } else {
        tg.MainButton.hide?.()
      }
    } catch {}

    return () => {
      try {
        tg.MainButton.offClick?.(handler)
        tg.offEvent?.("mainButtonClicked", handler)
        if (!visible) tg.MainButton.hide?.()
      } catch {}
    }
  }, [visible, text, onClick, isLoading])
}