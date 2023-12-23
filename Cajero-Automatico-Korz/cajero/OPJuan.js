//Boton Consultar Saldo
let saldo = 500
function consultarsaldo(){
    document.getElementById("saldo").textContent = "Tu saldo actual es: $" + saldo;
};
//Boton Depositar
function depositar() {
       let monto = prompt("ingresa un monto sin que rebase el límite de cuenta de: $990");
       monto = parseFloat(monto)
       if (saldo + monto < 10 ) {
        alert('ingresaste un monto muy bajo');
       } 
       else if (saldo + monto > 990) {
        alert('No puedes tener más de $990 en tu cuenta');
       }
       else if (saldo + monto >= 10 && saldo + monto <= 990) {
        alert(`ingresaste: $` + monto);
        saldo += monto
    consultarsaldo()
       }
        else (alert('Ingresa un valor en dicho rango'))
        
    }; 
//Boton Retirar
function retirar(){
    let retiro = prompt("retira un monto sin que rebase el límite de cuenta de: $10");
    retiro = parseFloat(retiro)
    if (saldo - retiro < 10 ) {
     alert('debes dejar al menos $10 en tu cuenta')
    } 
    else if (saldo - retiro > 990) {
     alert('No ingresaste un monto Válido')
    }
    else if (saldo - retiro >= 10 && saldo - retiro <= 990) {
     alert(`retiraste: $` + retiro);
     saldo -= retiro
    consultarsaldo()
    return;
    }
     else (alert('Ingresa un valor en dicho rango'))
     console.log(retiro);
 };

