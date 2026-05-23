// let products = [
//     ["pen" , "pencile" , "book"],
//     ["phone" , "laptop" , "airpod"],
//     ["car" , "bysicle" , "motor"],
//     ["ali" , "reza" , "mashala"]
// ]

// let myBox = products.reduce((prevArray , nextArray)=>{
//     console.log(prevArray , nextArray)
//     return [... prevArray , ...nextArray]
// })

// console.log(myBox)



let numbers = [1,2,3,4,5,6]

const box = numbers.reduce((prevNum , nextNum)=>{
    console.log(prevNum , nextNum)
    return prevNum + nextNum
})

console.log(box)