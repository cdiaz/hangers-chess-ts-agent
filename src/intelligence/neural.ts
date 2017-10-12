
import * as synaptic from 'synaptic'
import * as _ from 'underscore';

class Neural{
  input
  output 
  trainingData
  learningRate

   constructor(){
    this.input = new synaptic.Layer(25); // Dos entradas
    this.output = new synaptic.Layer(4); // Tres salidas 
    this.input.project(this.output);
    this.trainingData =  [ 
        {input: [
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0], output: [0, 1, 0, 0]}, // Avanzar Seguro
        {input: [
            0, 0, 1, 0, 0,
            1, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 1,
            0, 0, 1, 0, 0], output: [0, 1, 0, 0]}, // Avanzar Seguro
        {input: [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0], output: [0, 1, 0, 0]}, // Avanzar Seguro
        {input: [
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0], output: [0, 0, 1, 0]}, // comerarriba 
        {input: [
            0, 0, 1, 0 ,0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 1, 0, 0], output: [0, 0, 0, 1]}, // comer abajo
        {input: [
            0, 0, 0, 0 ,0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0], output: [0, 1, 0, 0]}, //  Avanzar
        {input: [
            0, 0, 0, 0 ,0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0], output: [0, 1, 0, 0]}, //  Avanzar
        {input: [
            0, 0, 1, 0 ,0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 1, 0], output: [0, 0, 0, 1]}, // Comer Abajo
        {input: [
            0, 0, 1, 0 ,0,
            0, 0, 1, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 1], output: [0, 0, 0, 1]}, // Comer Abajo
        {input: [
            0, 0, 0, 0 ,1,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0], output: [0, 0, 1, 0]}, // Comer Arriba
        {input: [
            0, 0, 0, 0, 1,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 1, 0, 0], output: [0, 0, 1, 0]}, // Comer Arriba
        
        
    ];

    this.learningRate = 0.4;
  

    this.retrain(); // Iniciar el entrenamiento

      
  /*     for (var index = 0; index < result.length; index++) {
        if (result[index]==Math.max(...result)) {
          moven= index;
        }
      } */
/* 
      model(); */
  }

  
  public train() {
    for(let i = 0; i < this.trainingData.length; i++) {
        this.input.activate(this.trainingData[i]["input"]);
        this.output.activate();
        this.output.propagate(this.learningRate, this.trainingData[i]["output"]);
    }
}
public model(modelo){
  this.input.activate(modelo); // Silvido
  var moven=0;
  let result =this.output.activate();
  console.log(Math.max(...result));
  console.log("No anvanzar: " + result[0] * 100 + "%");
  console.log("Avanzr: " + result[1] * 100 + "%");
  console.log("Comer arriba: " + result[2] * 100 + "%");
  console.log("comer abajo:"  + result[3]*100 + "%");
  for (var index = 0; index < result.length; index++) {
    if (result[index]==Math.max(...result)) {
      moven= index;
    }
  }
  console.log(moven);
return moven;
}
  public retrain() {
    for(let i = 0; i < 1000; i++) {
        this.trainingData = _.shuffle(this.trainingData);
        this.train();
    }
}
  public init(inputs){
    console.log(`In a future I will be your neural network, send me data and I will do the magic`)
    return 1
  }
}

export default new Neural();
