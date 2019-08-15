var comprimento = 6;
var largura = 7;
var altura = 8;
var volume = (comprimento * largura * altura);
/*let fmedia = (comprimento:number,largura:number,altura:number = 7) => (n1 + n2 + n3) / 3
console.log(`A media e: ${fmedia(largura,largura,altura)}`)*/
var fvolume = function (comprimento, largura, altura) { return (comprimento * largura * altura); };
console.log("O volume e: " + fvolume(comprimento, largura, altura));
