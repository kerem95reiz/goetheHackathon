import {Language} from './Language';
import { Land } from './Land';


// This class includes some languages in its initialization and 
// you can also add a new language 
export class MockLanguages{

    private languages: {name: string, land: Land[]}[];

    constructor(){
        this.languages.push({name: "Turkish", land: [new Land("Turkey")]})
    }
    // new Language("English", new Land("USA")),
    // new Language("German", new Land("Germany"))
    // new Language("Arabic" ,new Land("Syria")),

    public setLanguage(lan: Language): void{
        this.languages.push({name: lan.name, land: lan.land});
    }

    public getLanguage(lan_name: string): Language{
        return this.languages.find(language => language.name == lan_name);
    }



}