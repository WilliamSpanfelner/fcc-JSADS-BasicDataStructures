/* Iterate through the keys of an object with a 
for ... in statement */

const refrigerator = {
    'milk': 1,
    'eggs': 12
};

for (const food in refrigerator) {
    console.log(food, refrigerator[food]);
}

/* We've defined a function countOnline which accepts one
argument, allUsers.  Use a for...in statement inside this
function to loop through the allUsers object and return
the number of users whose online property is set to
true.  An example of an object which could be passed to
countOnline is shown below.  Each user will have an online
property set to either true or false. */

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
};

function countOnline(allUsers) {
    // Only change code below this line
    let onlineCount = 0;
    for (const user in allUsers) {
        if (allUsers[user].online) {
            onlineCount++;
        }
    }
    return onlineCount
    // Only change code above this line
}

console.log(countOnline(users));