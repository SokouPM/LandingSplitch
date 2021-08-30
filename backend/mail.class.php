<?php

class Mail
{
    private $mail;

    function __construct($mail)
    {
        $this->mail = $mail;
    }

    public function getMail()
    {
        return $this->mail;
    }

    public function sendMail($mail)
    {

        $mail = [
            "mail"    => htmlspecialchars(strtolower($mail), ENT_QUOTES, 'UTF-8'),             // strtolower : lowercase all letters
                                                                                                 // htmlspecialchars : remove html tags
        ];

        $header = "MIME-Version: 1.0\r\n";
        $header .= 'From:"Page d\'inscription Splitch" <noreply@splich.fr>' . "\n";
        $header .= 'Content-Type:text/html; charset="uft-8"' . "\n";
        $header .= 'Content-Transfer-Encoding: 8bit';

        $mailText = '
                    <div align="left">
                        ' . nl2br($mail["mail"]) . ' est intéréssé(e) par l\'application !
                    </div>
                    <br />
                    <div align="center">
                        <u>Envoyé depuis splitch.fr</u>
                    </div>
            ';  // nl2br : take line breaks into account

        mail("gb@kubewebagence.com", "Nouvelle demande d'inscription Splitch", $mailText, $header);
    }
}