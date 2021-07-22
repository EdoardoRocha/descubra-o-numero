var erros = []

var sorteado = Math.floor(Math.random()* 100) + 1


const CHANCES = 6

var btreload = document.getElementById('btjogar')


function apostarNumero() {
    var inNUmero = document.getElementById('innumero')
    var numero = Number(inNUmero.value)


    if(numero < 0 || numero > 100 || isNaN(numero) || numero == 0) {
        alert('Porfavor digite um numero valido..')
        innumero.value = ""
        innumero.focus()
        return
    }


    var outErros = document.getElementById('outErros')
    var outChances = document.getElementById('outChances')
    var outDica = document.getElementById('outDica')



    if(numero == sorteado) {
        alert('Parabens voce acertou!!!')
        btaposta.disable = true
        btreload.className = "exibe"
        outDica.textContent = ` Parabens!! Número sorteado: ${numero}`
    } else if(erros.indexOf(numero) >=0){
        alert('Você já apostou o numero:' + numero + ". Tente outro...")
    } else {
        erros.push(numero)
        var numErros = erros.length
    


  var numChances = CHANCES - numErros

  outErros.textContent = numErros + "(" + erros.join(',') + ")"
  outChances.textContent = numChances

  if(numChances == 0) {
      alert('Suas chances acabaram...')
      btaposta.disable = true
      btreload.className = "exibe"
      outDica.textContent = "Game over!! Numero sorteado: " +  sorteado
  } else {
      var dica = numero < sorteado ? "Maior" : "Menor";
      outDica.textContent = `Dica tente um  numero ${dica}  Que  ${numero}`
  }

    }
    innumero.value = ""
    innumero.focus()

}
var btsorteado = document.getElementById('btaposta')
btsorteado.addEventListener('click', apostarNumero)

function jogarDenovo() {
    location.reload()
}
btreload.addEventListener('click', jogarDenovo)