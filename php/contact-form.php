<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = sanitizeInput($_POST["firstName"]);
    $lastName = sanitizeInput($_POST["lastName"]);
    $email = sanitizeInput($_POST["email"]);
    $phoneNumber = sanitizeInput($_POST["phoneNumber"]);
    $message = sanitizeInput($_POST["message"]);

    if (empty($firstName) || empty($lastName) || empty($email) || empty($phoneNumber) || empty($message)) {
        http_response_code(400); // "Bad Request"
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email address.";
        exit;
    }

    $to = "fergusontbs@gmail.com";
    $subject = "Personal Website Form Submission";
    $message = "First Name: " . $firstName . "\n"
            . "Last Name: " . $lastName . "\n"
            . "Email: " . $email . "\n"
            . "Message: " . $message;
    
    $headers = "Form: " . $email . "\r\n"
            . "Reply-To: " . $email . "\r\n"
            . "X-Mailer: PHP/" . phpversion();
    
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        http_response_code(200); // OK
        echo "Form submitted successfully!";
        exit;
    } else {
        // Email failed to send
        http_response_code(500); // Internal Server Error
        echo "Failed to send email. Please try again later.";
        exit;
    }

    // Send a success response
    http_response_code(200); // OK
    echo "Form submitted successfully!";
    exit;
}

function sanitizeInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}
?>