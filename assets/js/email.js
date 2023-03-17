// let password;
// fetch('forms/pass.php')
//   .then(response => response.json())
//   .then(data => {
//     password = data.password;
//     // Use the password variable in your front-end code
//   })
//   .catch(error => console.error("error fetch:-", error));
function sendEmail() {
    Email.send({
        // Host: "smtp.elasticemail.com",
        // Username: "info.hireforit@gmail.com",
        // Password: "39D0633A64D053CE3687DA5AABB88B5D540F",
        // SecureToken: password,
        SecureToken: "2c1910ca-6cfb-4bbb-9dd1-d394d7dd06a2",
        To: 'info.hireforit@gmail.com',
        From: 'info.hireforit@gmail.com',
        Subject: document.getElementById('subject').value,
        Body: "Name: " + document.getElementById('name').value
            + "<br> Email: " + document.getElementById('email').value
            + "<br> Message: " + document.getElementById('message').value
    }).then(
        message => alert("Message sent successfully!")
    ).catch(error => console.error("error function:-", error));
}