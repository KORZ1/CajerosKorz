//Acceso Juan
document.getElementById("loginButton").addEventListener("click", function() {
    // Obtener valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales 
    if (username === "Juan" && password === "1234") {
        // Redirigir al otro index si las credenciales son correctas
        window.location.href = "OPJuan.html";
    } else {
        alert("Tu usuario o contraseña son incorrectos.");
    }
});