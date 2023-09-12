const botTeam = [
    {
        id: 150,
        name: 'Mewtwo',
        types: ['Psychic'],
        basestats: {
            hp: 106,
            atk: 110,
            def: 90,
            spa: 154,
            spd: 90,
            spe: 130,
        },
        movepool: ['Psystrike','Aura Sphere','Fire Blast','Ice Beam'],
        abilities: ['Pressure','Unnerve'],
        level: 100,
        evs: [4, 0, 0, 252, 0, 252],
        ivs: [31, 0, 31, 31, 31, 31],
        moves: ['Psystrike','Aura Sphere','Fire Blast','Ice Beam'],
        ability: ['Pressure']
    }, 
    {
        id: 250,
        name: 'Ho-oh',
        types: ['Fire','Flying'],
        basestats: {
            hp: 106,
            atk: 130,
            def: 90,
            spa: 110,
            spd: 154,
            spe: 90,
        },
        movepool: ['Sacred Fire','Brave Bird','Earthquake','Recover'],
        abilities: ['Pressure','Regenerator'],
        level: 100,
        evs: [252, 252, 0, 0, 0, 4],
        ivs: [31, 31, 31, 31, 31, 31],
        moves: ['Sacred Fire','Brave Bird','Earthquake','Recover'],
        ability: ['Regenerator']
    },
    {
        id: 384,
        name: 'Rayquaza',
        types: ['Fire','Flying'],
        basestats: {
            hp: 105,
            atk: 150,
            def: 90,
            spa: 150,
            spd: 90,
            spe: 105,
        },
        movepool: ['Dragon Ascent','Draco Meteor','V-Create', 'Extreme Speed'],
        abilities: ['Air Lock'],
        level: 100,
        evs: [0, 252, 0, 4, 0, 252],
        ivs: [31, 31, 31, 31, 31, 31],
        moves: ['Sacred Fire','Brave Bird','Earthquake','Recover'],
        ability: ['Regenerator']
    },
    {
        id: 483,
        name: 'Dialga',
        types: ['Steel','Dragon'],
        basestats: {
            hp: 100,
            atk: 120,
            def: 150,
            spa: 150,
            spd: 100,
            spe: 90,
        },
        movepool: ['Dragon Pulse','Flash Cannon','Fire Blast','Thunder'],
        abilities: ['Pressure','Telepathy'],
        level: 100,
        evs: [4, 0, 0, 252, 0, 252],
        ivs: [31, 0, 31, 31, 31, 31],
        moves: ['Dragon Pulse','Flash Cannon','Fire Blast','Thunder'],
        ability: ['Pressure']
    }, 
    {
        id: 484,
        name: 'Palkia',
        types: ['Water','Dragon'],
        basestats: {
            hp: 90,
            atk: 120,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 100,
        },
        movepool: ['Spacial Rend','Hydro Pump','Fire Blast','Thunder'],
        abilities: ['Pressure','Telepathy'],
        level: 100,
        evs: [4, 0, 0, 252, 0, 252],
        ivs: [31, 0, 31, 31, 31, 31],
        moves: ['Spacial Rend','Hydro Pump','Fire Blast','Thunder'],
        ability: ['Pressure']
    }, 
    {
        id: 644,
        name: 'Zekrom',
        types: ['Dragon','Electric'],
        basestats: {
            hp: 100,
            atk: 150,
            def: 120,
            spa: 120,
            spd: 100,
            spe: 90,
        },
        movepool: ['Bolt Strike','Dragon Claw','Draco Meteor','Volt Switch'],
        abilities: ['Teravolt'],
        level: 100,
        evs: [0, 252, 0, 4, 0, 252],
        ivs: [31, 31, 31, 31, 31, 31],
        moves: ['Bolt Strike','Dragon Claw','Draco Meteor','Volt Switch'],
        ability: ['Teravolt']
    },
]

botTeam.map(pokemon => (
    pokemon.stats = {
        hp: Math.floor((2*pokemon.basestats.hp+pokemon.ivs[0]+pokemon.evs[0]/4)*pokemon.level/100)+pokemon.level+10,
        atk: Math.floor((((2*pokemon.basestats.atk+pokemon.ivs[1]+pokemon.evs[1]/4)*pokemon.level)/100+5)),
        def: Math.floor((((2*pokemon.basestats.def+pokemon.ivs[2]+pokemon.evs[2]/4)*pokemon.level)/100+5)),
        spa: Math.floor((((2*pokemon.basestats.spa+pokemon.ivs[3]+pokemon.evs[3]/4)*pokemon.level)/100+5)),
        spd: Math.floor((((2*pokemon.basestats.spd+pokemon.ivs[4]+pokemon.evs[4]/4)*pokemon.level)/100+5)),
        spe: Math.floor((((2*pokemon.basestats.spe+pokemon.ivs[5]+pokemon.evs[5]/4)*pokemon.level)/100+5)),
    }
))

module.exports = {
    botTeam,
}