function calcularIMC(){
    let peso = document.getElementById('inpPeso').value
    let altura = document.getElementById('inpAltura').value

    let imc = peso / (altura**2)
    // alert("Seu IMC é: " + imc)

    // document.getElementById('inpResultado').value = "seu IMC é:" +imc

    document.getElementById('pResultado').innerHTML = "Seu IMC é: " + imc

    // console.log(peso)
}

function idCachorro(){
    let idade = document.getElementById('pCachorro').value
    let idreal = idade * 7

   
    if (idreal >= 70){
        document.getElementById('pResultado').innerHTML = "O cachorro pode se aposentar, pois tem " +idreal
    }
    else{
        document.getElementById('pResultado').innerHTML = "O cachorro não pode se aposentar, pois tem " +idreal
    }
    

}
