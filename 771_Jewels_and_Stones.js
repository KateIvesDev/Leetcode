/*You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

PREP
parameters: two strings of Englsh letters; the jewel string only has unique characters; letters are case sensitive
return: return a number; the number is the count of your stones that are jewels
example: a jewel string of "aZ" and a stone string of "aaZZ" will return 4
pseduo: simple solution is using nested for loops to count number of times a jewel character appears in the stones string; 
but this is an O(n^2) solution so not optimal.*//*

//O(n^2) SOLUTION
function howManyJewels(jewels, stones){
 
   let result = 0;
   for (let i = 0; i < stones.length; i++){
       for (let j = 0; j < jewels.length; j++){
           if(stones[i] === jewels[j]){
                console.log(result++)
           }
       } 
   }
   return result
   
}

console.log(howManyJewels("zAB", "zzBB"))

O(n) SOLUTION */

function howManyJewels(J, S){
    let jewels = new Set(J)
    let result = 0;
    
    for (let i=0; i < S.length; i++){
        if(jewels.has(S.charAt(i))) {
            result++
        }
    }
    return result
}
console.log(howManyJewels("zAB", "zzBB"))
