class Turn {
    constructor(players) {
        this.players = players
        this.startTurn()
        this.attack()
    }




    startTurn(i) {

        let playersRandSelect = [player1, player2, player3, player4, player5]
        let targetRandSelect = [player1, player2, player3, player4, player5]
        let attackRandSelect = ['classique', 'spéciale']
        let attackType = 0


        for( let i=0 ; i<players.length ; i++) {
            let j = playersRandSelect[Math.floor(Math.random()*playersRandSelect.length)]


            if( j != player1) {

                console.log('*** COUP n.' + `${i+1}` + `***`)
                
                playersRandSelect.splice(playersRandSelect.indexOf(j),1)
                
                console.log(playersRandSelect)
                console.log(`${j.nameClass} `+ 'attaque ... et il utilise ...')
                
                attackType = attackRandSelect[Math.floor(Math.random()*attackRandSelect.length)]
                
                console.log('son attaque '+`${attackType}`)
                console.log('contre ...')
                console.log('...')

                targetRandSelect.splice(targetRandSelect.indexOf(j),1)
                let target = targetRandSelect[Math.floor(Math.random()*playersRandSelect.length)]
             
            
                console.log(target.nameClass)
                console.log('')
                console.log('')

                targetRandSelect = [player1, player2, player3, player4, player5] 
            }








            else {
                console.log('*** COUP n.' + `${i+1}` + `***`)
                console.log('A vous de jouer!')
                console.log('')

                playersRandSelect.splice(playersRandSelect.indexOf(j),1)

                let stats = prompt(
                    `Voir les stats actuelles des combattants
                    - OUI
                    - NON`)

                if(stats == "OUI") {
                    let statsList = prompt(
                    `STATS ACTUELLES` + ' \n' + 
                    `${player1.nameClass} `+':           hp = '+ `${player1.hp}` + '      mana = ' +`${player1.mana}` + ' \n' + 
                    `${player2.nameClass} `+':      hp = '+ `${player2.hp}` + '        mana = ' +`${player2.mana}` + ' \n' +
                    `${player3.nameClass} `+':        hp = '+ `${player3.hp}` + '       mana = ' +`${player3.mana}` + ' \n' +
                    `${player4.nameClass} `+':              hp = '+ `${player4.hp}` + '        mana = ' +`${player4.mana}` + ' \n' +
                    `${player5.nameClass} `+':          hp = '+ `${player5.hp}` + '      mana = ' +`${player5.mana}`)
                }


                console.log(`${j.nameClass} ` + 'attaque ... et il utilise ...') 
                
                let myAttack = prompt(
                    `A vous de jouer ! Quelle attaque souhaitez-vous lançer ?
                    - 1 : attaque classique
                    - 2 : super attaque `) 


                if(myAttack == 1) {

                    console.log('son attaque classique.')
                    console.log('contre ...')
                    console.log('...')
                    console.log('')

                }   
                else if(myAttack == 2) {

                    console.log('sa super attaque !')
                    console.log('contre ...')
                    console.log('...')
                }

                targetRandSelect = [player1, player2, player3, player4, player5]
                targetRandSelect.splice(targetRandSelect.indexOf(j),1)
                let myTarget = prompt(
                    `Qui sera votre cible ?
                     1 - ${targetRandSelect[0].nameClass}
                     2 - ${targetRandSelect[1].nameClass}
                     3 - ${targetRandSelect[2].nameClass}
                     4 - ${targetRandSelect[3].nameClass}`)

                    if(myTarget == 1) {console.log(targetRandSelect[0].nameClass)}
                    else if(myTarget == 2) {console.log(targetRandSelect[1].nameClass)}
                    else if(myTarget == 3) {console.log(targetRandSelect[2].nameClass)}
                    else if(myTarget == 4) {console.log(targetRandSelect[3].nameClass)}
                     
                 
            }             
   
        }
    }



    attack() {
      let narration = ["Ouuuula! y'a de la castagne !", "Et BIM ! En pleine tronche !", "Mamamiya.. j'aimerai pas être à la place du gars..", "My God !c'est un vrai carnage !!"]
      console.log(narration[Math.floor(Math.random()*narration.length)]) 
      console.log('********************************************************************************')
    }
    
};    
    
    