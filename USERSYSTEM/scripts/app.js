// create an object constructor for User
function User (email,password, firstName, lastName, age, address, phoneNumber, pMethod, color){
    // this.username;

    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName =lastName;
    this.age =age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.paymentMethod = paymentMethod;
    this.color = color;
}

// get the inputs from the HTML using jQuery
let inputEmail = $("#email");
let inputPassword = $('#password');
let inputFirstName = $('#firstName');
let inputLastName = $('#lastName');
let inputAge = $('#age');
let inputAddress = $('#address');
let inputPhoneNumber = $('#phoneNumber');
let inputPaymentMethod = $('#paymentMethod');
let inputColor = $('#color');

// create the register function 
function register(){
    // create newUser
let newUser = new User (inputEmail.val(), inputPassword.val(), inputFirstName.val(),
inputLastName.val(), inputAge.val(), inputAddress.val(), inputPhoneNumber.val(), inputPaymentMethod.val(),
inputColor.val() );

saveUser(newUser);//This fn is under the storeManager

    // display the user on the console 

    console.log(newUser);
}

function init(){
    // hook events
    // $('#btnAdd').onclick(register);
    $("#btnAdd").on('click',register);
    $('input').on('mouseover',function(){
        $(this).css({'background-color':'#dedede'});
        //console.log("mouse over the inputs")
    })
    $('input').on('mouseleave',function(){
        $(this).css({'background-color':'white'});
        //console.log("mouse over the inputs")//
    })
    //challenge if the mouse is over the header section change the color of the main

    $('header').on('mouseover', function(){
        $('main').css({'color': 'green'});
    })
}



// add the on click event on the button (register.html)

window.onload=init;