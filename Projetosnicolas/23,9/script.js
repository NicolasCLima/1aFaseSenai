//for(inicialização ; condição ; incremento) {trecho que será repetido}
function atv1(){
    let contagem = ""
    let n = Number(prompt("Digite um número!"));
    let contador = 1;
    while(contador<n){
        contagem += contador + "\n";
        contador++;
    alert(contagem)
    }
}

function atv2(){
    let numeros = 0;
    let n = Number(prompt("Digite um número"));
    while(n !== 0){
        numeros += n
        n = Number(prompt("Digite outro número"))
    }
    alert("A soma todal é "+numeros)

}

function atv3(){
    let n = Number(prompt("Digite a quantidade de números para média"));
    media = 0;
    for(i=0 ; i<n ; i++){
        let atv = Number(prompt("Digite a nota da atividade"))
        media += atv
    }
    media /= n
    alert(media)
}

function atv4(){
let n = Number(prompt("Digite um número para calcular o fatorial"));
let i = 1;
let r = 1;
while(i<=n){
    r = r * i;
    i++;
}
alert(r)
;}

function atv5(){
    let n = Number(prompt("Digite um número!"))
    let tabela = "";
    //for(inicialização ; condição ; incremento) {trecho que será repetido}
    for(let mult = 1; mult <= 10; mult ++){
        tabela += "\n"+n+" x "+mult+" = "+(n*mult);
    }
    alert(tabela);
}

function atv6(){
    let pares ="";
    let n = Number(prompt("Digite um número!"));
    for(let par = 1; par <= n; par ++)
        if(par %2 == 0){
            pares += "\n"+par
        }
        alert(pares)
    }

function atv7(){
    let n = Number(prompt("Digite um número!"));
    let passo = Number(prompt("Digite o passo!"))
    let i = 1
    while(i < n){
        alert(i);
        i += passo
    }
    
}

function atv8(){
    let impares ="";
    let n = Number(prompt("Digite um número!"));
    for(let impar = 1; impar <= n; impar ++);
        if(impar %2 != 0){
            impares += "\n"+impar
        }
        alert(impares)
}

function atv9(){
    let n1 = Number(prompt("Digite um número"));
    let n2 = Number(prompt("Digite um possível número!"));
    if(n2 % n1 == 0){
        alert(n2 +" é múltiplo de "+n1)
    }
    else{
        alert(n2+ " não é múltiplo de " +n1);
    }
    
}
function atv10(){
let divisores = 0 
let ant = 1    
let n = Number(prompt("Digite um número"));
    for(ant; ant <=n; ant++){
        if(n % ant == 0){
            divisores += 1
        }
    }
    if(divisores == 2){
        alert("É primo")
    }
    else{
        alert("Não é primo")
    }
}