<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6271648730:AAG-gHMA6cM9_avNVXmPWf7Vllk3lARzMqg";

//Сюда вставляем chat_id
$chat_id = "-901713040";

//Определяем переменные для передачи данных из нашей формы
	/* $phone = ($_POST['requiPhone']);	
	if($_POST['btnName'] == 'call') {
		$typeform = 'Обратный звонок';
	} elseif($_POST['btnName'] == 'presentation') {
		$typeform = 'Скачать презентацию';
	} elseif($_POST['btnName'] == 'price') {
		$typeform = 'Планировки и цены';
	} elseif ($_POST['btnName'] == 'record') {
		$typeform = 'Запись на показ';
	} */

	if ($_POST['requiPhonePresentation']) {
		$phone = ($_POST['requiPhonePresentation']);
		$typeform = 'Скачать презентацию';
	} elseif ($_POST['requiPhoneCall']) {
		$phone = ($_POST['requiPhoneCall']);
		$typeform = 'Обратный звонок';
	} elseif ($_POST['requiPhoneLayout']) {
		$phone = ($_POST['requiPhoneLayout']);
		$typeform = 'Планировки и цены';
	}

	//Собираем в массив то, что будет передаваться боту
	$arr = array(
			'Форма:' => $typeform,
			'Телефон:' => $phone
	);


//Настраиваем внешний вид сообщения в телеграме
   foreach($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
   };

//Передаем данные боту
   $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
   if ($sendToTelegram) {
		header('location: /');
	} else {
			echo '<script>
				errorSendMail();
			</script>';
	}
?>