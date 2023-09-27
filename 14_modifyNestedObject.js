// Modify an Object Nested Within an Object
// Consider this object:
let nestedObject = {
    id: 2880269164,
    date: 'December 31, 2016',
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8
        }
    }
};

// Assign the value 10 to the busy key.
nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject);