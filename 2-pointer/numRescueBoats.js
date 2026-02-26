

function numRescueBoats(people, limit) {
    let l=0, r = people.length-1;
    // sort
    people.sort((a,b) => a-b);
    people
    let count = 0;
    while(l<=r){
        let total = people[l]+people[r];
        if(total <= limit) {
            l+=1;
            r-=1;
            count+=1;
            count
        } else{
            total
            // move right alone
            r -=1;
            count+=1;
        }
    }
    return count;
}

people = [5,1,4,2], limit = 6
people = [1,3,2,3,2], limit = 3

r = numRescueBoats(people, limit);
r