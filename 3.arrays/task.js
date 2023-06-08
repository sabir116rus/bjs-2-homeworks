function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    const totalAge = filteredUsers.map(user => user.age).reduce((sum, age) => sum + age, 0);
    return filteredUsers.length > 0 ? totalAge / filteredUsers.length : 0;
}