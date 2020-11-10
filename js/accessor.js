"use strict";

const persone = {
    name: "Alex",
    age:25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

persone.useAge = 30;
console.log(persone.useAge);


// Инкапсюляция в классе

class User {
    constructor(name,age) {
        this._name = name;
        this._age = age;
    }

    // Приватное свойство
    #surename = "Приватов";

    get name() {
        return this._name;
    }

    set (name) {
        this._name = name;
    }

    say () {
        console.log(`Новый пользователь - ${this.name} ${this.#surename}. Возраст ${this._age}`);
    }
}

let newUser = new User('Oleg', 23);
newUser.say();