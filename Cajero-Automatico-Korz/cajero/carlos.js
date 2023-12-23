//Acceso Carlos
document.getElementById("loginButton").addEventListener("click", function() {
    // Obtener valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales 
    if (username === "Carlos" && password === "9876") {
        // Redirigir al otro index si las credenciales son correctas
        window.location.href = "OPCarlos.html";
    } else {
        alert("Tu usuario o contraseña son incorrectos.");
    }
});