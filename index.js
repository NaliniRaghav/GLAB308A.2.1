
// Part 1: Humble Beginnings

console.log("Part 1");

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
};

 
 
for (let item of adventurer.inventory) {
    console.log(`Robin has a ${item}`);
}


adventurer.roll();

 //Part 2
console.log("Part 2");
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

 
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log("Part 2: Re-created Robin with the Character class");
console.log(robin);


// Part 3: Class Features
console.log("Part 3")
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        this.roll();
    }

    duel(opponent) {
        while (this.health > 50 && opponent.health > 50) {
            const myRoll = this.roll();
            const opponentRoll = opponent.roll();
            if (myRoll > opponentRoll) {
                opponent.health -= 1;
            } else {
                this.health -= 1;
            }
            console.log(`${this.name}: ${this.health} HP, ${opponent.name}: ${opponent.health} HP`);
        }
        const winner = this.health > 50 ? this : opponent;
        console.log(`${winner.name} wins the duel!`);
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

// Update Robin and companions using the new classes
const adventurerRobin = new Adventurer("Robin", "Fighter");
adventurerRobin.companion = new Companion("Leo", "Cat");
adventurerRobin.companion.companion = new Companion("Frank", "Flea");
adventurerRobin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log("Updated Robin and companions using the Adventurer and Companion classes");
console.log(adventurerRobin);


// Part 4: Class Uniforms
console.log("Part 4")
Adventurer.ROLES = ["Fighter", "Healer", "Wizard"];
Character.MAX_HEALTH = 100;

// Validate role
console.log( "Validating role for adventurerRobin");
if (!Adventurer.ROLES.includes(adventurerRobin.role)) {
    throw new Error(`${adventurerRobin.role} is not a valid role.`);
}


// Part 5: Gather your Party
console.log("Part 5")
class AdventureFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healerFactory = new AdventureFactory("Healer");
const healerRobin = healerFactory.generate("Robin");

console.log("Robin as a healer");
console.log(healerFactory.adventurers);


// Part 6: Developing Skills
console.log("Part 6");
const fighter1 = new Adventurer("Fighter1", "Fighter");
const fighter2 = new Adventurer("Fighter2", "Fighter");

console.log("Duel method");
fighter1.duel(fighter2);

console.log(fighter1);
console.log(fighter2);
