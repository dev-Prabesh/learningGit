// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];


// const result = words.filter((word) => {
//     if(word.length > 7){
//             let res = console.log(word)
//             return res
//     }
// })

// console.log(res)




// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => {
//     if (word.length > 7) {
//         // console.log(word); // Logs words with length > 7
//         return true; // Include the word in the new array
//     }
//     return false; // Exclude the word
// });

// console.log(result); // Logs the filtered array








// const arr = [1,4,5,2,6,8,4,5,7,2,3,2,1,6,7]

// function findSum (arr) {
//     let sum = 0;
//     for (let i =0; i < arr.length; i++){
//         if(arr[i] > sum){
//             sum = arr[i]
//         }
        
//     }
//     return sum;
// }

// console.log(findSum(arr))


// const output = arr.reduce(function (max,curr) {
//     if(curr > max) {
//         max = curr;
//     }
//     return max
// },0)


// console.log(output)

















// const result = arr.filter((element) => {
//     if(element > 4) {
//         return element
//     }
// })

// console.log(result)



























// const result = arr.filter((val) => {
//     if(val % 2 === 0){
//        return (val)
//     }
// })

// console.log(result)
// console.log(arr)



// const result = arr.map((value) =>  value * 3)

// console.log(result)

// const users = [
//     { firstName: "akshay", lastName: "saini", age: 26},
//     { firstName: "Prabesh", lastName: "Dahal", age: 20},
//     { firstName: "Donald", lastName: "Trump", age: 26},
//     { firstName: "Amita", lastName: "Bachan", age: 40},
// ];



// const output = users.filter((user) => {
//     if(user.age < 30) {
//        return (user.firstName)
//     }
// }).map((name) => {
//     return (name.firstName)
// })
// console.log(output)
// // output.map((name) => {
// //     console.log((name.firstName))
// // })


















// const output = users.map((user) => {  
//     let fullName = `${user.firstName} ${user.lastName}`
//     return fullName;
// })










// console.log(output)












// fetch(`https://dummyjson.com/users`)
// .then(response => response.json())
// .then((data) => {
//     let response =(data.users)
//     console.log(response)
//     // response.filter((user) => {
//     //     if(user.weight > 95){
//     //         console.log(user)
//     //     }
//     // })
// })










// function a (b) {
//     b()
// }


// function sayHi () {
//     console.log("hiiiiiiiiiiiiiiiiiiiiiiii")
// }

// a(sayHi)
















console.log('hello')


for(let i = 0; i<= 100000000; i++) {
    console.log(`This is ${i}st print`)
}