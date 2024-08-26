
/* Reglas de encriptación:
"a" es convertido para "abe"
"e" es convertido para "eso" 
"i" es convertido para "ime"
"o" es convertido para "oci"
"u" es convertido para "ume"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/*
Reglas de desencriptación: 
"eso" es convertido para "e" 
"ime" es convertido para "i"
"abe" es convertido para "a"
"oci" es convertido para "o"
"ume" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras    
*/



//selecciona el boton cuando da click
var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click", function(event){

    //desabilita lo que  viene  por  defecto en este caso la accion del  boton
    event.preventDefault(); 
    
    
    // trae el formulario
    var form = document.querySelector('.formulario');  
    
    

    // trae  el mensaje del formulario
    var  inputTexto = form.texto;
    var  mensaje = inputTexto.value;
   
    

    // convierte  el mensaje en   un array y  con split  divide  la  cadena  mensaje 
    var arrayMensaje  =  mensaje.split('');


    //recorre el array 
    for (var i=0; i<arrayMensaje.length; i++){
       
        // cada  letra  del arrat
        letra = arrayMensaje[i];

        //cambia  las  letras  con la  función para encriptar  el mensaje
        cambiarPalabras('a','ai',i,arrayMensaje);
        cambiarPalabras('e','enter',i,arrayMensaje);
        cambiarPalabras('i','imes',i,arrayMensaje);
        cambiarPalabras('o','ober',i,arrayMensaje);
        cambiarPalabras('u','ufat',i,arrayMensaje);
       
            
        }

       //cuando ya está encriptado el mensaje  lo pasa a string
        var array_a_cadena = String(arrayMensaje);
        console.log(array_a_cadena);

        //quitas  las  comas  del string
        var string_sin_comas=array_a_cadena.replace(/,/g,"");

     

        //pasar  el srting  a  html 

        var inputnputEncriptado= document.querySelector('.input-2'); 
        inputnputEncriptado.value=string_sin_comas;

})


function cambiarPalabras (vocal,cambio,posicion,array ) {
    if (letra==vocal ) {
        array[posicion] = cambio;

       }

}
