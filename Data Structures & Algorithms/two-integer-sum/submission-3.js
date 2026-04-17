class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //so I know i have to go through a hashtable and just find the best pair basically to add to target
        //easiest way is to have a loop like i, i+1 and compare constantly the index that equally to target, but this is O(n^2)...
        let hash = {}
        for(let i = 0; i < nums.length; i++){
            // if(nums[i] < target){    //i know if a num is greater than the target to just skip it 
            //     hash[nums[i]] = i;
            // }
            //3
            //every time we get a complement then just put that complement inside the hT

            let complemnt = target - nums[i]; //okay so i should be cchecking for the complemtn in the hashtable, if not there then add the arr[i] to the array
            //what if it's like 5:7, 4:7, 3:7, and i just check if nums[i] + hash[nums[i]] = target?
            // if(nums[i] < target){    //i know if a num is greater than the target to just skip it 
            //     hash[nums[i]] = i;
            // }
            // else if(nums[i] + hash[i] === target){
            //     return [i, hash[target - nums[i]]];
            // }
            // console.log(hash);
            //check if the complement exists, if not add the array[i] to the hashtable
            if(hash[complemnt] !== undefined){ //if complement index DOES exist in the array then return the index of the complmeent, 
                return [hash[complemnt], i]; 
            }
            else{
                hash[nums[i]] = i;
            }
        }
        return [];
    }
}