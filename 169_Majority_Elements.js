var majorityElement = function(nums) {
    let obj = {}

    for (let num of nums){
        if(obj[num]){
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }
    return Object.keys(obj).reduce((a,b)=> obj[a] > obj[b] ? a : b)

};
console.log(majorityElement([3,2,3,2,2,2,2,2,4,4,4, 5]))