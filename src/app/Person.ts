export class Person{
    name: string;
    languagesToLearn: Language[];
    languagesToTeach: Language[];
    hobbies: string[];

    //languages are either a one Language or an array of it.
    constructor (name: string, languagesToLearn, languagesToTeach, hobbies){
        this.name = name;
        this.languagesToLearn = languagesToLearn;
        this.languagesToTeach = languagesToTeach;
        this.hobbies = hobbies;
    }
}