//Acceso Mario
document.getElementById("loginButton").addEventListener("click", function() {
    // Obtener valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales 
    if (username === "Mario" && password === "5678") {
        // Redirigir al otro index si las credenciales son correctas
        window.location.href = "OPMario.html";
    } else {
        alert("Tu usuario o contraseña son incorrectos.");
    }
});