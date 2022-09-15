
function send(){

    var templateParams = {
        to_name: 'Rawan :)',
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
     
    emailjs.send('service_0ntavd6', 'template_zzyff8a', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    
}