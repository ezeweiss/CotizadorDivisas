const tasasDeCambio = {
    dolar: {
        euro: 0.84,
        libra: 0.72,
        ARS: 200
    }
}

let continuar = true;

while(continuar){
const divisaOrigen = prompt("Introduce la divisa que quieres convertir: ");
const divisaDestino = prompt("Introduce la divisa a la que quieres convertir: ");

const cantidad = parseFloat(prompt("Introduce la cantidad que quieres convertir: "));

if(tasasDeCambio[divisaOrigen] && tasasDeCambio[divisaOrigen][divisaDestino]){
    const tasa = tasasDeCambio[divisaOrigen][divisaDestino];
    const resultado = cantidad * tasa;
    alert(`${cantidad} ${divisaOrigen} son ${resultado} ${divisaDestino}`);
} else{
    alert("La divisa origen o destino no es correcta");
}

continuar = confirm("¿Quieres hacer otra conversión?");
}
