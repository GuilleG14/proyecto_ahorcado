/*
var dictionary = "["_____", "_____", "_____", "_____", ....., "_____"]"
1. Aleatorio elección de frase.
2. Sustituir nº aleatorio de caracteres por "_____".
3. Pintar la frase con "_____" en pantalla y tener un prompt / input / whatever en el que podáis introducir letras para completar la frase.
4. Hay que definir un número máximo de intentos fallidos:
    - Si se superan, se pierde.
    - Si se completa la frase antes de superarlo, has ganado.
*/

var dictionary = ['Dios los cria y ellos se juntan.','Donde fueres, haz lo que vieres.', 'Donde las dan las toman.', '¿Donde va Vicente?, donde va la gente.', 'El buen paño en el arca se vende.', 'El buey suelto, bien se lame.', 'El gato escaldado, del agua fria huye.', 'El habito no hace al monje.', 'El hambre agudiza el ingenio.', 'El hambre es muy mala consejera.', 'El mejor escribano echa un borron.', 'El muerto al hoyo y el vivo al bollo.', 'El ocio no quede impune; quien no trabaje, que ayune.', 'El ojo del amo engorda el caballo.', 'El perro del hortelano, ni come ni deja comer al amo.', 'El pez grande se come al chico.', 'El que a buen arbol se arrima, buena sombra le cobija.', 'El que a hierro mata, a hierro muere.', 'El que algo quiere, algo le cuesta.', 'El que avisa no es traidor.']
        
var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z"];

var fraseElegida = dictionary[Math.floor(Math.random()*dictionary.length)].toUpperCase();
//console.log(fraseElegida)

var aleatorio = Math.floor(Math.random()*fraseElegida.length);

var letrasAleatorias = fraseElegida[aleatorio];


var fraseSustituida = fraseElegida.replace(/[letrasAleatorias]/gi,'_');
//console.log(fraseSustituida);

document.getElementById('sentence').innerHTML= fraseSustituida;

// var fraseSustituidaconBlanks = '';


var letter;
var frase_resuelta = fraseSustituida.split("");
var letrasUsadas = [];
var cont = 4;
function letterIntro(){
let bol = false;
letter = (document.getElementById ("letter").value).toUpperCase();
        if(isNaN(letter) == true){
            for (var i = 0; i < fraseElegida.length; i++){
                //console.log(fraseElegida[i]);
                if (fraseElegida[i] == letter){   
                    frase_resuelta[i] = letter;
                }
                for(var j = 0; j < letrasUsadas.length; j++){
                    if(letter == letrasUsadas[j]){
                        bol = true;
                    }
                }
            }
            if(!fraseElegida.includes(letter)){
                cont -= 1;
                letrasUsadas.push(letter);
                showIMG(cont);
            }
        }else{
            alert("¡Introduce un carácter válido!")
        }

if(bol){
    alert("Esta letra ya está utilizada");
    letrasUsadas.pop();
}

document.getElementById('sentence').innerHTML= frase_resuelta.join("");
document.getElementById ("letter").value = "";
document.getElementById('lettersUsed2').innerHTML= letrasUsadas;

if(frase_resuelta.join("") === fraseElegida){
    showIMG(4);
 }
}

function changeIMG(counter){
    var route;
  switch(counter){
    case 3:
        route = "/Users/Alber/Documents/Codenotch/ahorcado/1.png";
        break;
    case 2:
        route = "/Users/Alber/Documents/Codenotch/ahorcado/2.png";
        break;
    case 4:
        route = "/Users/Alber/Documents/Codenotch/ahorcado/4.png";
        document.getElementById("playAgain").style.display = 'inline';
        document.getElementById("letter").style.display = 'none';
        document.getElementById("write").style.display = 'none';
        break;
    default:
        route ="/Users/Alber/Documents/Codenotch/ahorcado/3.png";
        document.getElementById("playAgain").style.display = 'inline';
        document.getElementById("letter").style.display = 'none';
        document.getElementById("write").style.display = 'none';
        break;
  }
  return route;
}

function showIMG(cont){
    var image = document.getElementById("image");
    image.src = changeIMG(cont);
}

document.getElementById("letter")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("write").click();
    }
})







