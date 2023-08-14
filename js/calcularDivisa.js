const tasasDeCambio = {
    dolar: {
        euro: 0.84,
        libra: 0.72,
        ARS: 600
    }
}

function realizarConversion(divisaOrigen, divisaDestino, cantidad){
    if(tasasDeCambio[divisaOrigen] && tasasDeCambio[divisaOrigen][divisaDestino]){
        const tasa = tasasDeCambio[divisaOrigen][divisaDestino];
        const resultado = cantidad * tasa;
        alert(`${cantidad} ${divisaOrigen} son ${resultado} ${divisaDestino}`);
    } else{
        alert("La divisa origen o destino no es correcta");
    }
}

function cotizadorDivisas(){
    let continuar = true;

    while(continuar){
    const divisaOrigen = prompt("Introduce la divisa que quieres convertir: ");
    if (!divisaOrigen) {
        alert("Debes ingresar una divisa.");
        continue;
    }

    const divisaDestino = prompt("Introduce la divisa a la que quieres convertir: ");
    if (!divisaDestino) {
        alert("Debes ingresar una divisa.");
        continue;
    }

    const cantidad = parseFloat(prompt("Introduce la cantidad que quieres convertir: "));
    if (isNaN(cantidad)) {
        alert("Debes ingresar un valor numérico.");
        continue;
    }

    realizarConversion(divisaOrigen, divisaDestino, cantidad);

    const respuesta = prompt("Quieres realizar otra conversión? (Si/No)");
    continuar = respuesta === "si";
    }
    alert("Gracias por usar nuestro conversor de divisas");
}

cotizadorDivisas();
