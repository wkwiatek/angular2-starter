export class Product {
    public name:string;
    public description:string;
    public imageUrl:string;
    public price:number = 99;
    public tags:string[] = [];

    constructor(name:string, description:string, imageUrl:string, price:number, tags:string[]) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.tags = tags;
    }

    addTag(newTag) {
        this.tags.push(newTag);
    }
}