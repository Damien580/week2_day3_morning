// Write your code below
const unique = str =>{
    for(let i = 0; i < str.length; i++){
        for (j = i + 1; j < str.length; j++){
            if (str[i] === str[j]){
                return false;
            } 
        }
    }
    return true
}
console.log(unique('poop'))
console.log(unique('pert'))

console.log('=============================')

let uniChar = (str) => new Set(str).size === str.length
{
    let uniqueSet = new Set()
    console.log(uniqueSet)
    if(uniqueSet.size === uniqueSet.length)
    return uniqueSet.size === str.length
}      

    


console.log(uniqueSet('mooooooooo'))
console.log(uniqueSet('bob'))
