function voltar(){
    window.location.href = "index.html"
}

function calculaMedia(){
    // let numero = Number(prompt("Digite um número"));
    // let sequencia = 0;
    // for(let sequencia = 0; sequencia <= numero; sequencia ++){
    //     alert(sequencia);
        
    // }
    let qtdTotal = Number(prompt("Digite a quantidade de atividades que deseja cadastrar"));
    let map = Number(prompt("Digite a média necessária para aprovação"));
    let media = 0;
    let totalPeso = 0;
    let qtdCad = 0;
    for(qtdCad <= qtdTotal){
        let atv = Number(prompt("Digite a nota da atividade que deseja cadastrar"));
        let peso = Number(prompt("Digite o peso da atividade que deseja cadastrar"));
        totalPeso = totalPeso + peso;
        media = media + (atv * peso);
        qtdCad ++;
    }
    media = media / totalPeso
    let mensagem = media + ", portanto está reprovado!"
    if (media >= map){
        mensagem = media + ", portanto está aprovado"
    }
    else if(media += map){
    mensagem = media + ", portanto está aprovado por conselho de classe"
    alert(mensagem)
    }
}