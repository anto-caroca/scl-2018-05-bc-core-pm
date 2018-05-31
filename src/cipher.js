window.cipher = {
/* HACER COMMIT*/
  encode: (offset, string) => {
    let offset=0;
    let string=" ";
    let result =" ";
 
    //recorre cada letra del texto
    for (let letter = 0; letter < string.length; letter++) {
          
         //obtener codigo ascii 
        let ascii = string.charCodeAt(letter);

        // codigo para mayusculas
        if(ascii >= 65 && ascii <=  90) {
           result += String.fromCharCode((ascii - 65 + offset) % 26 + 65); 

        // codigo ascii para minusculas
        }else if(ascii >= 97 && ascii <= 122){
            result += String.fromCharCode((ascii - 97 + offset) % 26 + 97);

        // deja pasar si no es letra
        }else {
            result += string.charAt(letter);
        }
    }

return result;

/* 
cipher.encode(offset, string): offset es el número de posiciones que
 queremos mover a la derecha en el alfabeto y string el mensaje (texto) 
 que queremos cifrar.

[A-Za-z]    regex

(x - 65 + n) % 26 + 65 mayusculas
(x- 97 + n) % 26 + 97 minusculas

x = numero de la letra ASCII  
n = valor fijo

var string = 'ABC';
string.CharCodeAt(0) devuelve 65

*/

  },

  decode: (string, offset) => {
    //String.fromCharCode(72); devuelve "H" 
    
    let result = " ";
    let string = (26-offset)%26;
    result= encode;
    return result;
  }
} 


  

