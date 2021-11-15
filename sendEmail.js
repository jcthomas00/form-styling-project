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
            document.querySelector('#container').style.transform = 'translateX(2000px)';

            emailjs.sendForm('service_brx8wge', 'template_dpe991f', e.target)
            .then(function() {
                errorMsg.innerHTML = '';
                successMsg.innerHTML = "Email successfully sent.";
                document.querySelector('#success-container').style.transform = 'translateX(0px)';
            }, function(error) {
                errorMsg.innerHTML = "Sending email failed! Please try again.";
                document.querySelector('#container').style.transform = 'translateX(0px)';
            });
        }
    })
})