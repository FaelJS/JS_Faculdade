function exe1(){
    
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    
    let subtracao = nro1 - nro2
    
    document.getElementById("subtracao").innerHTML = 
    `A subtração é ${subtracao}`
}
function exe2(){
    
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    let nro3 = document.getElementById("nro3").value
    
    let multiplicao = nro1 * nro2 * nro3
    
    document.getElementById("multiplicacao").innerHTML = 
    `A multiplicação é ${multiplicao}`
}
function exe3(){
    
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    
    let divisao = nro1 / nro2
    
    document.getElementById("divisao").innerHTML = 
    `A divisão é ${divisao}` 
}
function exe4(){
    
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    
    let peso1 = 2
    let peso2 = 3
    
    let mediaPonderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2)
    
    document.getElementById("mediaPonderada").innerHTML = 
    `A média ponderada das notas é ${mediaPonderada}`
}
function exe5(){
    
    let preco = document.getElementById("preco").value
    
    let novoPreco = preco * 0.9
    
    document.getElementById("novoPreco").innerHTML = 
    `O preço com 10% de desconto é R$ ${novoPreco.toFixed(2)}`
}
function exe6(){
   
    let salarioFixo = parseFloat(document.getElementById("salarioFixo").value)
    let vendas = parseFloat(document.getElementById("vendas").value)
    
    let comissao = vendas * 0.04
    let salarioFinal = salarioFixo + comissao
    
    document.getElementById("comissao").innerHTML = `Comissão R$ ${comissao.toFixed(2)}`
    document.getElementById("salarioFinal").innerHTML = `Salário final R$ ${salarioFinal.toFixed(2)}`    
}
function exe7(){
    
    let pesoAtual = parseFloat(document.getElementById("pesoAtual").value)
    
    let opcoesRadio = document.getElementsByName("grupoOpcoes");
    
    let opcaoSelecionada
    for (let i = 0; i < opcoesRadio.length; i++) {
        if (opcoesRadio[i].checked) {
            opcaoSelecionada = opcoesRadio[i].value
            break
        }
    }
    
    let novoPeso
    if (opcaoSelecionada === "engordar") {
        novoPeso = pesoAtual * 1.15
    } 
    else if (opcaoSelecionada === "emagrecer") {
        novoPeso = pesoAtual * 0.80
    }
    
     document.getElementById("resultado").textContent = `Novo peso: ${novoPeso.toFixed(2)}`
}
function exe8(){
    
    let pesoKg = parseFloat(document.getElementById("pesoKg").value)
    
    let pesoGramas = pesoKg * 1000
    
    document.getElementById("pesoGramas").innerHTML = `O peso em gramas é ${pesoGramas.toFixed(2)}`
}
function exe9(){
   
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let altura = Number(document.getElementById("altura").value)
    
    let area = ((baseMenor + baseMaior) * altura) / 2
    
    document.getElementById("area").innerHTML = `A área é ${area}`
}

function exe10() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);

    let area = lado1 * lado2;

    document.getElementById(
      "areaQuadrado"
    ).innerHTML = `A área do quadrado é ${area.toFixed(2)}`;
  }

function exe20(){
    
    let cAdjacente = Number(document.getElementById("cAdjacente").value)
    let angulo = Number(document.getElementById("angulo").value)

    
    let radiano = angulo * (Math.PI / 180)
    let hipotenusa = cAdjacente / Math.cos(radiano)

    
    document.getElementById("hipotenusa").innerHTML = `A medida da escada é ${hipotenusa}`


}