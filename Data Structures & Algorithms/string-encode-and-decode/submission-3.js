class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}/${s}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let helper = []
       let i = 0;

       while(i<str.length) {
            const find = str.indexOf("/", i)
            const end = find + 1 + Number(str.slice(i, find))
            helper.push(str.slice(find + 1, end));
            helper.push()
            i = end;
       }
       return helper
    }
}
