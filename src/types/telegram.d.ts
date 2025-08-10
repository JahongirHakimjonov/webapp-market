export {};

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData?: string;
                initDataUnsafe?: any;
                close: () => void;
                ready: () => void;
                expand: () => void;
                colorScheme?: string;
                sendData: (data: string) => void;
                offEvent: (eventName: string, callback: () => void) => void;
                onEvent: (eventName: string, callback: () => void) => void;
                themeParams: {
                    bg_color: string;
                    text_color: string;
                    hint_color: string;
                    link_color: string;
                    button_color: string;
                    button_text_color: string;
                    secondary_bg_color: string;
                    section_bg_color: string;
                    error_color: string;
                    accent_color: string;
                };
                MainButton: {
                    text: string;
                    color?: string;
                    textColor?: string;
                    isVisible: boolean;
                    isActive: boolean;
                    show: () => void;
                    hide: () => void;
                    enable: () => void;
                    disable: () => void;
                    onClick: (callback: () => void) => void;
                    setText: (text: string) => void;
                };
            };
        };
    }
}
