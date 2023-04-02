const array = ["A", "B", "C", "D"];
const permutations_3 = [];

for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        const permutation = [array[i], array[j], array[k]].sort();
        if (!permutations_3.some(p => p.every((v, idx) => v === permutation[idx]))) {
          permutations_3.push(permutation);
        }
      }
    }
  }

  console.log(permutations_3);


  // Set of 4 elements (ABCD)
const inputArray4 = [["A"], ["B"], ["C"], ["D"]];
const expectedOutput4 = [["A"], ["B"], ["C"], ["D"], ["A","B"], ["A","C"], ["A","D"], ["B","C"], ["B","D"], ["C","D"], ["A","B","C"], ["A","B","D"], ["A","C","D"], ["B","C","D"], ["A","B","C","D"]];
// Expected output: 14 unique groups

// Set of 5 elements (ABCDE)
const inputArray5 = [["A"], ["B"], ["C"], ["D"], ["E"]];
const expectedOutput5 = [["A"], ["B"], ["C"], ["D"], ["E"], ["A","B"], ["A","C"], ["A","D"], ["A","E"], ["B","C"], ["B","D"], ["B","E"], ["C","D"], ["C","E"], ["D","E"], ["A","B","C"], ["A","B","D"], ["A","B","E"], ["A","C","D"], ["A","C","E"], ["A","D","E"], ["B","C","D"], ["B","C","E"], ["B","D","E"], ["C","D","E"], ["A","B","C","D"], ["A","B","C","E"], ["A","B","D","E"], ["A","C","D","E"], ["B","C","D","E"], ["A","B","C","D","E"]];
// Expected output: 31 unique groups

// Set of 6 elements (ABCDEF)
const inputArray6 = [["A"], ["B"], ["C"], ["D"], ["E"], ["F"]];
//const expectedOutput6 = [["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["A","B"], ["A","C"], ["A","D"], ["A","E"], ["A","F"], ["B","C"], ["B","D"], ["B","E"], ["B","F"], ["C","D"], ["C","E"], ["C","F"], ["D","E"], ["D","F"], ["E","F"], ["A","B","C"], ["A","B","D"], ["A","B","E"], ["A","B","F"], ["A","C","D"], ["A","C","E"], ["A","C","F"], ["A","D","E"], ["A","D","F"], ["A","E","F"], ["B","C","D"], ["B","C","E"], ["B","C","F"], ["B","D","E"], ["B","D","F"], ["B","E","F"], ["C","D","E"], ["C","D","F"], ["C","E","F"], ["D","E","F"], ["A","B","C","D"], ["A","B","C","E"], ["A","B","C","F"], ["A","B","D","E"], ["A","B","D","F"], ["A","B","E","F"], ["A","C","D","E"], ["A","C","D","F"], ["A","C","E","F"], ["A","D","E","F"], ["B","C","D","E"], ["B","C","D","F"], ["B","C

//For a set of 4 elements:

  //  [[A], [B], [C], [D], [A, B], [A, C], [A, D], [B, C], [B, D], [C, D], [A, B, C], [A, B, D], [A, C, D], [B, C, D], [A, B, C, D]]

//For a set of 5 elements:

  //  [[A], [B], [C], [D], [E], [A, B], [A, C], [A, D], [A, E], [B, C], [B, D], [B, E], [C, D], [C, E], [D, E], [A, B, C], [A, B, D], [A, B, E], [A, C, D], [A, C, E], [A, D, E], [B, C, D], [B, C, E], [B, D, E], [C, D, E], [A, B, C, D], [A, B, C, E], [A, B, D, E], [A, C, D, E], [B, C, D, E], [A, B, C, D, E]]

//For a set of 6 elements:

  //  [[A], [B], [C], [D], [E], [F], [A, B], [A, C], [A, D], [A, E], [A, F], [B, C], [B, D], [B, E], [B, F], [C, D], [C, E], [C, F], [D, E], [D, F], [E, F], [A, B, C], [A, B, D], [A, B, E], [A, B, F], [A, C, D], [A, C, E], [A, C, F], [A, D, E], [A, D, F], [A, E, F], [B, C, D], [B, C, E], [B, C, F], [B, D, E], [B, D, F], [B, E, F], [C, D, E], [C, D, F], [C, E, F], [D, E, F], [A, B, C, D], [A, B, C, E], [A, B, C, F], [A, B, D, E], [A, B, D, F], [A, B, E, F], [A, C, D, E], [A, C, D, F], [A, C, E, F], [A, D, E, F], [B, C, D, E], [B, C, D, F], [B, C, E, F], [B, D, E, F], [C, D, E, F], [A, B, C, D, E], [A, B, C, D, F], [A, B, C, E, F], [A, B, D, E, F], [A, C, D, E, F], [B, C, D, E, F], [A, B, C, D, E, F]]

/////////////////////////////////////////////////////
    function findGroups(arrayOfArrays) {
        const results = [];
      
        function findGroupsHelper(current, remaining) {
          if (current.length > 1) {
            results.push(current);
          }
      
          for (let i = 0; i < remaining.length; i++) {
            const newCurrent = current.concat(remaining[i]);
            const newRemaining = remaining.slice(i + 1);
            findGroupsHelper(newCurrent, newRemaining);
          }
        }
      
        findGroupsHelper([], arrayOfArrays);
        return results;
      }

const input = [["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["G"], ["H"], ["I"],["J"]];
const output = findGroups(input);
console.log(output.length);
////////////////////////////////////////////////////////