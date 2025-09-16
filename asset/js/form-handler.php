<?php
// Debugging helpers (disable on production)
error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName   = htmlspecialchars($_POST['first_name']);
    $lastName    = htmlspecialchars($_POST['last_name']);
    $email       = htmlspecialchars($_POST['email']);
    $phone       = htmlspecialchars($_POST['phone']);
    $location    = htmlspecialchars($_POST['location'] ?? '');
    $reason      = htmlspecialchars($_POST['reason'] ?? '');
    $contactPref = htmlspecialchars($_POST['contact_pref'] ?? '');
   

    // Recipient (your email)
    $to = "appointment@rmc.md";

    // Email subject
    $subject = "New Appointment Request from $firstName $lastName";

    // Email body
    $message = "
    New Appointment Request:

    Name: $firstName $lastName
    Location: $location
    Email: $email
    Phone: $phone
    Preferred Contact: $contactPref

    Reason:
    $reason
    ";

    // Headers
    // $headers  = "From: no-reply@rmc.md\r\n";
    // $headers .= "Reply-To: $email\r\n";
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: RMC Appointments <no-reply@rmc.md>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Try sending email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Email failed to send."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
