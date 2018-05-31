
/* HACER COMMIT */
   function validate(){
    
      let textArea1= document.getElementById("encrypt").value;

      if( textArea1 == null || textArea1.length == 0 || /^\s+$/.test(textArea1) ) {
        return false;
      
        }else{
          alert("Conozca su mensaje cifrado");
          return true;
        }
        
    }

    function validate2(){
     
      let textArea2= document.getElementById("decrypt").value;
      if( textArea2 == null || textArea2.length == 0 || /^\s+$/.test(textArea2) ) {
        return false;
      
        }else{
          alert("Conozca su mensaje descifrado");
          return true;
        }
      
    }


    



