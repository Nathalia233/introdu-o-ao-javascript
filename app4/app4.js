//Indices de String

var nome = "NathaliaNathaliaNathaliaNathaliaNathalia";

//inicia-se contando do zero 0,1,2,3,4,5,6,7... 235,236...
console.log(nome[25]);

// comparaçoes de string 
// operadores de comparaçao == e !=

"a" = "b"; // maneira incorreta de comparar igualdade 
"a" == "b"; // maneira correta de comparar igualdade == A NÃO É IGUAL B = RETORNARÁ false

//...........................................................
//o javascript é casesentive === "A" não é igual "a"

"A" == "a" // false
"A" == "b" // fase
"b" == "b" // true
"3" == "3" // true 
"3" == "tres" //false

//...........................................

"a" !="a"; //false
"a" != "b" //true

//...................................................

"A" != "a"; // true
"B" != "b"; // true
"3" != "3"; // false
"b" != "b" // false
"3" != "tres" //false
