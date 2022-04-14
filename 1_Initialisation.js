console.log('myRPG')
console.log('')




// DISPLAY (window) : Choix du personnage par le joueur //
let player_choice = prompt(`
    Choisissez un chiffre pour selectionner un personnage :
    - 1 : Fighter
    - 2 : Berzerker
    - 3 : Assassin
    - 4 : Monk
    - 5 : Paladin`)




// BACK : Initialisation du personnage choisi par le joueur //
let initialisation_character = 0
let settings = 0
if(player_choice == 1) { settings = settings + 1 ; initialisation_character = new Fighter }
else if(player_choice == 2) { settings = settings + 2 ; initialisation_character = new Berzerker }
else if(player_choice == 3) { settings = settings + 3 ;initialisation_character = new Assassin }
else if(player_choice == 4) { settings = settings + 4 ;initialisation_character = new Monk }
else if(player_choice == 5) { settings = settings + 5 ;initialisation_character = new Paladin }
else {console.log('Votre choix n\'est pas valide. Essayez à nouveau')}




// BACK : Initialisation des autres personnages //
let player1 = initialisation_character;
let player2 = 0
let player3 = 0
let player4 = 0
let player5 = 0
if(settings == 1) {player2 = new Berzerker ; player3 = new Assassin ; player4 = new Monk ; player5 = new Paladin ;console.log('Vos adversaires sont configurés. Le Berzerker, l\'Assassin, le Monk et le Paladin vous attendent. Les voici :') }
else if(settings == 2) {player2 = new Fighter ; player3 = new Assassin ; player4 = new Monk ; player5 = new Paladin ; console.log('Vos adversaires sont configurés. Le Fighter, l\'Assassin, le Monk et le Paladin vous attendent. Les voici :') }
else if(settings == 3) {player2 = new Fighter ; player3 = new Berzerker ; player4 = new Monk ; player5 = new Paladin ; console.log('Vos adversaires sont configurés. Le Fighter, le Berzerker, le Monk et le Paladin vous attendent. VLes voici s :') }
else if(settings == 4) {player2 = new Fighter ; player3 = new Berzerker ; player4 = new Assassin ; player5 = new Paladin ; console.log('Vos adversaires sont configurés. Le Fighter, le Berzerker, l\'Assassin et le Paladin vous attendent. Les voici :') }
else if(settings == 5) {player2 = new Fighter ; player3 = new Berzerker ; player4 = new Assassin ; player5 = new Monk ; console.log('Vos adversaires sont configurés. Le Fighter, le Berzerker, l\'Assassin, et le Monk vous attendent. Les voici :') }
let players = [player1, player2, player3, player4, player5]
let deadPlayers = []
console.log(player2)
console.log(player3)
console.log(player4)
console.log(player5)
console.log('')
console.log('Voici votre personnage :')
console.log(player1)
console.log('')




// BACK : Creation du jeu //
console.log('Initialisation de la partie')
let game = new Game(players)
//console.log(game)//
console.log('')

