<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Replace with your own email address
    $to = "info.hireforit@gmail.com";

    // Extract form fields
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // Validate form fields
    if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Build email message
    $email_message = "Name: $name\n\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message: $message\n\n";

    // Set email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        http_response_code(200);
        echo "Thank you for contacting us!";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
