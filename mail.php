<?php
$to = "car34cash@mail.ru"; // емайл получателя данных из формы
$tema = "Заявка с сайта ЖК Кислород"; // тема полученного емайла
$message = "Номер телефона: 8".$_POST['requiPhone']."<br>"; //полученное из формы name=requiPhone
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
 //отправляет получателю на емайл значения переменных


 if (mail($to, $tema, $message, $headers))
 {
	 echo '<script>
		 location.href= "/";
	 </script>';
 } else {
	 echo '<script>
		 errorSendMail();
	 </script>';
 }
?>