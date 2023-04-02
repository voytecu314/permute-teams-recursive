//console.log(get_all_two_pairs(members));
const all_two_pairs = get_all_two_pairs(members);
/* const all_threes2 = [];
console.log(
    all_two_pairs
        .forEach(pair=> members
                            .forEach(el=> !pair.includes(el) && all_threes2.push([...pair,el]))
                            )); 
//trojki sie powtarzaja
console.log(all_threes2.length); */
const all_threes = [];


members.forEach(member=>{
        all_two_pairs.forEach(pair=>{
        if(!pair.includes(member)) all_threes.push([...pair,member]);
    })
});


let all_threes_strings_sorted = all_threes.map(tuple=>tuple.sort().toString()).sort().filter((el,i)=>!(i%3)).map(tupleString=>tupleString.split());

console.log(all_threes_strings_sorted);