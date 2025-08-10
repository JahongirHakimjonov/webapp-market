export type Product = {
        id: number;
        title: string;
        description: string;
        price: number;
        images: string[];
        colors: {
            name: string;
            hex: string;
            sizes?: string[];
        }[];
    };