class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
        isAnagram(s, t) {
        //use a HT
        //where I put every char of s in a HT
        //then I iterate over T and check if there is a match, if not then return false
        if(s.length !== t.length){
            return false;
        }

        let map = {};
        for(let i = 0; i < s.length ;i++){
            if(!map[s[i]]){ //! matters here
                map[s[i]] = 0;
            }
            map[s[i]]++;
            
        }
        let map_2 = {}

        for(let j = 0; j < t.length ; j++){
            if(!map_2[t[j]]){ //! matters here
                map_2[t[j]] = 0;
            }
            map_2[t[j]]++;
        }

        for(let key in map){
            if(map[key] !== map_2[key]) {
                return false;
            }
            // return map[key] !== map_2[key]
        }
        return true;

    }

}

