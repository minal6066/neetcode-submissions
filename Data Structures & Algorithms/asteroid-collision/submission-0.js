class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for(let a of asteroids){
            while (stack && a<0 && stack.at(-1)>0){
                let diff = a + stack.at(-1);
                if (diff < 0){
                    stack.pop();
                } else if(diff > 0){
                    a = 0;
                } else {
                    a = 0;
                    stack.pop();
                }
            }
            if(a){
                stack.push(a);
            }
        }
        return stack;
    }
}
