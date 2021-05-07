
export class Item{
    id:number;
    title:string;
    price: number;
    description :string;
    category:string;
    count:number=0;//not in api
    image:string
    
    constructor(name:string, price: number,count:number=0){
        this.title = name;
        this.price = price;
        this.count = count;
    }
}