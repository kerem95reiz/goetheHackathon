import { Language } from "./Language";

export class Person{
    name: string;
    languagesToLearn: Language[];
    languagesToTeach: Language[];
    hobbies: string[];

    //languages are either a one Language or an array of it.
    constructor (name: string, languagesToLearn: Language[], languagesToTeach: Language[], hobbies){
        this.name = name;
        this.languagesToLearn = languagesToLearn;
        this.languagesToTeach = languagesToTeach;
        this.hobbies = hobbies;
    }
}