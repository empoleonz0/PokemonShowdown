class Move {
    constructor(name, power, accuracy, type, pp, target) {
        this.name = name;
        this.power = power;
        this.accuracy = accuracy;
        this.type = type;
        this.pp = pp;
        this.target = target;
    }
}

class GigaDrain extends Move {
    constructor() {
        super('Giga Drain', 75, 100, 'Grass', 10, 'enemy')
    }
}

class SludgeBomb extends Move {
    constructor() {
        super('Sludge Bomb', 90, 100, 'Poison', 10, 'enemy')
    }
}

class FireBlast extends Move {
    constructor() {
        super('Fire blast', 110, 85, 'Fire', 5, 'enemy')
    }
}

class AirSlash extends Move {
    constructor() {
        super('Air Slash', 75, 95, 'Flying', 15, 'enemy')
    }
}