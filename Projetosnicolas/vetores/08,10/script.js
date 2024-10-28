let convidados = [];
function add(){
    let pessoa = document.getElementById("txt").value;
    let existe = false;
    for(let nome of convidados){
        if(nome.toUpperCase() == pessoa.toUpperCase()){
            existe = true;
            break;
    
        }
    }
    
    if(existe == false){
        convidados.push(pessoa.toUpperCase());
        document.getElementById("lista").innerHTML = convidados
    }
    else{
        alert(pessoa + "já foi convidada")
    }
    }

    function edit(){
        let pessoa = document.getElementById("txt").value;
        for(let pos = 0; pos < convidados.length; pos++){
            if (convidados[pos].toUpperCase() == pessoa.toUpperCase()){
                convidados[pos] = prompt("Digite o nome do novo convidado?").toUpperCase()
                break;    
            }
        }
        document.getElementById("lista").innerHTML = convidados;
        
    }    

function remove(){
    let pessoa = document.getElementById("txt").value;
    let existe = false;
    let posicao = convidados.indexOf(pessoa)
    for(let nome of convidados){
        if(nome.toUpperCase() == pessoa.toUpperCase()){
            existe = true;
            break;
        }
    }

    if(existe == false){
        alert(pessoa + " não está na lista de convidados")
    }
    else{
        convidados.splice(posicao, 1);
        document.getElementById("lista").innerHTML = convidados

    }
}

