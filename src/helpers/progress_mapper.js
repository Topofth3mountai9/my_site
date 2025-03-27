export function mapper(range_end, progress, num_of_parts) {
  let helper = range_end / num_of_parts;
  let range = [];

  for (let i = 0; i <= num_of_parts; i++) {
    range.push(i * helper);
  }

  let differences = range.map((num) => Math.abs(progress - num));
  let wanted_index = differences.indexOf(Math.min(...differences));

  return wanted_index;
}

let s = mapper(1, 0.76, 4);
console.log(s); // Correct index

// export function mapper(range_end, progress, num_of_parts) {
//   let helper = range_end / num_of_parts;
//   //   console.log(helper);
//   let range = [0];
//   let i = 0;
//   while (i < range_end) {
//     range.push(i + helper);
//     i += helper;
//   }
//   //   console.log(progress);
//   let differences = [];
//   for (let j of range.slice(1)) {
//     let diff = progress - j;
//     // console.log(diff);
//     differences.push(diff);
//   }
//   //   console.log(differences);
//   differences = differences.map((num) => Math.abs(num));
//   let smallest_value = Math.min(...differences);
//   //   console.log(smallest_value);
//   let wanted_index = differences.indexOf(smallest_value);
//   //   console.log(wanted_index);
//   // return { range, wanted_index };
//   return wanted_index;
// }

// let s = mapper(1, 0.76, 4);
// console.log(s);
