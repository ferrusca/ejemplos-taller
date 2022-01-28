function hacerOperacion() {
  let primerNumero = Number(document.getElementById('numero1').value)
  let segundoNumero = Number(document.getElementById('numero2').value)
  let listaOp = document.getElementById('lista')
  let tipoOperacion = listaOp.options[listaOp.selectedIndex].value
  let resultado = 0

  if (tipoOperacion === 'SUM') {
    resultado = primerNumero + segundoNumero
  } else {
  }

}

function calculaCalificacion() {
    /////////////////////
    let edad = 2

    if (edad === 18 || edad === 19) {
      console.log("Eres mayor de edad")
    } else {
      console.log("Eres muy pequeno")
    }
  
    if (edad < 3) {
      console.log("Eres un bebe")
    }
}