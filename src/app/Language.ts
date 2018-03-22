import { Land } from "./Land";

export class Language{

    name: string;
    land: Land[];

    constructor(name: string, land: Land){
        this.name = name;
        this.land.push(land);
    }

}