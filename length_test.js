var myarr = ["I", "like", "turtles"];
var checkcolor=(a) => (myarr.indexOf(a) > -1)
console.log(checkcolor('o'))

// const bb1 = [
//     ['o', 'o', 'o'],
//     ['o', 'o', 'o'],
//     ['o', 'o', 'o']
// ]

// const bb2 = [
//     ['o', 'o', 'o'],
//     ['o', 'o', 'o'],
//     ['o', '1', 'o']
// ]

// const bb3 = [
//     ['o', '1', 'o'],
//     ['o', 'o', 'o'],
//     ['o', '1', 'o']
// ]

// const moves = (board1, board2) =>
//   board1
//     .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
//     .reduce((a, b) => a.concat(b))
//     .length

//     console.log( moves(bb1, bb2))

//     const checkmoves=(b1,b2)=>{
//         if (moves(b1,b2) < 2){            
//             return true}
//         else {
//             return false
//         }
//     }
    //console.log(checkmoves(bb1,bb3))

    
