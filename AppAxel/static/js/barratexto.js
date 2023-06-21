// Este código es una función en JavaScript que se encarga de cambiar el texto en una sección específica 
// de una página web. La función utiliza una matriz llamada "text" para almacenar diferentes cadenas de texto, 
// que se mostrarán en un elemento HTML específico con el id "text-change". La función utiliza un contador 
// para cambiar el texto cada 3 segundos usando el método setInterval(). Cuando el contador alcanza la última 
// posición en la matriz, se reinicia a cero para volver a la primera posición de la matriz y mostrar el 
// texto original. En resumen, este código es útil para cualquier persona que desee agregar una función de 
// cambio de texto a una página web.

var text = ["COLECCIÓN ZALORBLACK DISPONIBLE", "ENVÍOS GRATIS A TODO CHILE A PARTIR DE $80.000"];
var counter = 0;
var elem = document.getElementById("text-change");
setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
