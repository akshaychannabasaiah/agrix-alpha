export interface Action {
    actionType: string,
    cropType: string;
    pest: string,
    pesticide: string,
    date: Date,
    comments: string,
    amount: number,
    price: number,
    rating: number
}