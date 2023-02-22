//adds a variable (var for short) and saves the form in it...
var form = document.querySelector("#login_form");

//stuff that includes adding a variable and makes a list of user emails that will be accepted...
var users = [
    {
        username: 'Uncle Bedless',
        email: 'deanheins12@gmail.com',
        password: 'pass1234'
    }
];

//add's an event listener that will prevent the default application and switch to another on next rows.
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    var email = form.querySelector('#email').value;
    var password = form.querySelector('#password').value;

    if(!email || !password){
        alert('Make sure to fill out the full form.');
        return false;
    }

    if(!users.includes(email.toLowerCase())){
        alert('NO ACCESS, LEAVE MY DOMAIN TRESPASER 😠 ');
        return false;
    }

    
    
    // Find the user object that has an email equal to the value of the email input field
    // If a user exists, we need to compare the password in the password field with the user's password
    // If the passwords do not match, we return false and error.


      alert("Succesful login! :)");
}
);