//Usuarios Saludo
function Permisos (usuario){
    if (usuario === 'Juan'){
    return 'Hola Juan'
}
else if (usuario === 'Mario'){
    return 'Hola Mario'
}
else if(usuario === 'Carlos'){
    return 'Hola Carlos'
}
 else { return 'Usuario no registrado'
}
};
//Consola Permisos
console.log(Permisos('Juan'));
console.log(Permisos('Mario'));
console.log(Permisos('Carlos'));
//Contraseñas Usuarios
function Contraseñas (clave){
    if (clave === 1234){
        return 'Juan tu contraseña es muy fácil de adivinar'
    }
    else if (clave === 5678){
        return 'Mario tu contraseña es insegura'
    }
    else if (clave === 9876){
        return 'Mario tu contraseña es insegura'
    }
};
//Consola contraseñas
console.log(Contraseñas(1234));
console.log(Contraseñas(5678));
console.log(Contraseñas(9876));
//Funcion Ingresar
function Ingresar (usuario,clave){
    if (usuario === 'Juan' && clave === 1234){
        return 'Bienvenido Juan'
    }
    else if (usuario === 'Mario' && clave === 5678){
        return 'Bienvenido Mario'
    }
    else if (usuario === 'Carlos' && clave === 9876){
        return 'Bienvenido Carlos'
    }
};
//Consola Ingresar
console.log(Ingresar('Juan',1234));
console.log(Ingresar('Mario',5678));
console.log(Ingresar('Carlos',9876));