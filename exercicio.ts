let comprimento = 6
let largura = 7
let altura = 8
let volume = (comprimento*largura*altura)

/*let fmedia = (comprimento:number,largura:number,altura:number = 7) => (n1 + n2 + n3) / 3
console.log(`A media e: ${fmedia(largura,largura,altura)}`)*/
let fvolume = (comprimento:number,largura:number,altura:number) => (comprimento * largura * altura)
console.log(`O volume e: ${fvolume(comprimento,largura,altura)}`)