function validar_formulario() {
    //var nombre = documento.formRegistro.txtNombre;
    var email = document.getElementById("txtEmail");
    var password = document.getElementById("txtPassword");
    var errores = document.getElementById("errores");
    var hay_errores = false;

    errores.innerHTML = "";




    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(formato_email)) {
        //alert('Debe especificar un correo electrónico válido.');
        errores.innerHTML += 'Debe especificar un correo electrónico válido. <br/>';
        email.className = "error";
        hay_errores = true;
        //return false;
    }

    if (password.value.length == 0 || password.value.length < 8) {
        //alert('La contraseña es un campo requerido y debe tener más de 8 caracteres.');
        errores.innerHTML += 'La contraseña es un campo requerido y debe tener más de 8 caracteres.<br/>'
        password.className = "error";
        hay_errores = true;
        //return false;
    }



    return !hay_errores;

}