import category from "../models/Category";
export interface IRepository<T>{
    getAll():Promise<T[] | null>;
}

export default interface Book {
    id: number;
    title: string;
    price: number;
    stockAmount: number;
    category: Partial<category>
}

export class BookRepository implements IRepository<Book> {
    async getAll(): Promise<Book[] | null> {
        return [
            {   id: 1, title: 'Interstella', price: 340, stockAmount:3 ,category:{id:3, title:'Sci-fi'} },
            {   id: 2, title: 'Titanic', price: 590, stockAmount:2 ,category:{id:1, title:'Romance'} },
            {   id: 3, title: 'Scary movie', price: 150, stockAmount:5 ,category:{id:2, title:'Horror'} }
            
        ]
    }
}
