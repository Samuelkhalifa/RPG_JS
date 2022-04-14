class Monk extends Characters {
    constructor(nameClass= "Monk", name = "Moana", hp = 8, dmg = 2, dmgX = 0, mana = 200, specialAttack = "Heal", state = "playing") {
        super(nameClass, name, hp, dmg, dmgX, mana, specialAttack, state)
    } 
};
    
    
const monk = new Monk("Moana", 8, 2, 200, "playing")