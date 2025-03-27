function mapper(range_end, progress, num_of_parts) {
  let helper = range_end / num_of_parts;
  //   console.log(helper);
  let range = [0];
  let i = 0;
  while (i < range_end) {
    range.push(i + helper);
    i += helper;
  }
  //   console.log(progress);
  let differences = [];
  for (let j of range.slice(1)) {
    let diff = progress - j;
    // console.log(diff);
    differences.push(diff);
  }
  //   console.log(differences);
  differences = differences.map((num) => Math.abs(num));
  let smallest_value = Math.min(...differences);
  //   console.log(smallest_value);
  let wanted_index = differences.indexOf(smallest_value);
  //   console.log(wanted_index);
  //   return { range, wanted_index };
  return wanted_index;
}

let s = mapper(1, 0.4, 4);
console.log(s);

// console.log(mapper({1,.77,4}))

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
//             0, 1, 2

//     0  3.33 6.33 9.99

// 0.00 -> 1.00
//  0,1,2,3

// 0 .25 .50 .75 1

// 1, 0, 1, 2;
