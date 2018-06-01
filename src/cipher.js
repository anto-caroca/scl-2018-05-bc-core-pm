//import { STATUS_CODES } from "http";

window.cipher = {

  encode: (word, offset) => {
    
    let result = "";
    
    //recorre cada letra del texto
    for (let letter = 0; letter < word.length; letter++) {
        
         //obtener codigo ascii 
        let ascii = word.charCodeAt(letter);

        // codigo para mayusculas es6 cifrado cesar
        if(ascii >= 65 && ascii <=  90) {
           result += String.fromCharCode((ascii - 65 + offset) % 26 + 65).toUpperCase(); 
        
        // codigo ascii para minusculas
        }else if(ascii >= 97 && ascii <= 122){
            result += String.fromCharCode((ascii - 97 + offset) % 26 + 97).toLowerCase();
            
        // deja pasar si no es letra
        }else {
            result += word.charAt(letter);      
        }
      }

return result;

  },

  decode: (word, offset) => {
  
    let result=window.cipher.encode(word, offset);
     return result;
    }
 
  
}



  

