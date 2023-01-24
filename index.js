var prompt = require('prompt');
prompt.start();


function Questão1() {

console.log('Informe os dados da matricula:\n')
prompt.get(['nomeCompleto', 'idade' , 'numeroDaMatricula'], function (err, result) {

  console.log('Command-line input received:');
  console.log('  Nome Completo: ' + result.nomeCompleto);
  console.log('  Idade: ' + result.idade);
  console.log('  Numero Da Matricula: ' + result.numeroDaMatricula);
})
}
//Questão1()

function Questão2() {

console.log('Informe os dados dos jogadores!')
prompt.get(['nomeUm', 'clubeUm','nomeDois', 'clubeDois'], function (err, result) {
    console.log('Command-line input received:');
    console.log(`O jogador ${result.nomeUm} joga no ${result.clubeUm}`);
    console.log(`O jagador ${result.nomeDois} joga no ${result.clubeDois}`);
})
}
//Questão2()


function Questão3() {
console.log('Dirite 3 numeros:')
prompt.get(['primeiro', 'segundo', 'terceiro'], function (err, result){
  var soma = Number(result.primeiro) + Number(result.segundo) + Number(result.terceiro)
  var subtração = Number(result.primeiro) - Number(result.segundo) - Number(result.terceiro)
  var multiplicação = Number(result.primeiro) * Number(result.segundo) * Number(result.terceiro)
  console.log(`A soma de ${result.primeiro} + ${result.segundo} + ${result.terceiro} é igual a ${soma}`)
  console.log(`A subtração de ${result.primeiro} - ${result.segundo} - ${result.terceiro} é igual a ${subtração}`)
  console.log(`A multiplicão de ${result.primeiro} * ${result.segundo} * ${result.terceiro} é igual a ${multiplicação}`)
})
}
//Questão3()


function Questão4() {
console.log('Digite 2 numeros:')
prompt.get(['primeiro', 'segundo'], function (err, result){
  var soma = Number(result.primeiro) + Number(result.segundo)
  var media = soma / 2
  console.log(`A media é ${media}`)
})
}
//Questão4()


function Questão5() {
console.log('Incremento')
prompt.get(['numero'], function (err, result){
  Number(result.numero ++ );
  console.log(result.numero)
})
}
//Questão5()


function Questão6() {
console.log('Incremento')
prompt.get(['numero'], function (err, result){
  Number(result.numero -- );
  console.log(result.numero)
})
}
//Questão6()


function Questão7 () {
console.log('Convertendo horas em minutos e segundos')
prompt.get(['hora'], function(err, result){
  var minuto = Number(result.hora) * 60
  var segundo = minuto * 60
  console.log(`${result.hora} horas é igual a ${minuto} minutos!`)
  console.log(`${minuto} minutos é igual a ${segundo} segundos!`)
})
}
//Questão7()


function Questão8() {
console.log('Digite a velocidade da aeronave')
prompt.get(['nave'], function( err, result){
  var hora = 384400 / Number(result.nave)
  console.log(`A aeronave vai chegar em seu destino em ${hora} horas`)
})
}
//Questão8()


function Questão9() {
console.log('Insira 2 numeros')
prompt.get(['primeiro', 'segundo'], function(err, result){
  if (result.primeiro == result.segundo) {
    console.log(`${result.primeiro} é igral a ${result.segundo}`)
  }else {
    console.log(`${result.primeiro} não é igral a ${result.segundo}`)
  }
})
}
//Questão9()


function Questão10() {
console.log('Insira um nome!')
prompt.get(['seuNome'], function(err, result){
  var nome = 'Vinicius'
  if (result.seuNome != nome) {
    console.log('Nome diferente')
  } else (console.log('Nome igual'))
})
}
//Questão10()



function Questão11() {
console.log('Insira a velocidade de Senna e Massa!')
prompt.get(['senna', 'massa'], function(err, result){
  if (result.senna > result.massa) {
    console.log(`Ayrton Senna teve velocidade igual a ${result.senna}km/hora`)
  } else if (result.senna == result.massa) {
    console.log('Ayrton Senna e Felipe Massa tiveram a mesma velocidade')
  } else  {console.log(`Felipe Massa teve velocidade igual a ${result.massa}km/hora`)} 
})
}
//Questão11()


function Questão12() {
console.log('Coloque a nota de Gustavo e de Paulo')
prompt.get(['gustavo', 'paulo'], function(err, result){
  if (result.gustavo > result.paulo) {
    console.log(`Paulo teve a nota mais baixa ${result.paulo}`)
  } if  (result.gustavo == result.paulo) {
    console.log('Gustavo e Paulo tiraram a mesma nota')
  } else if  (result.gustavo < result.paulo) {
    console.log(`Gustavo teve a nota mais baixa ${result.gustavo}`)
  }
})
}
//Questão12()

