var form = document.querySelector("#login_form");
var users = [
    'deanheins12@gmail.com',
    'deanheins11@outlook.com',
];

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


      alert("Succesful login! :)");
}
);