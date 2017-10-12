// ============================================
//HangersChess TypeScript Smart Agent
//@Authors: [Yeison Gomez, Cristiam Diaz]
// ============================================

'use strict';
import Api from './api/request'
import Agent from './intelligence/agent'

class Main{
  turn

  constructor(){
    this.turn = 0
    this.Init()
    /* Api.sendMovement(1) */
  }

  public async Init(){
    console.log(`Current Turn is: ${this.turn}`)
    //Check game status
     let gameStatus = await Api.gameStatus()
      this.turn = gameStatus['turno']
      if(this.turn == -1) {
        console.log(`Game over`)
        process.exit()
      }
      else if(this.turn == -3){ 
        console.log(`You are winner`)
        process.exit()
      }
      else if(this.turn == -10){ 
        console.log(`You are dead`)
        process.exit()
      } else {
        //Send board to your Agent
        if(gameStatus['tablero']){
          Agent.strategy(gameStatus['tablero'])
        }
        //Call recursively
        this.Init()
    }
  }

}

new Main()