//var nome = "Ricardo"

// Valor das notas por Semestre
function calcularMedia() {
var notaDoPrimeiroBimestre = parseFloat(document.getElementById("n1").value);
var notaDoSegundoBimestre = parseFloat(document.getElementById("n2").value);
var notaDoTerceiroBimestre = parseFloat(document.getElementById("n3").value);
var notaDoQuartoBimestre = parseFloat(document.getElementById("n4").value);

// Media das notas 
var notaFinal = (
                (notaDoPrimeiroBimestre + 
                 notaDoSegundoBimestre + 
                 notaDoTerceiroBimestre + 
                 notaDoQuartoBimestre) / 4
).toFixed(1);


//Exibição na console
//if (notaFixada >= 6) console.log ("Aprovado") //Se nota igual ou maior que seis exiba Aprovado
if (notaFinal >= 6) {
   document.getElementById("media").innerHTML =
      "Aprovado! \t Média: " + notaFinal;
  
 ///else console.log("Reprovado") //Se não exiba reprovado
  } else
    document.getElementById("media").innerHTML =
      "Reprovado! \t Média: " + notaFinal;
}






///console.log("Bem vindo " + nome)//Menssagem de boas vindas + nome
//console.log(notaFixada) //Exibição da nota

// isso é um comentário

// Revisão
// Variáveis, Strings, Console.log toFixed, Operações Matemáticas, Concatenação