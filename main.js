// ------------- TESTING AREA ----------------
console.log("--- main.js concetado con index.html exitosamente ---")
// Funciones para test
function myFunction_test(){
    console.log(" Funciono bien")
}
// -------------------------------------------

// Variables globales
let op1=0, op2=0, operation=0;

// ---------- Botones objetos de HTML -----------

// Botones numericos
let result = document.getElementById("result")
const uno = document.getElementById("1")
const dos = document.getElementById("2")
const tres = document.getElementById("3")
const cuatro = document.getElementById("4")
const cinco = document.getElementById("5")
const seis = document.getElementById("6")
const siete = document.getElementById("7")
const ocho = document.getElementById("8")
const nueve = document.getElementById("9")
const cero = document.getElementById("0")
const punto = document.getElementById("point")
// Botones funcion
const allClean = document.getElementById("AC")
const divide = document.getElementById("divide")
const percent = document.getElementById("percent")
const plus = document.getElementById("plus")
const PlusMinus = document.getElementById("PlusMinus")
const times = document.getElementById("times")
const equal = document.getElementById("equal")
// Historial
const historyNumber = document.getElementsByClassName("btn-operator-number")
const historySymbol = document.getElementsByClassName("btn-operator-symbol")
// Eventos generales

//[Numeros]
uno.onclick = function(any){
    result.textContent = result.textContent + "1";
}
dos.onclick = function(any){
    result.textContent = result.textContent + "2";
}
tres.onclick = function(any){
    result.textContent = result.textContent + "3";
}
cuatro.onclick = function(any){
    result.textContent = result.textContent + "4";
}
cinco.onclick = function(any){
    result.textContent = result.textContent + "5";
}
seis.onclick = function(any){
    result.textContent = result.textContent + "6";
}
siete.onclick = function(any){
    result.textContent = result.textContent + "7";
}
ocho.onclick = function(any){
    result.textContent = result.textContent + "8";
}
nueve.onclick = function(any){
    result.textContent = result.textContent + "9";
}
cero.onclick = function(any){
    result.textContent = result.textContent + "0";
}
punto.onclick = function(any){
    result.textContent = result.textContent + ".";
}

// [Botones funcionales]
allClean.onclick = function(any){
    limpiar();
    reset();
    myFunction_test();
}
plus.onclick = function(any){
    op1 = result.textContent;
    operation = "+"
    limpiar();
    myFunction_test();
}
minus.onclick = function(any){
    op1 = result.textContent;
    operation = "-"
    limpiar();
    myFunction_test();
}
divide.onclick = function(any){
    op1 = result.textContent;
    operation = "/"
    limpiar();
    myFunction_test();
}
times.onclick = function(any){
    op1 = result.textContent;
    operation = "*"
    limpiar();
    myFunction_test();
}
PlusMinus.onclick = function(any){
    PlusMinus_btn()
    myFunction_test();
}
erase.onclick = function(any){
    borrar();

    myFunction_test();
}
percent.onclick = function(any){
    percentBtn();
    myFunction_test();
}
equal.onclick = function(any){
    op2 = result.textContent;
    resolver();
}

// Funciones de operación

function limpiar(){
    result.textContent = ""
}

function reset(){
    op1 = 0;
    op2 = 0;
    operation = 0;
}

function resolver(){
    let res;
    switch(operation){
        case "+":
            res = parseFloat(op1) + parseFloat(op2);
            break;
        case "-":
            res = parseFloat(op1) - parseFloat(op2);
            break;
        case "/":
            res = parseFloat(op1) / parseFloat(op2);
            break;
        case "*":
            res = parseFloat(op1) * parseFloat(op2);
            break;
    }
    result.textContent = res;
}

function borrar(){
    // const str = result.textContent;
    const replaced = result.textContent.slice(0, -1) + "";
    result.textContent = replaced;
    return result.textContent;
}

function percentBtn(){
    let res;
    res = parseFloat(result.textContent);
    res = res * (1/100);
    result.textContent = res;
    return result.textContent;
}

function PlusMinus_btn(){
    let res;
    res = parseFloat(result.textContent);
    res = res * (-1);
    result.textContent = res;
    return result.textContent;
}


