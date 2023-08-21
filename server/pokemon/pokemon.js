class Pokemon {
    constructor(id, name, types, [hp, atk, def, spa, spd, spe], level, evs, ivs, movepool, moves, abilities, ability) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.basestats = {
            hp: hp,
            atk: atk,
            def: def,
            spa: spa,
            spd: spd,
            spe: spe,
        };
        this.stats = {
            hp: Math.floor((2*this.basestats.hp+ivs[0]+evs[0]/4)*level/100)+level+10,
            atk: Math.floor((((2*this.basestats.atk+ivs[1]+evs[1]/4)*level)/100+5)),
            def: Math.floor((((2*this.basestats.def+ivs[2]+evs[2]/4)*level)/100+5)),
            spa: Math.floor((((2*this.basestats.spa+ivs[3]+evs[3]/4)*level)/100+5)),
            spd: Math.floor((((2*this.basestats.spd+ivs[4]+evs[4]/4)*level)/100+5)),
            spe: Math.floor((((2*this.basestats.spe+ivs[5]+evs[5]/4)*level)/100+5)),
        }
        this.movepool = movepool;
        this.abilities = abilities;
        this.moves = moves;
        this.ability = ability;
    }
}

class Venusaur extends Pokemon {
    constructor ([level, evs, ivs, moves, ability]) {
        super(3, 'Venusaur', ['Grass','Poison'], [80, 82, 83, 100, 100, 80], level, evs, ivs, ['Giga Drain','Sludge Bomb'], moves, ['Overgrow','Chlorophyll'], ability)
    }
}

class Charizard extends Pokemon {
    constructor ([level, evs, ivs, moves, ability]) {
        super(6, 'Charizard', ['Fire','Flying'], [78, 84, 78, 109, 85, 100], level, evs, ivs, ['Fire Blast','Air Slash'], moves, ['Blaze','Solar Power'], ability)
    }
}

const defaultSettings = [100, [0, 0, 0, 0, 0, 0], [31, 31, 31, 31, 31, 31], [], []];

const pokemon = {
    venusaur: new Venusaur(defaultSettings),
    charizard: new Charizard(defaultSettings)
}

module.exports = {
    pokemon,
}