// primitive si non-primitive

let nume : String = "Alexandru"
console.log("Alexandru")

let varsta = 25

let employee = true

let gender = 'M'

console.log(nume)
console.log("Numele persoanei este: "+nume+" , varsta persoanei este "+varsta+" ani iar sexul persoanei este "+gender)
console.log("Alt format de afisare")
console.log(`Numele persoanei , varsta si sexul sunt ${nume} ${varsta} ${gender}`)

//variabile explicite
// in TypeScript avem posibilitatea sa specificam tipul unei variabile
// pe langa tipul unei variabile putem specifica si modalitatea prin care sa primeasca o valoare

let curs: any = "TypeScript"
let curs2: unknown = 14
let curs3: undefined = undefined
let curs4: null = null
let curs5: any|unknown|undefined|null   // union operator
let curs6: string|number     // union operator
let curs7: string|boolean|Float32Array   // union operator
curs7 = true
curs7 = "Marin"

// o variabila mai poate sa fie definita folosind cuvantul var

var cursant = "Alex"

// definim o constanta

const caiet = "matematica"
// caiet = "romana"