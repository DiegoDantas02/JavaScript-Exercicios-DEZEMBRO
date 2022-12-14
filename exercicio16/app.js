function mostra(texto) {
    document.write(texto);
}
var nome =(prompt("Digite seu Nome:"));
var idade = parseInt(prompt("Digite sua idade: "));

    if(idade < 13) {
        mostra("Você Ainda é criança! ! !");

        if( idade == 13,14,15,16,17,18,19,20) {
            mostra("Você é Adolescente! ! !");
        }    
        else if( idade > 20) {
            mostra("Você é Adulto! ! !");
        } 
           
    }
