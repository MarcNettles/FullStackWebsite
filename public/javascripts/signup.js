    // Marc Nettles 06/27/2022
    //
    // The intent of this project is to set up my own private
    // web server which will host my public website containing
    // my coding and webdev projects.
    //
    //
    // Things I want to use: Back-end/Front-end separation, Bootstrap, NodeJS, ExpressJS, EJS, maybe try some reactJS


    /* signup.js handles the javascript behind opening the modal with the function openModal(). */



    /* This function name is a bit awkward, because it isn't opening the modal, but rather code which is run when the modal
        has been opened. It primarily handles checking the password to make sure it conforms to the rules we set (like minimum length
        and including a number, etc) */

document.addEventListener('DOMContentLoaded', function () {
    // Buttons to add listeners to for calls to functions
    const signUpButton = document.getElementById('signUpButton');
    const modalSignUpButton = document.getElementById('modalSignUpButton');

    // Add listener for clicking sign up button
    signUpButton.addEventListener('click', openModal);
    modalSignUpButton.addEventListener('click', onClickFunction);
    


    document.getElementById('signup_form_login').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username-signin').value;
        const password = document.getElementById('password-signin').value;
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Process the server's response
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function openModal() { 

        var userName = document.getElementById("uname");
        var myInput = document.getElementById("psw");
        var confirmMyInput = document.getElementById("cpsw");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");    
        var match = document.getElementById("match");


        // When the user starts to type something inside the password field
        myInput.onkeyup = function() {
            
            var lowerCaseLetters = /[a-z]+/g;   // regular experssion for lowerCaseLetters
            var upperCaseLetters = /[A-Z]+/g;   // regular experssion for upperCaseLetters
            var numbers = /[0-9]+/g;            // regular experssion for digits
            var minLength = 8;                  // minimum password length
            

            
            
            
            //console.log(letter.classList)

            // Validate lowercase letters
            if(myInput.value.match(lowerCaseLetters)) {             
                letter.classList.remove("invalid", "invalid:before"); 
                letter.classList.add("valid", "valid:before"); 
            } else {
                letter.classList.remove("valid", "valid:before"); 
                letter.classList.add("invalid", "invalid:before"); 
            }

            // Validate capital letters        
            if(myInput.value.match(upperCaseLetters)) { 
                capital.classList.remove("invalid", "invalid:before"); 
                capital.classList.add("valid", "valid:before");
            } else {
                capital.classList.remove("valid", ".valid:before");
                capital.classList.add("invalid", "invalid:before");
            }

            // Validate numbers        
            if(myInput.value.match(numbers)) { 
                number.classList.remove("invalid", "invalid:before"); 
                number.classList.add("valid", "valid:before"); 
            } else {
                number.classList.remove("valid", "valid:before"); 
                number.classList.add("invalid", "invalid:before");
            }

            // Validate length
            if(myInput.value.length >= minLength) {
                length.classList.remove("invalid", "invalid:before");
                length.classList.add("valid", "valid:before");
            } else {
                length.classList.remove("valid", "valid:before");
                length.classList.add("invalid", "invalid:before");
            }
            
        }
        
        // This just changes the color of the conditions the password must meet before the submit button is activated
        // and then it activates the submit button if those conditions are met.
        confirmMyInput.onkeyup = function() {
                    // Validate password and confirmPassword
                    var passEqualsConfPass = !((myInput.value<confirmMyInput.value)||(myInput.value>confirmMyInput.value)); 
        
                    if(passEqualsConfPass) { 
                        match.classList.remove("invalid", "invalid:before"); 
                        match.classList.add("valid", "valid:before"); 
                    } else {
                        match.classList.remove("valid", "valid:before"); 
                        match.classList.add("invalid", "invalid:before"); 
                    }        


                    // Disable or Enable the button based on the elements in classList
                    enableButton(letter, capital, number, length, match);
        }
    }


    function enableButton(letter, capital, number, length, match) {

        var button = document.getElementById('modalSignUpButton');
        var condition = ((letter.classList.item(0) == "valid") && (capital.classList.item(0) == "valid") && (number.classList.item(0) == "valid") && (length.classList.item(0) == "valid") && (match.classList.item(0) == "valid") );
        if(condition) {       
                button.disabled = false;
            }        
        }    


    function onClickFunction() {
        
        const username = document.getElementById('uname').value;
        const password = document.getElementById('psw').value;
        const conf_password = document.getElementById('cpsw').value;


        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, conf_password})
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
        .catch(error => {
            console.error('Error', error);
        });
        //alert("Oops! Sign-up is currently under-construction.")
    }
});