

// let obj = {
//     test(){
//         return'hello'
//     }
// }
// console.log(obj.test());
//  const nums = [1,2,3]
//  console.log(nums);
//  nums.push(5);
//  console.log(nums);
//  nums.shift();
//  console.log(nums);


const nums = [1,2,3];
const doubled = nums.map(
    function(elm){
              return elm*2;
    }
)

console.log(doubled);