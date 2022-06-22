//! Fail
// function moneyBox(money) {
//   let guardarMoneda = 0;
//   guardarMoneda += money;
//   console.log(`mobedas: $${guardarMoneda}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let guardarMoneda = 0;
  function contarMonedas(moneda) {
    guardarMoneda += moneda;
    console.log(`monedas: $${guardarMoneda}`);
  }
  return contarMonedas;
}

let cochinillo = moneyBox();
cochinillo(10);
cochinillo(5);
cochinillo(10);
cochinillo(5);
