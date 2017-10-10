import Neural from '../intelligence/neural';
import Api from '../api/request';
import 'dotenv/config'

class Agent {

    public_code
    board

    constructor(){
      this.public_code = process.env.PUBLIC_CODE
    }

    public async strategy(board){
      this.board = board
      //PUT YOUR LOGIC HERE
      //=======================================================
      //Find your current position on the board using your public_code
      let myPositon =this.getMyPosition()
      console.log(myPositon)
      //Obtain inputs based on environment analize
      let inputs = this.analyzer()
      
      //Send the inputs to your neural network and make your movement based on this
      Api.sendMovement(Neural.init(inputs))
      .then(response=> {
         return  (response)
      })
      //=======================================================
    }

    public getMyPosition(){
      console.log(this.board)
      let me = this.board.find((iam)=>iam.usuario === +this.public_code)
      console.log(typeof(me))
      return me.casilla
    }

    public analyzer(){
    /*let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      let matriz = [];
      for(let i = 0; i < letters.length; i++){
        for(let j = 0; j < letters.length; j++){
          //matriz.push();
          this.board.find(( )=>player.casilla === (letters[i] + (i + 1))); 
        }  
      }
      console.log('Environment analyzer...')
      return*/
    }
}

export default new Agent()