import {Person} from './person';
import { Language } from './Language';
import { Land } from './Land';

export const Writers: Person[]=[
        new Person("Lukas", 
        [
            new Language("Turkish", new Land("Turkey")),
            new Language("Arabic" ,new Land("Syria")),
            new Language("English", new Land("USA"))
        ],
        [
            new Language("German", new Land("Germany"))
        ],
        [
            "Paintball"
        ]
    )
]