<?php
die(var_dump("Hola"));
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->name) || !isset($data->email) || !isset($data->phone) || !isset($data->message)) {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'iralajuan099@gmail.com'; // Configura tu email
    $mail->Password = 'nuerkapjxardorap'; // App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom($data->email, $data->name);
    $mail->addAddress('iralajuan099@gmail.com'); // Cambia al email que recibirá los mensajes
    $mail->Subject = 'Mensaje de Contacto: ' . $data->name;
    $mail->Body = "Nombre: {$data->name}\nEmail: {$data->email}\nTeléfono: {$data->phone}\nMensaje: {$data->message}";

    $mail->send();

    echo json_encode(["status" => "success", "message" => "Correo enviado"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
}
?>
