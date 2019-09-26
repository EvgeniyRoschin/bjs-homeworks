// Задание 1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.startedDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        if (this.durability >= damage) {
            this.durability -= damage;
        } else {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability == 0) {
            return 0;
        } 
        else if (this.durability >= this.startedDurability * 0,3) {
            return this.attack;
        } 
        else {
            return (this.attack / 2);
        }
    }

    isBroken() {
        if (this.durability == 0) {
            return true;
        } else {
            return false;
        }
    }
}

const arm = new Weapon('рука', 1, Infinity, 1);
const bow = new Weapon('лук', 10, 200, 3);
const sword = new Weapon('меч', 25, 500, 1);
const knife = new Weapon('нож', 5, 300, 1);
const stick = new Weapon('посох', 8, 300, 2);

const longBow = new Weapon('длинный лук', 15, 200, 4);
const axe = new Weapon('секира', 27, 800, 1);
const blizzardStick = new Weapon('посох бури', 10, 300, 3);

// Задание 2

class Arm extends Weapon {
    constructor() {
        super();
        this.name = 'рука';
        this.attack = 1;
        this.durability = Infinity;
        this.startedDurability = Infinity;
        this.range = 1;
    }
}

// const leftArm = new Arm();

class Bow extends Weapon {
    constructor() {
        super();
        this.name = 'лук';
        this.attack = 10;
        this.durability = 200;
        this.startedDurability = 200;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor() {
        super();
        this.name = 'меч';
        this.attack = 25;
        this.durability = 500;
        this.startedDurability = 500;
        this.range = 1;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = 'нож';
        this.attack = 5;
        this.durability = 300;
        this.startedDurability = 300;
        this.range = 1;
    }
}

class Stick extends Weapon {
    constructor() {
        super();
        this.name = 'посох';
        this.attack = 8;
        this.durability = 300;
        this.startedDurability = 300;
        this.range = 2;
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

// const superBow = new LongBow();

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'секира';
        this.attack = 27;
        this.durability = 800;
        this.startedDurability = 800;
    }
}

class BlizzardStick extends Stick {
    constructor() {
        super();
        this.name = 'посох бури';
        this.attack = 10;
        this.range = 3;
    }
}

// Задание 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.totalGradeArray = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if(this[subject]) {
        } else {
            this[subject] = [];
        }
        
        if(grade > 0 && grade < 6) {                
            this.totalGradeArray.push(grade);
            this[subject].push(grade);
            return this[subject].length;
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
        }
    }

    getAverageBySubject(subject) {
        if(this[subject]) {
            let averageBySubject = 0;
            for (let i = 0; i < this[subject].length; i++) {
                averageBySubject = averageBySubject + this[subject][i];
            }
            return (averageBySubject / this[subject].length);
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        let totalSum = 0;

        if (this.totalGradeArray.length === 0) {
            return 0;
        } else {
            for (let i = 0; i < this.totalGradeArray.length; i++) {
                totalSum = totalSum + this.totalGradeArray[i];
            }

            return (totalSum / this.totalGradeArray.length);
        }
    }
}

const IvPet = new StudentLog('ivan petrovich');
