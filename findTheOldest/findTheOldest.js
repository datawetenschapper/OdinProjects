let findTheOldest = function(oldest, youngest) {
    const young = (youngest.yearOfDeath - youngest.yearOfBirth);
    console.log(young);
    const old = (oldest.yearOfDeath - oldest.yearOfBirth);
    console.log(old)
    return (old > young ? 1 : -1);
};
module.exports = findTheOldest


