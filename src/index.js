/* Acá va tu código */
function btnEnviar(){

    var txtMensaje = document.caesarForm.mensaje.value;
    
    if(txtMensaje===""){
        alert("debe escribir un mensaje");
        document.caesarForm.mensaje.focus();
        return false;
    }else{
        alert("mensaje enviado");
        return true;
    }
    }
