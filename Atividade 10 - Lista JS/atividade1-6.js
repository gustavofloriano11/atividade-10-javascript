function calculadora(){
    soma = 0;
    continuar = true;

    while(continuar) {
        let numero = Number(window.prompt("Digite um número ou 'Cancelar' para encerrar o cálculo:"));
        
        if (!isNaN(numero)){
            soma += numero;
        }
        else {
            window.alert("Digite um número válido")
        }

        continuar = window.confirm("Continuar?")
    }

    window.alert("A soma é: " + soma)
}

var segundos = 11;

function contagem(){
    let tempo = document.getElementById('regressiva')
    if (segundos > 0) {
        tempo.innerHTML = (segundos);
        segundos--;
        setTimeout(contagem, 1000);
        tempo.innerHTML = (segundos);
        if (segundos == 5){
            tempo.innerHTML = (segundos + '... Preparando lançamento ...')
        } 
    } else {
        tempo.innerText = 'Hasta la vista, baby.'
    }
}



function saldo(){
    let i = 1;
    var ganho = 0;
    var gasto = 0;
    var ganho_total = 0;
    var gasto_total = 0;
    var lucro = 0;
    let ganho_html = document.getElementById('ganho');
    let gasto_html = document.getElementById('gasto');
    let lucro_html = document.getElementById('media');
    for (; i < 13; i++){
        window.alert(`Digite os ganhos e gastos do mês ${i}`);
        ganho = Number(window.prompt(`Ganhos do mês ${i}:`));
        gasto = Number(window.prompt(`Gastos do mês ${i}:`));
        ganho_total = ganho_total + ganho;
        gasto_total = gasto_total + gasto;
        gasto_html.innerHTML = `Os gastos anuais, foram: ${gasto_total}`;
        ganho_html.innerHTML = `Os ganhos anuais, foram: ${ganho_total}`;
        lucro = (ganho_total-gasto_total);
        lucro_html.innerHTML = `O lucro da empresa é, de: ${lucro}`;
    }
}

function decrescente(){
    let i = 1;
    var numero_decrescente =  [];
    for(; i < 5; i++){
        numero_decrescente[j] = window.prompt(`Digite o ${i}º número:`)
    }
    numero_decrescente.sort(
        function(a, b){
            return b-a;
        }
    )
    window.alert(numero_decrescente)
}

function par_impar(){
    let parImpar = window.prompt("Digite um número, dependendo desse número, iremos transformar em PAR ou IMPAR!")
    if (parImpar % 2 == 0){
        window.alert(`O número ${parImpar} era PAR, agora é: IMPAR!`)
    }
    else {
        window.alert(`O número ${parImpar} era IMPAR, agora é: PAR!`)
    }
}

function vogal(){
    let letra = window.prompt("Digite uma letra, vamos verificar se é VOGAL ou CONSOANTE:")
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
        window.alert("A sua letra é uma: VOGAL")
    }
    else {
        window.alert("A sua letra é uma: CONSOANTE")
    }
}