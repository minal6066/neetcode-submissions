class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a, b) => a - b);

        let res = 0;
        let l=0, r=people.length-1;

        [1,2,4,5]

        while(l<=r){
            let rem = limit - people[r];
            if(rem >= people[l]) {l++;}
            res++;
            r--;
        }
        return res;
    }
}
