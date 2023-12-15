
var cuentas = [
    { nombre: "Mali", saldo: 200, numeroCuenta: 135790 },
    { nombre: "Gera", saldo: 290, numeroCuenta: 246801 },
    { nombre: "Maui", saldo: 67, numeroCuenta: 103857 }
  ];




document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get("cuenta");

    if (nombreUsuario) {
        const bienvenidaElement = document.getElementById("welcom");
        bienvenidaElement.textContent = `Bienvenido ${nombreUsuario}`;
    }
    
    var btnDeposito = document.getElementById("btnDeposito");

    
    btnDeposito.addEventListener("click", function() {
        window.location.href = "/5_Deposito_cuenta.html";
    });
});




  document.addEventListener("DOMContentLoaded", function() {
    var btnIngresar = document.getElementById("btnIngresar");

    btnIngresar.addEventListener("click", function() {
        var numeroCuenta = document.getElementById("User").value;
        var contraseña = document.getElementById("Ctr").value;

        if (autenticarUsuario(numeroCuenta, contraseña)) {
            var nombreUsuario = obtenerNombreDeUsuario(numeroCuenta);

            window.location.href = `/3_Opciones.html?cuenta=${nombreUsuario}`;
        } else {
            alert("Usuario y/o Contraseña incorrecta");

            document.getElementById("User").value = "";
            document.getElementById("Ctr").value = "";
        }
    });

    function obtenerNombreDeUsuario(numeroCuenta) {
        for (var i = 0; i < cuentas.length; i++) {
            if (cuentas[i].numeroCuenta == numeroCuenta) {
                return cuentas[i].nombre;
            }
        }
        return null; 
    }
});

    function autenticarUsuario(numeroCuenta, contraseña) {
        

        var cuentas = [
            { nombre: "Mali", saldo: 200, numeroCuenta: 135790, contraseña: "contraseña1" },
            { nombre: "Gera", saldo: 290, numeroCuenta: 246801, contraseña: "contraseña2" },
            { nombre: "Maui", saldo: 67, numeroCuenta: 103857, contraseña: "contraseña3" }
        ];

        for (var i = 0; i < cuentas.length; i++) {
            if (cuentas[i].numeroCuenta == numeroCuenta && cuentas[i].contraseña == contraseña) {
                return true; 
            }
        }

        return false; 
    }


document.addEventListener("DOMContentLoaded", function() {
    var btnIngresar = document.getElementById("btnIngresar");

    btnIngresar.addEventListener("click", function() {
    });
});


function limpiarFormulario() {
    document.getElementById("User").value = "";
    document.getElementById("Ctr").value = "";
}

document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get("cuenta");

    if (nombreUsuario) {
        const bienvenidaElement = document.getElementById("welcom");
        bienvenidaElement.textContent = `Bienvenido ${nombreUsuario}`;
    }
    
    var botonsalir2 = document.getElementById("botonsalir2");

    
    botonsalir2.addEventListener("click", function() {
        window.location.href = "/10_Gracias.html";
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get("cuenta");

    if (nombreUsuario) {
        const bienvenidaElement = document.getElementById("welcom");
        bienvenidaElement.textContent = `Bienvenido ${nombreUsuario}`;
        sessionStorage.setItem("nombreUsuario", nombreUsuario);
    }

    var botonretiro3 = document.getElementById("botonretiro3");

    botonretiro3.addEventListener("click", function() {
        window.location.href = "/8_Retiro.html?cuenta=" + nombreUsuario;
    });

    

});

document.addEventListener("DOMContentLoaded", function() {

    var botonsalir81 = document.getElementById("botonsalir81");

    botonsalir81.addEventListener("click", function() {
        console.log("Haciendo clic en el botón Salir");
        window.location.href = "/10_Gracias.html";
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const nombreUsuario = sessionStorage.getItem("nombreUsuario");

    if (nombreUsuario) {
        const contenidoUsuarioElement = document.getElementById("contenidodep").querySelector("div");
        contenidoUsuarioElement.textContent = nombreUsuario;
    }
});








function limpiarFormulario() {
    document.getElementById("User1").value = "";
}


document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get("cuenta");

    if (nombreUsuario) {
        const bienvenidaElement = document.getElementById("welcom");
        bienvenidaElement.textContent = `Bienvenido ${nombreUsuario}`;
    }
    
    var botonsalir8 = document.getElementById("botonsalir8");

    
    botonsalir3.addEventListener("click", function() {
        window.location.href = "/10_Gracias.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get("cuenta");

    

    if (nombreUsuario) {
        const bienvenidaElement = document.getElementById("welcom");
        bienvenidaElement.textContent = `${nombreUsuario}`;

        const cuentaEncontrada = cuentas.find(cuenta => cuenta.nombre === nombreUsuario);

        if (cuentaEncontrada) {
            const cuentaElement = document.getElementById("Cta");
            const saldoElement = document.getElementById("Sld");

            const saldoFormateado = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cuentaEncontrada.saldo);
            saldoElement.textContent = `Su saldo actual: ${saldoFormateado}`;
        }
    }

    
    var botonconsulta3 = document.getElementById("botonconsulta3");

    botonconsulta3.addEventListener("click", function() {
        window.location.href = `/4_Consulta_Saldo.html?cuenta=${nombreUsuario}`;
    });


});

var botonsalir4 = document.getElementById("botonsalir4");

    
botonsalir4.addEventListener("click", function() {
    window.location.href = "/10_Gracias.html";
});

var noimprimir = document.getElementById("noimprimir");

    
noimprimir.addEventListener("click", function() {
    window.location.href = "/10_Gracias.html";
});



