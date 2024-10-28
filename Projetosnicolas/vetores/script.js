let batatas = [];
function add(){
    let produto = document.getElementById("txt").value;
    let existe = false;
    for(let item of batatas){
        if(item.toUpperCase() == produto.toUpperCase()){
            existe = true;
            break;

        }
    }
    
    
    if(existe == false){
        batatas.push(produto);
        document.getElementById("lista").innerHTML = batatas
    }
    else{
        alert(produto + " já está na lista")
    }

}

function edit(){
    let produto = document.getElementById("txt").value;
    let posicao = -1;
    for(let item of batatas){
        if (item.toUpperCase() == produto.toUpperCase()){
            let item = prompt("Deseja alterar para que item?").value
            break;    
        }
    }
    document.getElementById("lista").innerHTML = batatas;
    
}

function remove(){
    let produto = document.getElementById("txt").value;
    let existe = false;
    let posicao = batatas.indexOf(produto)
    for(let item of batatas){
        if(item.toUpperCase == produto.toUpperCase){
            existe = true;
            break;
        }
    }

    if(existe == false){
        alert(produto + " não está na lista")
    }
    else{
        batatas.splice(posicao, 1);
        document.getElementById("lista").innerHTML = batatas

    }
}