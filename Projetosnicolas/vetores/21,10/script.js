let bancoDeDados = [];
function add(){
    let usuario ={
    username:document.getElementById("username").value.toUpperCase(),
    password:document.getElementById("pass").value
    }    
    if(existe(usuario.username) == false){
        bancoDeDados.push(usuario);
        alert("Usuário cadastrado com sucesso");
        document.getElementById("username").value = null;
        document.getElementById("pass").value = null;
    }
    else{
        alert("Esse usuário já foi cadastrado");
    }
}

function login(){
    let usuario = document.getElementById("user").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado!");
    }
    else{
        alert("Bem vindo ao sistema!")
        document.getElementById("username").value = null;
    }
    
}

function edit(){
    let username = document.getElementById("userEdit").value;
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado no banco de dados!")
    }
    else{
        let novoValor = prompt("Digite o novo valor").toUpperCase();
        bancoDeDados[pos] = novoValor;
        alert("Usuário alterado com sucesso!");
    }
    document.getElementById("userEdit").value = null;


}

function existe(username){
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(pos == -1){
        return false;
    }
    else{
        return false;
    }
}