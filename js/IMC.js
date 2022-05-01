//Selecionando elementos do HTML
const formImc = document.querySelector('.form_imc')
const btCalcImc = formImc.querySelector('.bt_calcular_imc')
const btLimparImc =formImc.querySelector('.bt_limpar_imc')
var resulTxt = document.querySelector('.txt_resultado_imc')

btCalcImc.addEventListener('click',function (event) {
   event.preventDefault()
   
   //selecionando os valores do input
   var alturaValor = formImc.querySelector('#altura_campo').value
   var pesoValor = formImc.querySelector('#peso_campo').value
   
   //se o valor da altura for igual o programa ira adicionar um "." apos o primeiro numero 
   if (alturaValor.length == 3) {
      alturaFormatado = alturaValor.replace(/(\d{1})/, "$1.")
      if (validacaoCampos(alturaValor, pesoValor) == true && validacaoPeso(pesoValor)) {
         calculaIMC(pesoValor, alturaFormatado)
         alteraClasseDeTabelaImc()

      }
      
   }else if(validacaoCampos(alturaValor, pesoValor) == true && validacaoPeso(pesoValor)) {
      imc = calculaIMC(pesoValor, alturaValor)
      console.log(imc);
      alteraClasseDeTabelaImc()
      
   }
   
   
})


//ao clilar no botao limpar ira remover o conteudo do resultado
btLimparImc.addEventListener('click', function () {
   resulTxt.textContent = '0.00'
   const tabelaImc = document.querySelectorAll('.linha_tabela_imc')
   
   for (let i = 0; i < tabelaImc.length; i++) {
      tabelaImc[i].classList.remove('aaaa')
      
   }
})


function validacaoCampos(alturaValor, pesoValor) {
   if (pesoValor == "" || alturaValor == "") {
      alert('ERRO: Campos invalidos')
      return false
   }else
   return true
}

function calculaIMC(pesoValor, alturaValor) {
   imc = pesoValor / (alturaValor * alturaValor) 
   
   resulTxt.textContent = imc.toFixed(2)
   
   return imc
}


function alteraClasseDeTabelaImc() {
   const tabelaImc = document.querySelectorAll('.linha_tabela_imc')
   
   
   if (imc <= 18.5) {
      tabelaImc[0].classList.add('aaaa')
      
   }else if (imc > 18.5 && imc < 24.9) {
      tabelaImc[1].classList.add('aaaa')
      
   }
   else if (imc > 25 && imc < 29.9) {
      tabelaImc[2].classList.add('aaaa')
      
   }
   else if (imc > 29.9 && imc < 39.9) {
      tabelaImc[3].classList.add('aaaa')
      
   }else{
      tabelaImc[4].classList.add('aaaa')
   }
   
}





