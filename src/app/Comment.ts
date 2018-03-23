import { Person } from "./person";

export class Comment{

    writer: Person;
    date: Date;
    content: string;

    constructor(writer: Person, date: Date, content: string){

        this.writer = writer;
        this.date = date;
        this.content = content;
        
    }

}