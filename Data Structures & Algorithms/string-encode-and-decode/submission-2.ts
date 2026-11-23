class Solution {
  encode(strs) {
                        // 5#hello
    return strs.map(s => `${s.length}#${s}`).join('');
  }

  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      const hash = str.indexOf('#', i);
      const end = hash + 1 + Number(str.slice(i, hash));
      res.push(str.slice(hash + 1, end));
      i = end;
    }
    return res;
  }
}