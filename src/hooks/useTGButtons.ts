import {useEffect} from "react"


export function useBackButton(visible: boolean, onClick?: () => void) {
    useEffect(() => {
        const tg = (globalThis as any)?.Telegram?.WebApp
        const backButton = tg?.BackButton

        // Check if BackButton is supported (>= 6.1)
        const isSupported = (() => {
            if (!tg?.version) return false
            const [major, minor] = tg.version.split('.').map(Number)
            return major > 6 || (major === 6 && minor >= 1)
        })()

        if (!isSupported || !backButton) return

        const handler = () => {
            if (typeof onClick === "function") onClick()
        }

        if (visible) {
            try {
                backButton.show?.()
                // Use only the native BackButton click handler
                backButton.onClick?.(handler)
            } catch (err) {
                console.error("BackButton API error:", err)
            }
        } else {
            backButton.hide?.()
        }

        return () => {
            try {
                backButton.offClick?.(handler)
                backButton.hide?.()
            } catch (err) {
                console.error("BackButton cleanup error:", err)
            }
        }
    }, [visible, onClick])
}


export function useMainButton(opts: { visible: boolean; text: string; onClick: () => void; isLoading?: boolean }) {
    const {visible, text, onClick, isLoading} = opts
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
        } catch {
        }

        return () => {
            try {
                tg.MainButton.offClick?.(handler)
                tg.offEvent?.("mainButtonClicked", handler)
                if (!visible) tg.MainButton.hide?.()
            } catch {
            }
        }
    }, [visible, text, onClick, isLoading])
}