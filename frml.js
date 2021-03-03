(function(){

    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.usuario.value == 0) {
            alert("Coloca tu usuario");  
            e.preventDefault();              
        }
    };

    var validarContraseña = function(e){
        if (formulario.contraseña.value == 0) {
            alert("Coloca tu contraseña")
            e.preventDefault();
        }
    };


    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarCheckbox(e);
    };

    formulario.addEventListener("submit", validar)
}())
