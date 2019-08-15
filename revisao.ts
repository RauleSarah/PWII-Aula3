let n1 = 9
let n2 = 7
let n3 = 5
/*let media = (nota + nota2 + nota3)/3

//if(media >= 5){
    console.log("Você foi aprovado!, e a sua média foi " + media)
}
else{
    console.log("Você foi reprovado, sua média foi, " + media)
}*/
let fMedia = function(n1:number, n2:number, n3:number) : number {
    return (n1 + n2 + n3) / 3
}
//console.log("A média é: " + fMedia(n1,n2,n3))
console.log(`A media e: ${fMedia(n1,n2,n3)}`)