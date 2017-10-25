<?php                                                                                       
$text = $_POST['text'];
if ($text) {
  $text = htmlspecialchars($text);
  $text .= "<br>";
  file_put_contents("file_1.txt", "HELLO<br>", FILE_APPEND);
  echo file_get_contents("file_1.txt");
} else {
  echo file_get_contents("file.txt");
}
?>
