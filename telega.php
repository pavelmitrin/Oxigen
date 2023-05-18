<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6147118060:AAEvEXBVlHiI9h0GxedLwGo-nexcfRMteac";

//Сюда вставляем chat_id
$chat_id = "-984435955";

//Определяем переменные для передачи данных из нашей формы
	if (!empty($_POST['requiPhonePresentation'])) {
		$phone = ($_POST['requiPhonePresentation']);
		$typeform = 'Скачать презентацию';
	} elseif (!empty($_POST['requiPhoneCall'])) {
		$phone = ($_POST['requiPhoneCall']);
		$typeform = 'Обратный звонок';
	} elseif (!empty($_POST['requiPhoneLayout'])) {
		$phone = ($_POST['requiPhoneLayout']);
		$typeform = 'Планировки и цены';
	}

	//Собираем в массив то, что будет передаваться боту
	$arr = array(
			'Форма:' => $typeform,
			'Телефон:' => $phone
	);

$txt = '';
//Настраиваем внешний вид сообщения в телеграме
   foreach($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
   };

//Передаем данные боту
   $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
   if ($sendToTelegram) {
		header('location: http://zhk-kislorod.com/');
	} else {
		header('location: http://zhk-kislorod.com/');
	}
?>