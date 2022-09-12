export type productItems={
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    added?: boolean;
}
export const initialState:productItems[] = [
    
        {
            id: 1,
            title: 'Apple iPhone 13 mini - blue',
            description: 'Our most advanced dual‑camera system ever.Durability that’s front and center. And edge to edge',
            imageUrl: "1.jpg",
            price: 5000
        },
        {
            id: 2,
            title: 'Apple iPhone 13 mini - Red',
            description: 'Our most advanced dual‑camera system ever.Durability that’s front and center. And edge to edge',
            imageUrl: "3.jpg",
            price: 6000
        },
        {
            id: 3,
            title: 'Apple iPhone 13 mini - black',
            description: 'Our most advanced dual‑camera system ever.Durability that’s front and center. And edge to edge',
            imageUrl: "2.jpg",
            price: 7000
        }
    
]