let findTheOldest = function(people) {
    const date = new Date()
    for (var i = 0; i < people.length; i++) {
        if (!people[i].hasOwnProperty('yearOfDeath')) {
            people[i].yearOfDeath = date.getFullYear();
        }
        var aged = people[i].yearOfDeath-people[i].yearOfBirth;
        people[i].age = aged
    }
    const age = people.sort((a,b) => a.age < b.age ? 1 : -1);
    return age[0]
}

module.exports = findTheOldest
