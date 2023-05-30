let tasas = [
  { moneda: 'USD', tasa: 1 },    // Dólar estadounidense
  { moneda: 'EUR', tasa: 0.82 }, // Euro
  { moneda: 'ARS', tasa: 471 }   // Peso Argentino
];

function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
  let cantidadConvertida = cantidad;
  
  let tasaOrigen = buscarTasa(monedaOrigen);
  let tasaDestino = buscarTasa(monedaDestino);
  

  if (tasaOrigen && tasaDestino) {
    cantidadConvertida /= tasaOrigen;
    cantidadConvertida *= tasaDestino;
  } else {
    return null; 
  }
  
  return cantidadConvertida.toFixed(2);
}

function buscarTasa(moneda) {
  for (let i = 0; i < tasas.length; i++) {
    if (tasas[i].moneda === moneda) {
      return tasas[i].tasa;
    }
  }
  return null; 
}

let cantidad = prompt('Introduce la cantidad a convertir:');
let monedaOrigen = prompt('Introduce la moneda de origen:');
let monedaDestino = prompt('Introduce la moneda de destino:');

let cantidadConvertida = convertirMoneda(cantidad, monedaOrigen, monedaDestino);
if (cantidadConvertida) {
  alert(`${cantidad} ${monedaOrigen} son ${cantidadConvertida} ${monedaDestino}`);
} else {
  alert('No se encontraron tasas de conversión para las monedas seleccionadas.');
}

  