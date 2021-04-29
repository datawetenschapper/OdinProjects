/* 
        What I know:
    it is an array with three objects. Each object has three keys.
    Each object has the order of : name , birth , death

        Human code:
    
    iterate through each object to see who  is the oldest,
    if they have not died yet set their age to this year. 
    remove the younger person each time through reduce.
    once you have the youngest person's name you return key (name).

        Things to research/consider:
    for in loop in an object.
    if conditional if the person has not died yet 
    
*/


const findTheOldest = function (people) {
    let nameEldest;
    let oldest = 0;
    for (let i = 0; i < people.length; i++) {
        if (!(people[i].yearOfDeath)) { people[i].yearOfDeath = new Date().getFullYear() }
        let test = (people[i].yearOfDeath - people[i].yearOfBirth);
        if (test > oldest) {
            oldest = test;
            nameEldest = (people[i]);
            console.log(nameEldest)
        };
        console.log(test);
    };
    return (nameEldest);


module.exports = findTheOldest
