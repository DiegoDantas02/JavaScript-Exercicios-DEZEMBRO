function CalcularMedia(){
    let n1 = document.getElementById("Nota1").value
    let n2 = document.getElementById("Nota2").value
    let n3 = document.getElementById("Nota3").value
    let n4 = document.getElementById("Nota4").value
    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4
    document.getElementById("resposta").innerHTML = media

}