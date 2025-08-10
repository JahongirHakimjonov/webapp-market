export const DATA = {
    categories: [
        {id: 'men', name: 'Erkaklar', img: 'https://i.postimg.cc/T3HZ6NLt/photo-2025-08-06-19-23-14.jpg'},
        {id: 'women', name: 'Ayollar', img: 'https://i.postimg.cc/T3HZ6NLt/photo-2025-08-06-19-23-14.jpg'}
    ],
    products: [
        {
            id: 1,
            title: "Hayot T-Shirt",
            price: 250000,
            category: 'men',
            type: 'tshirt',
            images: ['https://i.postimg.cc/T1qzvRgb/photo-2025-08-09-23-16-33.jpg'],
            description: "Hayot — bu o'z qadrini bilish :) Futbolka 100% paxta",
            colors: [
                {name: 'Lavender', hex: '#c09dd9', sizes: ['S', 'M', 'L']},
                {name: 'Lilac', hex: '#9b6fa8', sizes: ['M', 'L']}
            ]
        },
        {
            id: 2,
            title: "Katakli ko'ylak",
            price: 200000,
            category: 'men',
            type: 'shirt',
            images: ['https://i.postimg.cc/T1qzvRgb/photo-2025-08-09-23-16-33.jpg'],
            description: "Qulay katakli ko'ylak. 60% paxta.",
            colors: [
                {name: 'Brown', hex: '#c58c6b', sizes: ['M', 'L', 'XL']},
                {name: 'Grey', hex: '#d1d3d6', sizes: ['S', 'M']}
            ]
        },
        {
            id: 3,
            title: 'Kepka',
            price: 150000,
            category: 'men',
            type: 'cap',
            images: ['https://i.postimg.cc/T1qzvRgb/photo-2025-08-09-23-16-33.jpg'],
            description: 'Stylish kepka. Oson kiyiladi.',
            colors: [
                {name: 'Maroon', hex: '#7a2436', sizes: []},
                {name: 'Beige', hex: '#cbbfae', sizes: []}
            ]
        },
        {
            id: 4,
            title: 'Basic Tee',
            price: 230000,
            category: 'women',
            type: 'tshirt',
            images: ['https://i.postimg.cc/T1qzvRgb/photo-2025-08-09-23-16-33.jpg'],
            description: 'Oddiy va qulay. 100% paxta',
            colors: [
                {name: 'White', hex: '#ffffff', sizes: ['S', 'M', 'L']},
                {name: 'Pink', hex: '#f6c6d0', sizes: ['S', 'M']}
            ]
        }
    ]
};