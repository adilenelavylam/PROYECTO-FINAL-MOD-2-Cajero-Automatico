var cuentas = [
    { nombre: "Mali", saldo: 200, numeroCuenta: 135790, contraseña: "contraseña1" },
    { nombre: "Gera", saldo: 290, numeroCuenta: 246801, contraseña: "contraseña2" },
    { nombre: "Maui", saldo: 67, numeroCuenta: 103857, contraseña: "contraseña3" }
];




//1_PantallaInicial

document.addEventListener("DOMContentLoaded", function () {
    var imgLogo = document.getElementById("imglogo");

    imgLogo.addEventListener("click", function () {
        window.location.href = "/2_UsuarioyContrasena.html";
    });

    var btnDeposito = document.getElementById("btnDeposito");

    btnDeposito.addEventListener("click", function () {
        window.location.href = "/5_Deposito_cuenta.html";
    });
});





//2_UsuarioyContraseña

document.addEventListener("DOMContentLoaded", function () {
    var btnIngresar = document.getElementById("btnIngresar");
    var btnCorregir = document.querySelector(".botonopciones");
    var btnSalir = document.getElementById("botonsalir2");

    btnIngresar.addEventListener("click", function () {
        var usuarioInput = document.getElementById("User").value;
        var contrasenaInput = document.getElementById("Ctr").value;

        var usuarioValido = false;
        var nombreUsuario = "";

        cuentas.forEach(function (cuenta) {
            if (cuenta.numeroCuenta == usuarioInput && cuenta.contraseña == contrasenaInput) {
                usuarioValido = true;
                nombreUsuario = cuenta.nombre;
            }
        });

        if (usuarioValido) {
            window.location.href = "/3_Opciones.html?usuario=" + encodeURIComponent(nombreUsuario);
        } else {
            alert("Usuario y/o Contraseña incorrectos, favor de intentar nuevamente");
        }
    });

    btnCorregir.addEventListener("click", function () {
        document.getElementById("User").value = "";
        document.getElementById("Ctr").value = "";
    });

    btnSalir.addEventListener("click", function () {
        window.location.href = "/10_Gracias.html";
    });

    

});





botonsalir81.addEventListener("click", function () {
    window.location.href = "/10_Gracias.html";
});







function obtenerNumeroCuenta(usuario) {
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuario) {
            return cuentas[i];
        }
    }
    return null; 
}



//2_UsuarioyContraseña

document.addEventListener("DOMContentLoaded", function () {
    var btnIngresar = document.getElementById("btnIngresar");
    var btnCorregir = document.querySelector(".botonopciones");
    var btnSalir = document.getElementById("botonsalir2");

    btnIngresar.addEventListener("click", function () {
        var usuarioInput = document.getElementById("User").value;
        var contrasenaInput = document.getElementById("Ctr").value;

        var usuarioValido = false;
        var nombreUsuario = "";
        var numeroCuenta = 0; 

        cuentas.forEach(function (cuenta) {
            if (cuenta.numeroCuenta == usuarioInput && cuenta.contraseña == contrasenaInput) {
                usuarioValido = true;
                nombreUsuario = cuenta.nombre;
                numeroCuenta = cuenta.numeroCuenta; 
            }
        });

        if (usuarioValido) {
            window.location.href = "/9_Confirma_Retiro.html?usuario=" + encodeURIComponent(nombreUsuario) + "&cuenta=" + numeroCuenta;
        } else {
            alert("Usuario y/o Contraseña incorrectos, favor de intentar nuevamente");
        }
    });

    
});





document.addEventListener("DOMContentLoaded", function() {
    var cuentas = [
        { nombre: "Mali", saldo: 200, numeroCuenta: 135790, contraseña: "contraseña1" },
        { nombre: "Gera", saldo: 290, numeroCuenta: 246801, contraseña: "contraseña2" },
        { nombre: "Maui", saldo: 67, numeroCuenta: 103857, contraseña: "contraseña3" }
    ];

    var userInputElement = document.getElementById("User");
    var continuarBtn = document.getElementById("continuarBtn");

    continuarBtn.addEventListener("click", function() {
        var numeroCuentaIngresado = parseInt(userInputElement.value);

        var cuentaExistente = cuentas.find(function(cuenta) {
            return cuenta.numeroCuenta === numeroCuentaIngresado;
        });

        if (cuentaExistente) {
            window.location.href = "/6_tu_pagina_destino.html";
        } else {
            alert("Número de cuenta no válido. Por favor, inténtelo de nuevo.");
        }
    });
});

