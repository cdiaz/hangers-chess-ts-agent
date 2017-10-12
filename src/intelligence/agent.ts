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
      var enemies;
      var iam=myPosition(this.board);
      function myPosition (board){
          return   board.find(element => element.usuario===86498);
      }
      function myEnemies(board){
          var colum= board[0].casilla.substring(0, 1);
          var rango=[];
          for (var index = 0; index < 5; index++) {
              for (var index2 = 0; index2 < 5; index2++) {
                  var temp= convert(iam,index-2,index2-2);
                 var temp2;
                  if (board.find(element => element.casilla === temp)==iam){
                      temp2 ="0";
                  }else{
                      temp2=board.find(element => element.casilla === temp)!=null?1:0;
                  }   
                   rango.push(temp2);
              }
          }
           return rango; 
      }
      function convert (element, indexC, indexF){
          var colum = String.fromCharCode(element.casilla.substring(0,1).charCodeAt(0) + indexC); // 'a'
          var fil= parseInt(element.casilla.substring(1,2))+ indexF; 
          return colum+fil;
      }
      //Find your current position on the board using your public_code
      let myPositon =this.getMyPosition()
      //Obtain inputs based on environment analize
      let inputs = this.analyzer()
      
      //Send the inputs to your neural network and make your movement based on this
      console.log(Neural.model(myEnemies(board)));
      Api.sendMovement(Neural.model(myEnemies(board)))
      .then(response=> {
         return  (response)
      })
      //=======================================================
    }

    public getMyPosition(){
      let me = this.board.find((iam)=>iam.usuario === +this.public_code)
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