// let suma = function(){
//     let operacion = function(){
//         let result = num1 + num2
//         return result
//     }

//     let num1 = document.getElementsByClassName
// }
let textoPantalla = "hola"

function imprimirPantalla(dato){
    let pantalla = document.getElementById("imprimirPantalla")
    let tecla = document.getElementById("number1")
    tecla1 = tecla.value
    textoPantalla += dato

    pantalla.innerText = textoPantalla
}

imprimirPantalla()