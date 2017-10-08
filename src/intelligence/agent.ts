import Neural from '../intelligence/neural';
import Api from '../api/request';
import 'dotenv/config'

class Agent {

    public_code
    board

    constructor(){
      this.public_code = process.env.PUBLIC_CODE
    }

    public strategy(board){
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
         return (response)
      })
      //=======================================================
    }

    public getMyPosition(){
      let me = this.board.find((iam)=>iam.usuario === +this.public_code)
      return me.casilla
    }

    public analyzer(){
      console.log('Environment analyzer...')
      return
    }
}

export default new Agent()