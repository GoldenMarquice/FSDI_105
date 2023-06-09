function displayUsers(usersArray) {
    // console.log(usersArray, "users Array");
    let tr = "";
    const TABLE = document.getElementById("userTable");

    for (let i = 0; i < usersArray.length; i++) {
        let user = usersArray[i];
        tr += ` 
        <tr id="${user.id}" class="table-row">
        <td>${user.email}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.pNumber}</td>
        <td>${user.pMethod}</td>
        <td>${user.color}</td>
    </tr>
    `;
    }
    TABLE.innerHTML = tr;


}

// go to the pet salon project and display the user in the table



function init() {

    let users = readUsers();
    displayUsers(users);

}

window.onload = init;