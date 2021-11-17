// Checkpoint na aula de funções
 function isNameOddOrEven (name){
    let nameCount = 0;
    for (let letter of name){
        nameCount += 1;
    }
    if (nameCount % 2 === 0){
        return `${name} has an even number of letters` 
    } else {
        return `${name} has an odd number of letters`
    }
} 

const teste = isNameOddOrEven('Laise')
console.log(teste)

let arr = [1, 2, 3, 4, true, false, "miami", [], {}]

for (let i = 0; i < arr.length; i += 1){
    console.log(typeof(arr[i]))
    console.log(arr[i].length)
}


