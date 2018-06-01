
/* HACER COMMIT */
    validate = () =>
   {
      let offsetNumber= parseInt(document.getElementById("offsetNumber").value);
          let textArea2= document.getElementById("encrypt").value;
         document.getElementById("cipheredMessage").innerHTML = window.cipher.encode(textArea2, offsetNumber);
       
    }

     validate2 = () =>
     {
     
      let decipher= document.getElementById("offsetNumber").value;
      let textArea2= document.getElementById("encrypt").value;
      document.getElementById("cipheredMessage").innerHTML = window.cipher.decode(textArea2, decipher);

     }
     

/* no funciona

  cipher.createCipherWithOffset = (offset) => {

    encode:(offset)=> {
       let offsetNumber= parseInt(document.getElementById("offsetNumber").value);
          let textArea2= document.getElementById("encrypt").value;
         document.getElementById("cipheredMessage").innerHTML = window.cipher.encode(textArea2, offsetNumber);
    },

    decode:(offset)=> {
       
    }

}*/




