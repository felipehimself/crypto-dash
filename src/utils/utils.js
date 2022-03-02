const arrToSubArrays = (arr, size) => {
  let res = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    res.push(chunk);
  }

  return res;
};

// const arrCardInfos = (obj) =>{
//   return Object.entries(obj).reduce((acc,curr) => {
//     return [...acc, {[curr[0]]: curr[1]}  ]
//   }  , [])
// }

export { arrToSubArrays };

