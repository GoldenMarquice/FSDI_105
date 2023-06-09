function login() {
    console.log("login")
    //get the values from the html inputs
    let inputEmail = $("#email").val();
    let inputPassword = $('#password').val();
    console.log(inputPassword,inputEmail);
    //get the users from the LS

    let users = readUsers();
    console.log(users)

    //for loop to travel the array (we were doing it under users.js)
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
    console.log(user)
    if (inputEmail == user.email && inputPassword == user.password){
        console.log("Welcome");
        alert("Welcome");
        document.getElementById('test').innerHTML = "<p> Welcome </p>";
    }else{
        console.log("Invalid Credentials");
        alert("Invalid Credentials")
        document.getElementById('test').innerHTML= "<p>Invalid Credentials</p>";
    }
    }

    // displays the user on the console

}

// function isValid(){
//     let valid = true;

//     if (usersArray.inputEmail == "")
//     {
//         valid = false;
//         inputEmail.classList.add("error");
//     }
//     if (usersArray.inputPassword == "")
//     {
//         valid = false;
//         inputPassword.classList.add("error");
//     }
//     return valid;
// }

function init() {
    // hook event
    $('#btnLogin').on('click', login);
}



window.onload = init; // wait to render the HTML