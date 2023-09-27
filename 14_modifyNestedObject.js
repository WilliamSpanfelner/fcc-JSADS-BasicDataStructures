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

/* Here we've defined an object userActivity, which 
includes another object nested with it.  Set the value
of the online key to 45. */

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only change code below this line

// Only change code below this line

console.log(userActivity);