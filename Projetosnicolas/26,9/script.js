function rodar1142(){
    let cont = 1
    let contagemPum = 0
    let limitePum = Number(prompt("Quantos Pums soltastes?"))
    let acumulador = ' '
    while(contagemPum < limitePum){
        if (cont % 4 != 0){
            console.log(cont)
            acumulador += cont + ' '
        }
        else{
            console.log("PUM")
            contagemPum++
            acumulador += "PUM \n"
        }
        cont++
    }
    alert(acumulador)
}