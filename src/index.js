/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let matches = []
  let result = 0;
  preferences.map((value,index,array) => {
    if(value === array[array[array[value-1]-1]-1]){{
      if(isAlreadyBeen(array[value-1],array[array[value-1]-1],array[array[array[value-1]-1]-1],matches))
        result++
    }
  }
  })
  return result
};

[]
function isAlreadyBeen(b,c,d,matches){
if(b === c && c == d && b == d)
        return
  if( matches.indexOf(b)===-1 && matches.indexOf(c)===-1 && matches.indexOf(d)===-1 ){
    matches.push(b)
    matches.push(c)
    matches.push(d)
    return true
  }
}