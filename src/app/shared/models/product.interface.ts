export interface Iproduct {
    productName: string;
    canReturn: number;
    image: string;
    price: number;
    productDetails: string;
    pId : string,
    pStatus : "In-progress" | "Dispatch" | "Delivered"
}