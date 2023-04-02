const members = [["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["G"], ["H"], ["I"], ["J"]];

const find_teams_recursive = (array_of_members, memo = [], addTeams = []) => {

    let array_of_teams = [...array_of_members];
    memo.push(...array_of_members)

    for(let x=0; x<array_of_teams.length;) {
        
        let one_team = array_of_teams.splice(0,1);
        
        array_of_teams.forEach(el=> { 
            for (let i = 0; i < one_team[0].length; i++) {
               
                    if(!el.includes(one_team[0][i])){

                        let newTeam = [...el,one_team[0][i]].sort().toString();

                        addTeams.every(addedTeam=>addedTeam!==newTeam)
                        &&
                        addTeams.push(newTeam);
                    
                    } 
                    }
                
            });
        
    }

    let addedTeams = addTeams.map(team=>team.split(','));

    if(!addedTeams.length) return memo;
    return find_teams_recursive(addedTeams, memo)
}

/* for(let i=1; i<=members.length; i++){

    console.log(find_teams_recursive(members).filter(team=>team.length==i).length)

} */

//console.log(find_teams_recursive(members).filter(team=>team.length==3))
console.log( find_teams_recursive(members) );