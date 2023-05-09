<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5953230523:AAFVtyq-kZbDiLL9zUuHgc585C7J9LXy-Do";

//Сюда вставляем chat_id
$chat_id = "-923288912";

//Определяем переменные для передачи данных из нашей формы
	$phone = ($_POST['requiPhone']);	
	if($_POST['btnName'] == 'call') {
		$typeform = 'Обратный звонок';
	} elseif($_POST['btnName'] == 'presentation') {
		$typeform = 'Скачать презентацию';
	} elseif($_POST['btnName'] == 'price') {
		$typeform = 'Планировки и цены';
	} elseif ($_POST['btnName'] == 'record') {
		$typeform = 'Запись на показ';
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