---
layout: default
title: Send Emails Programmatically with PHP and Mailgun
category: PHP
comments: true
---

Here, we will use [Mailgun.com](https://mailgun.com) API

Mailgun is a email service which allows you to send 10000 emails every month for free.

After successfully register an Mailgun account, you should add and active your own domain on the Mailgun Dashboard, or you have to use a sandbox domain and can only send test emails to your own email address. There is a guide on how to active your domain [here](https://help.mailgun.com/hc/en-us/articles/202052074-How-do-I-verify-my-domain)

Then add sending email features in your PHP server, via curl.

The mailgun curl API looks like this:

```
curl -s --user 'api:key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
    https://api.mailgun.net/v3/test.example.com/messages \
    -F from='Mailgun Sandbox <test@test.example.com>' \
    -F to='XXX <example@gmail.com>' \
    -F subject='Hello XXX' \
    -F text='Congratulations XXX, you just sent an email with Mailgun!  You are truly awesome!' 
```

In your PHP server, create a PHP file and type the following code:

```php
<?php

class Mailgun {
    public $key = null;
    public $domain = null;

    public function Mailgun($key, $domain) {
        $this->key = $key;
        $this->domain = $domain;
    }

    public function send($type, $from, $to, $subject, $body) {
        $ch = curl_init();
        //curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($ch, CURLOPT_USERPWD, 'api:'.($this->key));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_URL, 'https://api.mailgun.net/v3/'.($this->domain).'/messages');
        curl_setopt($ch, CURLOPT_POSTFIELDS, array(
            'from' => $from,
            'to' => $to,
            'subject' => $subject,
            $type => $body
        ));
        $j = json_decode(curl_exec($ch));
        curl_close($ch);
        return $j;
    }

    public function sendText($from, $to, $subject, $body) {
        return $this->send('text', $from, $to, $subject, $body);
    }
    public function sendHTML($from, $to, $subject, $body) {
        return $this->send('html', $from, $to, $subject, $body);
    }
}
```

This PHP class encapsulates Mailgun's send email api. To use this API, you should pass your key and activated domain of your mailgun's account when instantiating this Maingun class:

```php

define('MAILGUN_KEY', 'key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
define('MAILGUN_DOMAIN', 'test.example.com');

$mailgun = new Mailgun(MAILGUN_KEY, MAILGUN_DOMAIN);

$from = "test <test@example.com>";
$to = "test2 <test2@example2.com>";

// send an email of plain text
$response1 = $mailgun->sendText($from, $to, "Some subject", "Some Text Message");
// send an email of HTML content
$response2 = $mailgun->sendHTML($from, $to, "Some subject", "<h1>Some HTML Message</h1>");

// Response of the sendXXXX method is a string of JSON data,
// so you may need to parse it to a PHP data structure.
$ response_data = json_encode($response1);

```



