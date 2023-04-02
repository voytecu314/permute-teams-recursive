const members = ["A","B","C","D","E"];

const choices = {
    A: {
        A: null,
        B: 25,
        C: 50,
        D: 50,
        E: 75
    },
    B: {
        A: 25,
        B: null,
        C: 0,
        D: 54,
        E: 14
    },
    C: {
        A: 50,
        B: 5,
        C: null,
        D: 25,
        E: 7
    },
    D: {
        A: 10,
        B: 20,
        C: 44,
        D: null,
        E: 75
    },
    E: {
        A: 55,
        B: 26,
        C: 5,
        D: 51,
        E: null
    },
}

function get_all_two_pairs (array_of_members) {

    if (array_of_members.length > 2){

        let copy = [...array_of_members];
        let all_two_pairs = [];

        for(let x=0; x<copy.length;) {
            let one_element = copy.splice(x,1);
            let pairs = copy.map(el=> [...one_element,el]);
            copy.length && all_two_pairs.push(...pairs); 
        }
        
        return all_two_pairs;;

    } else if(array_of_members.length === 2){

        return array_of_members;
    
    } else {

        return [];

    }
}

function get_all_three_tuples (array_of_members) {

    if (array_of_members.length > 3) {

        const all_two_pairs = get_all_two_pairs(array_of_members);
        const all_threes = [];

        members.forEach(member=>{
                all_two_pairs.forEach(pair=>{
                if(!pair.includes(member)) all_threes.push([...pair,member]);
            })
        });

        const all_threes_strings_sorted = all_threes.map(tuple=>tuple.sort().toString()).sort();

        const all_threes_no_repetitions = all_threes_strings_sorted.filter((el,i)=>!(i%3))
                                                                    .map(tupleString=>tupleString.split(','));

        return all_threes_no_repetitions;

    } else if (array_of_members.length === 3){

        return array_of_members;
    
    } else {
        return [];
    }

    
}

function get_all_fours (array_of_members) {
    if (array_of_members.length > 4) {

        const all_three_tuples = get_all_three_tuples(array_of_members);
        const all_fours = [];

        members.forEach(member=>{
                all_three_tuples.forEach(tuple=>{
                if(!tuple.includes(member)) all_fours.push([...tuple,member]);
            })
        });

        const all_fours_strings_sorted = all_fours.map(four=>four.sort().toString()).sort();

        const all_fours_no_repetitions = all_fours_strings_sorted.filter((el,i)=>!(i%4))
                                                                    .map(fourString=>fourString.split(','));

        return all_fours_no_repetitions;
        
    } else if (array_of_members.length === 4){

        return array_of_members;

    } else return [];
}

function get_all_fives (array_of_members) {
    if (array_of_members.length > 5) {

        const all_fours = get_all_fours(array_of_members);
        const all_fives = [];

        members.forEach(member=>{
                all_fours.forEach(tuple=>{
                if(!tuple.includes(member)) all_fives.push([...tuple,member]);
            })
        });

        const all_fives_strings_sorted = all_fives.map(five=>five.sort().toString()).sort();

        const all_fives_no_repetitions = all_fives_strings_sorted.filter((el,i)=>!(i%5))
                                                                    .map(fiveString=>fiveString.split(','));

        return all_fives_no_repetitions;
        
    } else if (array_of_members.length === 5){

        return array_of_members;

    } else return [];
}

function get_all_two_pairs2 (array_of_members) {
        const all_ones = array_of_members.map(member=>[member]);
        const all_pairs = [];

        array_of_members.forEach(member=>{
                all_ones.forEach(one=>{
                if(!one.includes(member)) all_pairs.push([...one,member]);
            })
        });

        const all_pairs_strings_sorted = all_pairs.map(pair=>pair.sort().toString()).sort();

        const all_pairs_no_repetitions = all_pairs_strings_sorted.filter((el,i)=>i%2)
                                                                    .map(pairstring=>pairstring.split(','));

        return all_pairs_no_repetitions;
}

/* 
function get_all_possible_teams (array_of_members) {

    let members_length = array_of_members.length;

    let all_two_pairs = get_all_two_pairs(array_of_members);

    let all_possible_teams = [all_two_pairs];

    let current_teams = [];

    array_of_members.forEach(member=>{

        for(let i=0; i<members_length-2;i++) {

            all_possible_teams[i].forEach(team=>{
                if(!team.includes(member)) current_teams.push([...team,member]);
            });

        }

    });

} */



console.log( "PAIRS:\n",get_all_two_pairs(members) );
console.log( "PAIRS2\n",get_all_two_pairs2(members) );
console.log( "TUPLES:\n",get_all_three_tuples(members) );
console.log( "FOURS:\n",get_all_fours(members) );
console.log( "FIVES:\n",get_all_fives(members) );
console.log("\nMembers:",members);