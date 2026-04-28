class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for(let i =0; i < nums.length; i++){
            if(map[nums[i]] == undefined){
                map[nums[i]] = i; //if never seen add here
            }
            else{
                return true; //if seen return true
            }
        }
        return false;
    }
}

//hashtable, HT: 1: True 2: 