let findTheOldest = function (array) {
    return array.reduce((youngest, oldest) => {
        if (!this.yearOfDeath){
            this.yearOfDeath = new Date().getFullYear();
            console.log(this + 'death edited')
        }
        const young = (youngest.yearOfDeath - youngest.yearOfBirth);
        console.table(young + youngest.name);
        const old = (oldest.yearOfDeath - oldest.yearOfBirth);
        console.log(old + oldest.name)
        return old > young ? oldest: youngest ;
    })
};
module.exports = findTheOldest
