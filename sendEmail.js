// Your code to validate your form and send the email will go here!
// All Fields are required for submission
// Make sure the Password and Confirm Password Match

// Let the user know if the passwords to not match
// Also let the user know when the email has been successfully sent

document.addEventListener('DOMContentLoaded', () => {

    emailjs.init("user_pZiCoRhQMfMTN9YjjbTdw");

    const   form = document.querySelector('form'), 
            errorMsg = document.querySelector('.error'),
            successMsg = document.querySelector('.success');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = {};
        for(let [key, value] of new FormData(e.target).entries()){
            data[key] = value;
        }
        console.log(data)
        if(data["pasword2"] != data["password"]){
            errorMsg.innerHTML = "The passwords do not match. Please try again.";
        }else{
            emailjs.sendForm('service_brx8wge', 'template_dpe991f', e.target)
            .then(function() {
                errorMsg.innerHTML = '';
                successMsg.innerHTML = "Email successfully sent.";
            }, function(error) {
                errorMsg.innerHTML = "Sending email failed! Please try again.";
            });
        }
    })

})