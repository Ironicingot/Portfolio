<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // Check if data is valid
    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($subject) OR empty($message)) {
        // Handle error here
        echo "Please complete the form and try again.";
        exit;
    }

    // Recipient email
    $recipient = "seandoesbiz@gmail.com";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to a thank-you page or display a success message
    echo "Thank you! Your message has been sent.";
}
?>
