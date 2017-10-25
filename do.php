<?php                                                                                       
$text = $_POST['text'];
if ($text) {
  $text = htmlspecialchars($text);
#  $text .= "<br>";
#  file_put_contents("file_1.txt", $text, FILE_APPEND);
  #echo file_get_contents("file_1.txt");
  echo "Welcome ! $text ! Thank you for your visiting.";
} else {
  #echo file_get_contents("file.txt");
  echo "Welcome !";
}
?>
