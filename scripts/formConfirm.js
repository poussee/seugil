function validarForm(){
    formName = document.getElementById('nome').value
    formTell = document.getElementById('whatsapp').value
    formComp = document.getElementById('compra').value
    formMail = document.getElementById('pedido').value
    formMens = document.getElementById('mensagem').value
    if(formName == 0 || formTell == 0 || formMail == 0 || formComp == 0 || formMens == 0){
        alert("Preencha os campos corretamente para que o e-mail seja encaminhado.")
    }
    else{
        alert("Sua mensagem foi enviada com sucesso!")
    }
    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        document.getElementById('captcha').innerHTML="Por gentileza preencha o campo captcha";
        return false;
    }
    else
    {
         document.getElementById('captcha').innerHTML="Captcha completo";
        return true; 
    }
}