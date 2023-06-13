let tasasJSON = localStorage.getItem('tasas');
let tasas = tasasJSON ? JSON.parse(tasasJSON) : [
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

let cantidadElement = document.querySelector('#cantidad');
let monedaOrigenElement = document.querySelector('#monedaOrigen');
let monedaDestinoElement = document.querySelector('#monedaDestino');
let resultadoElement = document.querySelector('#resultado');
let convertirButton = document.querySelector('#convertirButton');

convertirButton.addEventListener('click', function() {
  let cantidad = cantidadElement.value;
  let monedaOrigen = monedaOrigenElement.value;
  let monedaDestino = monedaDestinoElement.value;

  let cantidadConvertida = convertirMoneda(cantidad, monedaOrigen, monedaDestino);

  if (cantidadConvertida) {
    resultadoElement.innerHTML = `${cantidad} ${monedaOrigen} son ${cantidadConvertida} ${monedaDestino}`;
  } else {
    resultadoElement.innerHTML = 'No se encontraron tasas de conversión para las monedas seleccionadas.';
  }
});


localStorage.setItem('tasas', JSON.stringify(tasas));