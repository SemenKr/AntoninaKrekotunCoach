<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// от кого 
$mail->setFrom('samkrekotyn@gmail.com', 'Sam');
// кому 
$mail->addAddress('samkrekotun@gmail.com', 'Sam');
// тема
$mail->Subject = 'test email';

$hand = "Правая";
if($_POST['hand'] == "left") {
	$hand = "Левая"ж
}

$body = '<h1>Заголовок</h1>'

$mail->Body = $body;

if(!$mail->send()) {
	$message = 'Ошибочка';
} else {
	$message = 'Данные ушли';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>