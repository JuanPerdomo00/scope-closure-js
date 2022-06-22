function saludar (){
  let nombre = "jakepy";

  function mostrarNombre() {
    console.log(`Hola ${nombre}`);
  }
  return mostrarNombre;
}


saludar()()
