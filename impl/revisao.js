var n1 = 9;
var n2 = 7;
var n3 = 5;
/*let media = (nota + nota2 + nota3)/3
------------------- MODO SEM FUNCTION IF ELSE -------------------
//if(media >= 5){
    console.log("Você foi aprovado!, e a sua média foi " + media)
}
else{
    console.log("Você foi reprovado, sua média foi, " + media)
}*/
//----------------- MODO BÁSICO COM FUNCTION ---------------------
/*let fMedia = function(n1:number, n2:number, n3:number) : number {
    return (n1 + n2 + n3) / 3
}
console.log("A média é: " + fMedia(n1,n2,n3))*/
//----------------- MODO SIMPLIFICADO COM FUNCTION ---------------------------
var fmedia = function (n1, n2, n3) { return (n1 + n2 + n3) / 3; };
console.log("A media e: " + fmedia(n1, n2, n3));
