class Paladin extends Characters {
    constructor(nameClass= "Paladin", name = "Ulder", hp = 16, dmg = 3, dmgX = 4, mana = 160, specialAttack = "Lighting", state = "playing") {
        super(nameClass, name, hp, dmg, dmgX, mana, specialAttack, state)
    }

};
    
    

const paladin = new Paladin("Ulder", 16, 3, 130, "playing")