import * as synaptic from 'synaptic'
import * as _ from 'underscore';
import Neural from '../src/intelligence/neural';


/* 
let input = new synaptic.Layer(25); // Dos entradas
let output = new synaptic.Layer(4); // Tres salidas


input.project(output); // Conectar la entrada con la capa oculta
//input.project(output); //conectar las capas ocultas con la salida
let trainingData = [ 
    {input: [
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0], output: [1, 0, 0, 0]}, // Avanzar Seguro
    {input: [
        0, 0, 1, 0, 0,
        1, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 1,
        0, 0, 1, 0, 0], output: [1, 0, 0, 0]}, // Avanzar Seguro
    {input: [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0], output: [1, 0, 0, 0]}, // Avanzar Seguro
    {input: [
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0], output: [0, 0, 0, 1]}, // No Avanzar 
    {input: [
        0, 0, 1, 0 ,0,
        0, 0, 1, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 1, 0,
        0, 0, 1, 0, 0], output: [0, 0, 0, 1]}, // No Avanzar
    {input: [
        0, 0, 0, 0 ,0,
        0, 0, 1, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0], output: [0, 0, 0, 1]}, // No Avanzar
    {input: [
        0, 0, 0, 0 ,0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 0, 0], output: [0, 0, 0, 1]}, // No Avanzar
    {input: [
        0, 0, 1, 0 ,0,
        0, 0, 1, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0], output: [0, 0, 1, 0]}, // Comer Abajo
    {input: [
        0, 0, 1, 0 ,0,
        0, 0, 1, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 0, 1], output: [0, 0, 1, 0]}, // Comer Abajo
    {input: [
        0, 0, 0, 0 ,1,
        0, 0, 0, 1, 0,
        0, 0, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0], output: [0, 1, 0, 0]}, // Comer Arriba
    {input: [
        0, 0, 0, 0, 1,
        0, 0, 0, 1, 0,
        0, 0, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0], output: [0, 1, 0, 0]}, // Comer Arriba
    
    
];

let learningRate = 0.4;
 
function train() {
    for(let i = 0; i < trainingData.length; i++) {
        input.activate(trainingData[i]["input"]);
        output.activate();
        output.propagate(learningRate, trainingData[i]["output"]);
    }
}

function retrain() {
    for(let i = 0; i < 1000; i++) {
        trainingData = _.shuffle(trainingData);
        train();
    }
}
 
retrain(); // Iniciar el entrenamiento

input.activate([
    "0","0","1","0","0",
    "0","0","1","0","0",
    "0","0","0","0","0",
    "0","0","1","0","0",
    "0","0","1","0","0"]); // Silvido
let result = output.activate();

console.log("Avanzar Seguro: " + result[0] * 100 + "%");
console.log("Comer Arriba: " + result[1] * 100 + "%");
console.log("Comer abajo: " + result[2] * 100 + "%");
console.log("No avanzar:"  + result[3]*100 + "%");
console.log(output.activate());
 */