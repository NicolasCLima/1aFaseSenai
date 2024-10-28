let numeros = []
let index1 = 0
let index2 = 0
let pai = []
let mae = []
let filho = []

function executar83(){
    // alert (funcionando)
    for(let i=0; i<25; i++){
    let numero = Math.ceil(Math.random()*6)
    numeros.push(numero)
}
console.log(numeros);
document.getElementById('resultado').innerHTML = "Array gerado com sucesso"
}

function executar83b(){
    do{
        index1 = Number(prompt("Digite um número entre 0 a 24:"))
    }while(index1 < 0 || index1 > 24)
    do{
        index2 = Number(prompt("Digite um número entre 0 a 24:"))
    }while(index1 < 0 || index1 > 24)
    
    soma = numeros[index1] + numeros[index2]
    
}

function mostrarArray(){
 //   document.getElementById('resultado').innerHTML = numeros
    document.getElementById('resultado').innerHTML = " "
    for(let i=0; i<numeros.length; i++){
    document.getElementById('resultado').innerHTML += "Dado: " + numeros[i] + "<br>"
}
}

function procurarNumero(){
    // let procurar = prompt("Digite um número pra procurar na array")
    // for(let i = 0; i<numeros.length; i++){
    //     if(numeros[i] = procurar){
    //         alert("Este número está no array")
    //     }
    //     else(){
    //         alert("Não está no array")
    //     }
    // }

    let valor = Number(prompt("Digite o valor para pesquisar"))
    if(numeros.indexOf(valor) == -1){
        alert("não encontrado")
    }    
    else{
        alert(`Número achado na posição ${numeros.indexOf(valor)}`)
    }
}

function executar85(){
    for(let i=0; i<50; i++){
        let numero = Math.ceil(Math.random()*201) - 100
        numeros.push(numero)
    }
    document.getElementById('resultado').innerHTML = " "
    for(let i=0; i<numeros.length; i++){
    document.getElementById('resultado').innerHTML += numeros[i] + "<br>"
}   
}

function executar86(){
    document.getElementById('resultado').innerHTML = ""
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i]<0){
            numeros[i] = 0
        }
    }
}

function executar87(){
    for(let i=0; i<50; i++){
        let numero = Math.ceil(Math.random()*50);
        pai.push(numero);

    }
    
    for(let i=0; i<50; i++){
        let numero = Math.ceil(Math.random()*50);
        mae.push(numero);
        
    }
    
    for(let i=0; i < pai.length; i++){
        if(i % 2 == 0){
            filho.push(i)
        }
    }
    
    for(let i=0; i < mae.length; i++){
        if(i % 2 != 0){
            filho.push(i)
        }
        
        document.getElementById('resultado').innerHTML +="Array pai:" + pai[i] + "   Array mae:" + mae[i] + "    Array filho:" + filho[i];
    }
    
}

function desafio(){

}