function Questão13() {
  console.log('Indique sua idade e o seu bilhete:')
  prompt.get(['idade', 'bilhete'], function(err, result){
    if (result.idade > 60 || result.bilhete === 'premium') {
      console.log('O senhor é preferencial, pode passar a frente!')
    } else  {console.log('Pegue a fila normal!')}
  })
}
//Questão13()

function Questão14() {
  console.log('Insira a idade e a serie da criança!')
  prompt.get(['idade', 'serie'], function(err, result){
    if (result.idade < 10 && result.serie == 5) {
      console.log('A criança pode participar da natação!')
    } else {console.log('A criança não pode participar da natação!')}
  })
}
//Questão14()

function Questão15() {
  console.log('Insira o nome, a pontuação, o tempo de carreira e o numero de assistencias!')
  prompt.get(['nome', 'pontuaçao', 'carreira', 'assistencia'], function(err, result){
    if (result.pontuaçao >= 50 && result.carreira > 3 && result.assistencia >= 30) {
      console.log(`O jagador ${result.nome} é candidato a melhor jogador do mundo!`)
    } else {console.log(`O jagador ${result.nome} não se qualifica!`)}
  })
}
//Questão15()

function Questão16() {
  console.log('Insira um numero')
  prompt.get(['numero'], function(err, result){
    if (result.numero % 2 === 1) {
      console.log(`O numero ${result.numero} é impar!`)
    } else {console.log('O numero ' + result.numero + ' é par!')}
  })
}
//Questão16()

function Questão17() {
  console.log('Insira o nome do time e a sua pontuação!')
  prompt.get(['nome', 'pontuaçao'], function(err, result){
    if (result.pontuaçao > 75) {
      console.log(`O ${result.nome} tem excelentes chances de classificação!`)
    } else if (result.pontuaçao >= 60 && result.pontuaçao <= 75) {
      console.log(`O ${result.nome} tem boas chances de classificação!`)
    } else {console.log(`O ${result.nome} tem baixas de classificação!`)}
  })
}
//Questão17()

function Questão18() {
  console.log('Insira a idade!')
  prompt.get(['idade'], function(err, result){
    var idade = result
    switch (idade) {
      case idade > 70:
        console.log('Idoso');
        break;
      case idade > 30 && idade <= 70:
        console.log('Adulto');
        break;
      case idade > 15 && idade <= 30:
        console.log('Jovem');
        break;
      case idade <= 15:
        console.log('Adolecente ou criança');
        break;
      default:
        console.log('Ainda não nasceu');
    } 
  })
}
//Questão18()

function Questão19() {
  console.log('Insira a velocidade do carro!')
  prompt.get(['velocidade'], function(err, result){
    let carro = (result.velocidade > 100) ? "Carro em alta velocidade" : "Velocidade normal";
    console.log(carro)
  })
}
//Questão19()

function Questão20() {
  function questao() {
    console.log('Insira os numeros!')
    prompt.get(['primeiro', 'segundo', 'terceiro', 'quarto'], function(err, result){
      var soma = Number(result.primeiro) + Number(result.segundo) + Number(result.terceiro) + Number(result.quarto)
      var media = soma / 4
      console.log(`A media é ${media}`)
    })
  }
  questao()
}
//Questão20()

function Questão21() {
  function sistema() {
    console.log('Insira as horas')
    prompt.get(['hora'], function(err, result){
      var min = Number(result.hora) * 60
      var seg = Number(min) * 60
      console.log(`${result.hora} hora é igual a ${min} minutos que é igual a ${seg} segundos!`)
    })
  }
  sistema()
}
//Questão21()

function Questão22() {
  function carro() {
    console.log('Insira a marca do carro!')
    prompt.get(['marca'], function(err, result){
      if (result.marca === 'Volkswagen' || result.marca === 'Audio' || result.marca === 'BMW' || result.marca === 'Mercedes') {
        console.log('Seu carro é de origem alemã')
      } else {console.log('Seu carro não é de origem alemã')}
    })
  }
  carro()
}
//Questão22()

function Questão23() {
  function conversao() {
    console.log('Insira o dinheiro a ser convertido!')
    prompt.get(['real'], function(err, result){
      var dolar = Number(result.real) / 5.21 
      var euro = Number(result.real) / 5.66 
      var libra = Number(result.real) / 5.46 
      console.log(`${result.real} reais é igual a ${dolar.toFixed(2)} dolares que é igual a ${euro.toFixed(2)} euros que é igual a ${libra.toFixed(2)} libras!`)
    })
  }
  conversao()
}
//Questão23()

