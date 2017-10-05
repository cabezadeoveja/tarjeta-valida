function isValidCard(){

// para validar los numeros ingresados
do{ // no vas a poder seguir hasta que me des lo que te pido.
var DigiNumberCard = prompt("Ingresa los numeros de tu tarjeta");
}
while (DigiNumberCard== "" || DigiNumberCard.length < 15 || DigiNumberCard.length>16);
//mientras no se cumplan estas reglas, el do no dejará seguir.
if (DigiNumberCard != ""){
	var numberCard = DigiNumberCard.split("").reverse().join('');
	//con split se transformamos la variable en un array y lo invertimos con reverse
}

console.log(numberCard)

//Encontrando la ubicación par
for (var i = 0; i< numberCard.length; i++){ // recorriendo numero por numero
if (i % 2 == 0){ //para condicionar las ubicaciones de i par 
var par = parseInt(numberCard[i]) * 2;
//los numeros pares se multiplican por 2 y pasamos los string a numero con parseInt
if (par > 9){
numberCard[i] = parseInt(numberCard[i]-9)	
//ej: (16)= (1+6=7) y 16-7 = 9 y asi con todos los num. hasta el 18
if (i % 2 != 0){
numberCard[i] = parseInt(numberCard[i])	
//posiciones impares 
}
}
}
}

//Sumando todos los valores
var sum = 0
for (var i = 0; i<numberCard.length; i++){ //acumulador de todos los valores
sum+= parseInt(numberCard[i]);	//sumando todos los items
}

if (sum%10 === 0){
	return alert("Tarjeta valida") // si el modulo da 0 la tarjeta es valida.
}
else {
	return alert ("Tarjera invalida")
}

}
isValidCard();	




/*
NEXT
do{
var numberCard = prompt("Ingresa los numeros de tu tarjeta");
}
while (numberCard == "" || numberCard.length < 15 || numberCard.length>16); // numberCard != '0123456789'



var cardNumber = prompt("Ingresa los numeros de tu tarjeta");

function isValidCard(numbers){
	var array = [];
for (var i=0;  i<numbers.length; i++){
	array.unshift(parseInt(numbers.charAt(i)));
}
}

/*
ESTO NO RESULTO

var numberCard = numberCard.split('').reverse().join()  // Invertir una cadena con JavaScript
console.log(numberCard)

function isValidCard(numberCard){
var resultadoSuma= []; //resultado final
   

for (var i=0; i<numberCard.length; i++){
if ((i+1)%2==0){  // para obtener los numeros pares
return numberCard[i]*2;
}

if ((numberCard[i]*2) > 9){
return numberCard[i]-9 // ej: (16)= (1+6=7) y 16-7 = 9 y asi con todos los num. hasta el 18
}

else { //los demás numeros no se modifican
}
}

resultadoSuma += (resultadoSuma + (numberCard[i]*2) + (numberCard[i]-9));
if(resultadoSuma%10 == 0){
		return alert('tu tarjeta es valida')
}
}*/

