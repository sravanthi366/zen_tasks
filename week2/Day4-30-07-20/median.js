let arr1 =[1,2,3,4]
let arr2 = [5,6,7,8]
let arr = arr1.concat(arr2)
const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
console.log(median(arr));