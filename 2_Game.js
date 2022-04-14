class Game {
    constructor(players, turnLeft = 10) {
        this.turnLeft = turnLeft
        this.players = players
        this.newTurn(players, turnLeft)
    }


    newTurn(players, turnLeft, i, j) {
    

        for(i=0 ; i<players.length; i++) {

            if(players[i].state == "looser") {
                players.splice(i,1)
                return players
            }
        }    

        while(turnLeft != 0) {

            if(players.length<2) {

                console.log('La partie est terminée')
                console.log(`${players[0]} `+'sort victorieux de la bataille.')
            }
            else {

                for( j=1 ; j<11 ; j++) {
                    turnLeft = turnLeft - 1 
                    console.log('')
                    console.log('')
                    console.log('********************************************************************************')
                    console.log('TOUR D\'ACTION n. '+`${j} / `+'10') 
                    console.log('')
                    console.log("-----Sont vivants :")
                    console.log(players)
                    console.log('')
                    const turn = new Turn(players)
                    //console.log(turn)//
                }

                {console.log('La partie est terminée')}    
            }
        }
    }
};


