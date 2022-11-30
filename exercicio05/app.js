function maior(){
    var num1 = parseFloat(document.getElementById("nota1").value);
    var num2 = parseFloat(document.getElementById("nota2").value);
    var num3 = parseFloat(document.getElementById("nota3").value);

    var maior = num1;

    if(num2 > maior)
     maior = num2;
    if(num3 > maior)
     maior = num3;

    alert("Maior: "+maior);
   }