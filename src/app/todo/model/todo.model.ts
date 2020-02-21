export class Todo{
    public id:number;
    public text:string;
    public complete:boolean;

    constructor(text:string){
        this.text = text;
        this.complete = false;
        this.id = Math.random();
    }
}