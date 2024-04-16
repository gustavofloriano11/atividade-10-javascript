function picoleteria(){
    let i = 0;
    let opcao = "";
    var picole = [['Chocolate', 1.50], ['Morango', 2.50], ['Creme', 2.50], ['Manga', 3.20], ['Melancia', 3.40], ['Vanilla Ice', 3.00], ['Céu Azul', 3.60], ['Brownie', 4.00], ['Hawaiano', 5.00]];

    for(i = 0; i < picole.length; i++){
        console.log(picole[i][0] + " - " + picole[i][1]);
    }
    opcao = window.prompt("Qual opção você quer escolher?")

    for (i = 0; i < picole.length; i++){
        if (opcao === picole[i][0]){
            console.log(`O picolé ${picole[i][0]}, custa R$:${picole[i][1]}!`)
        }
    }
}