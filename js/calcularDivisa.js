const tasasDeCambio = [
    {
        divisaOrigen: "dolar",
        tasas: [
            { divisaDestino: "euro", tasa: 0.84 },
            { divisaDestino: "libra", tasa: 0.72 },
            { divisaDestino: "ARS", tasa: 600 }
        ]
    }
];

function realizarConversion(divisaOrigen, divisaDestino, cantidad) {
    const divisaOrigenObj = tasasDeCambio.find(divisa => divisa.divisaOrigen === divisaOrigen);

    if (divisaOrigenObj) {
        const tasaObj = divisaOrigenObj.tasas.find(tasa => tasa.divisaDestino === divisaDestino);
        if (tasaObj) {
            const tasa = tasaObj.tasa;
            const resultado = cantidad * tasa;
            alert(`${cantidad} ${divisaOrigen} son ${resultado} ${divisaDestino}`);
        } else {
            alert("La divisa destino no es correcta");
        }
    } else {
        alert("La divisa origen no es correcta");
    }
}

function cotizadorDivisas() {
    let continuar = true;

    while (continuar) {
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
