/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        message :document.getElementById("message").value,
    }
    emailjs.send("service_16se6ex","template_56dtdxd",parms).then(alert("Email has been sent"));
}

// This file is intentionally blank
// Use this file to add JavaScript to your project