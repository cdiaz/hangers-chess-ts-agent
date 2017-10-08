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
  }

  public Init(){
    console.log(`Current Turn is: ${this.turn}`)
    if(this.turn != -1){
      Api.gameStatus()
      .then(data=>{
        this.turn = data['turno']
        this.Init()
        Agent.strategy(data['tablero'])
      })
      .catch(e=> this.ErrorHandler(e))
    }
    else{
      console.log(`Game over`)
      process.exit()
    }
  }

  public ErrorHandler(e){
    console.log((e.code == `ENETUNREACH`)
    ?`Network error`
    :`Eror ${e.code}`)
    throw new Error(e)
  }
}

new Main()