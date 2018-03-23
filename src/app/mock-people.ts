import { Person } from "./person";
import { Language } from "./Language";
import { Land } from "./Land";

export const people: Person[]=
    [
        new Person("Julia", [new Language("German", new Land("Germany")),
        new Language("Arabic", new Land("Syria"))
    ], 
    [
        new Language("Turkish", new Land("Turkey")), 
        new Language("English", new Land("USA"))
    ],
    [
        "Fitness"
    ])


]