// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
// }
// const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00")
// const Tommy = new Pet("Tommy", 5, "german shepperd", "zero", "white", "13:00")
// console.log(Bella.feedPet("15:00"));
// // console.log(Bella)
// // console.log(Tommy.feedPet("15:00"))

class Pet {
    constructor(name, age,type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }    
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to ${this.lastFed} for ${this.name}`;
    }
}
class petMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds (time) {
        this.lastMeds = time;
        return `Last meds updated to ${this.lastMeds} for ${this.name}`;
    }
}
const Bella = new Pet ("Bella", 2, "Dog", "GS", "B&T", "08:00");
const Barney = new petMeds("Barney", 4, "Cat", "B&G", "10:00", "13:00");
const Betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00");
// console.log(Bella)
console.log(feedPet)

