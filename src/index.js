
exports.min = function min(array) {

  let minArr = 0;
  if (Array.isArray(array) && array.length > 0) {
    let m = array[0];
    for (let i = 0; i <= array.length; i++) {
      let j = i + 1;
      if (array[i] > array[j]) { m = array[j] };
      if (minArr > m) { minArr = m };
    }
  } else minArr = 0;
  return (minArr);
}

exports.max = function max(array) {
  let maxArr = 0;
  if (Array.isArray(array) && array.length > 0) {
    let m = array[0];
    for (let i = 0; i <= array.length; i++) {
      let j = i + 1;
      if (array[i] < array[j]) { m = array[j] };
      if (maxArr < m) { maxArr = m };
    }
  }
  else maxArr = 0;

  return (maxArr);
}

exports.avg = function avg(array) {
  let sum = 0;
  let avgArr = 0;
  if (Array.isArray(array) && array.length > 0) {
    array.forEach(element => { sum = sum + element });
    if (array.length > 0) { avgArr = sum / array.length };
  } else avgArr = 0;
  return (avgArr);
}
