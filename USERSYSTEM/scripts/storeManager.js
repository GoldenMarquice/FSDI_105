const KEY = "users";


function saveUser(user) {
    let userArray = readUsers();// getting usersList
    userArray.push(user);// adding a new user
    let val = JSON.stringify(userArray) // IT PARSE THEobj into the string
    localStorage.setItem(KEY, val); // this send the val to the LS
    console.log("The user was sent the LS");
}

function readUsers() {

    let data = localStorage.getItem(KEY); // it gets from LS the data under "users"

    if (!data) { //Not data?
        // if you get here it means
        return []; // createing the array
        //console.log("the LS is empty");
    } else {
        let userList = JSON.parse(data);// parse the string back into obj
        return userList;
        //console.log("The LS has data");
    }
}