class Solution {
   
    encode(strs) {
        let substr = "";
        for(const str of strs){
            substr += `${str.length}#${str}`
        }
        return substr;
    }

    decode(str) {
        let arr = [];
        let i=0,j=0,l;
        while(i<str.length){
            while(str[j] != '#'){j++};
            // console.log(j);, "%"
            l = Number(str.substring(i,j));
            i=j+1; //2
            j=i+l; //7
            arr.push(str.substring(i,j));
            i=j;
        }
        return arr;
    }
}
