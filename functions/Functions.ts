// diferenta dintre o metoda si o functie: metoda este scrisa intotdeauna in interiora unei clase, functia nu neaparat
// functiile sunt de 2 tipuri: void sau return
// daca nu se defineste tipul functiei, by default este void
console.log("====================================Functie simpla====================================")
function functieSimpla() : void{
    let nume = "Alexandru"
    let prenume = "Popescu"
    console.log(`Numele si prenumele persoanei este ${nume} ${prenume}`)
}
functieSimpla()
console.log()
console.log("====================================Functie cu parametrii=============================")

function functieParametrii(nume:string , prenume:string) :void{
    console.log(`Numele si prenumele persoanei este ${nume} ${prenume}`)
}

functieParametrii("Ionescu","Mihai")
functieParametrii("Grigore","Marin")

console.log()
console.log("====================================Operatori aritmetici==============================")

function operatoriAritmetici() :void{
    let numar1=10
    let numar2=55
    let calcul = numar1+numar2
    console.log("Suma celor doua numere este: "+calcul)
}
operatoriAritmetici()


console.log()
console.log("====================================Operatori asignare================================")

function operatoriAsignare() :void {
    let numar1=10
    numar1+=55
    console.log("Calculul este: "+numar1)
}
operatoriAsignare()

console.log()
console.log("====================================Operatori de comparare============================")

function operatoriComparare() :void {
    let numar1 =10
    let numar2= 10
    console.log(numar1===numar2)
    // numar1==numar2 -> verifica doar valoare
    // numar1===numar2 -> verifica valoare si tip
    // numar1!==numar 2 -> 
 
}
operatoriComparare()

console.log()
console.log("====================================Operatori logici==================================")

function operatoriLogici() :void {
    let variabila = true
    let numar1 =10
    console.log(variabila && numar1)
    console.log(variabila || numar1)
    // console.log(variabila & numar1)
}
operatoriLogici()

console.log()
console.log("====================================Operatori Type===================================")

function operatoriType() :void {
    let numar = "Alexandru"
    console.log(typeof numar)
}
operatoriType()

console.log()
console.log("====================================Operatori Optionali==============================")

function parametruOptionali(nume:string, prenume:string,varsta?:number):void {
    if (varsta == undefined){    // if (varsta) {console.log(`Numele, prenumele persoanei sunt: ${nume} ${prenume} ${varsta}`)} else {console.log(`Numele, prenumele persoanei sunt: ${nume} ${prenume}`)}
        console.log(`Numele, prenumele persoanei sunt: ${nume} ${prenume}`)
    } else {
        console.log(`Numele, prenumele persoanei sunt: ${nume} ${prenume} ${varsta}`)
    }
    
}
parametruOptionali("Ion", "Marin",37)
parametruOptionali("Marin","Viorica")
// parametruOptionali("Ion",32)

console.log()
console.log("====================================Arrow Function===================================")

const arrowFunctionPrintare=(nume:string, prenume:string):void =>{
    console.log(`Numele, prenumele persoanei sunt: ${nume} ${prenume}`)
}
arrowFunctionPrintare("Mioara","Lia")

console.log()
console.log("====================================Functii Return===================================")
function getNume():string{
    let nume ="Dorin"
    // let prenume = "Voicu"
    return nume
    // return prenume
}
// console.log("Numele persoanei este: "+ getNume())
console.log(`Numele persoanei este ${getNume()}`)

