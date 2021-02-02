<?php 
require_once './login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if($conn->connect_error) die("Fatal Error");

if(!empty(($_POST['fname'])) &&
    !empty(($_POST['name'])) &&
    !empty(($_POST['email'])) &&
    !empty(($_POST['message'])) ) {

        $fname = mysql_entities_fix_string($conn, $_POST['fname']);
        $name =  mysql_entities_fix_string($conn, $_POST['name']);
        $email = mysql_entities_fix_string($conn, $_POST['email']);
        $message =  mysql_entities_fix_string($conn, $_POST['message']);

        $query = "INSERT INTO prospects VALUES" . "('$fname','$name','$email','$message')";
        $result = $conn->query($query); //outputs the customers table
        if(!$result) die("Database access failed");
        
    }
else {
    $fname = "(Not Entered)";
    $name = "(Not Entered)";
    $email = "(Not Entered)";
    $message = "(Not Entered)";
}

echo file_get_contents('./htmlsubmit.html');

$result->close();
$conn->close();

?>

