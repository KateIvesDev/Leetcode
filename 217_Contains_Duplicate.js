/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/

var containsDuplicate = function(nums) {
    let obj = {}
    
     for (let num of nums){
         if(obj[num]){
            obj[num] += 1
         } else {
             obj[num] = 1
         }
     }
    
    let values = Object.values(obj)
    
    //if every item in the value array is 1, return false, otherwise true
    return (values.every((x) => x == 1)) ? false : true
    
};

containsDuplicate([1,2,3,1])