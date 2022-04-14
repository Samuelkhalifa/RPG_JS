class Characters {
    constructor(nameClass, name, hp, dmg, dmgX, mana, specialAttack, state) {
        this.nameClass = nameClass
        this.name = name
        this.hp = hp
        this.dmg = dmg
        this.dmgX = dmgX
        this.mana = mana
        this.specialAttack = specialAttack
        this.state = state
        } 



    takeDamage(attacking_player, damage_value) {
        if(this.hp > damage_value) 
            { this.hp = this.hp - damage_value 
            console.log(`${this.name}` + 'subit' + `${damage_value}` + 'points de dégats sous l\'attaque de ' + `${attacking_player.name}`) }
        else 
            { this.hp = 0 ; this.state = "looser" 
            console.log(`${this.name}` + 'est mort, tué par' + `${attacking_player.name}`) }
        }



    dealDamage(attacked_player) {
        if(attacked_player.hp > this.dmg) 
            { console.log(`${this.name}` + 'inflige' + `${damage_value}` + 'points de dégats à ' + `${attacked_player.name}`) }
        else
            { console.log(`${attacked_player.name}` + 'est mort, tué par ' + `${this.name}`) }
        attacked_player.takeDamage(this.dmg)
        }


        
    dealDamageX(attacked_player) {
        if(attacked_player.hp > this.dmgX) 
            { console.log(`${this.name}` + 'inflige' + `${this.dmgX}` + 'points de dégats à ' + `${attacked_player.name}`) }
        else
            { console.log(`${attacked_player.name}` + 'est mort, tué par ' + `${this.name}`) }
        attacked_player.takeDamage(this.dmgX)
        }



    specialAttack(specialAttack) {

        if(this.nameClass == 'Fighter') 
            {if(this.mana > 20) { this.mana = this.mana - 20 
                console.log('L\'usage de l\'attaque spéciale' + `${specialAttack}` + 'a couté 20 mana à ' + `${this.name}`) 
                this.dealDamageX(attacked_player) }
            else {console.log(`${name}` + 'ne dispose plus d\'assez de mana')
                this.dealDamage(attacked_player) }
            } 

        else if(this.nameClass == 'Monk') 
            {}
            
        else if(this.nameClass == 'Paladin')
            {}

        else if(this.nameClass == 'Assassion') 
            {}

        else if(this.nameClass == 'Berzerker') 
            {}
    }
};

