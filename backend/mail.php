<?php

require_once('/mailClass.php');       // to run functions from "model/mailCLass.php"

$mail = new Mail($_POST["email"]);
$mail->sendMail($mail->getMail());

header('location: index.php');     // Go to page "view/contact.php"