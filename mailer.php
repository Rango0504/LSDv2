<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'lucassilent.lsd@gmail.com';                     //SMTP username
    $mail->Password   = 'luc@sSilentDisco420';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $subject=$_REQUEST["subject"];
    $body=$_REQUEST["body"];
    $telephone=$_REQUEST["telephone"];
    $emailAdress=$_REQUEST["email"];

    //Recipients
    $mail->setFrom('lucassilent.lsd@gmail.com', 'Mailer');
    $mail->addAddress('lucassilent.lsd@gmail.com', 'LSD');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $body . "<br>Numer telefonu: " . $telephone . "<br>E-mail: " . $emailAdress;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
// captcha
$response = $_POST["g-recaptcha-response"];
$url = 'https://www.google.com/recaptcha/api/siteverify';
//validation
$data = array(
    'secret' => '6Lc5sKMeAAAAAKwezuwEKNrsdOOcj_DNzW7dBiN6',
    'response' => $_POST["g-recaptcha-response"]
);

$options = array(
    'http' => array (
        'method' => 'POST',
        'content' => http_build_query($data)
    )
);

$context  = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$captcha_success=json_decode($verify);

if ($captcha_success->success==false) {
    echo "false";
} else if ($captcha_success->success==true) {
    echo "true";
}

if ($captcha_success->success==false) {
    echo "Captcha wrong";
} else if ($captcha_success->success==true) {

if(!$mail->send()) {
    echo 'Message sent!';
} else {
    echo 'Error!';
}
}
