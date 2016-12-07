<?php

// DB credentials
$host = "localhost";
$username = "";
$password = "";
$database = "";
$table = "";


// form fields
$name = $_POST['name'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip_code = $_POST['zip_code'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$profession = $_POST['profession'];
$age_range = $_POST['age_range'];
$reason_for_inquiry = $_POST['reason_for_inquiry'];
$message = $_POST['message'];
$receive_emails = $_POST['receive_emails'];
$regards_to_inquiry = $_POST['regards_to_inquiry'];
$new_product_releases = $_POST['new_product_releases'];


// open db connection
$conn = new mysqli($host, $username, $password, $database);
if($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


// insert fields
$sql = "INSERT INTO " . $table . "
        (name, address, city, state, zip_code, email, phone_number, profession, age_range,
        reason_for_inquiry, message, receive_emails, regards_to_inquiry, new_product_releases) 
        VALUES (
          '" . $name . "', 
          '" . $address . "',
          '" . $city . "',
          '" . $state . "',
          '" . $zip_code . "',
          '" . $email . "',
          '" . $phone_number . "',
          '" . $profession . "',
          '" . $age_range . "',
          '" . $reason_for_inquiry . "',
          '" . $message . "',
          '" . $receive_emails . "',
          '" . $regards_to_inquiry . "',
          '" . $new_product_releases . "'
        )";


// check if success
if($conn->query($sql) === TRUE) {
  echo "New Record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


// close db connection
$conn->close();


/*
  Email script to send to admin and user
*/
//Email information
/*
$admin_email = "support@protocolequipment.com";
$email = $_REQUEST['email'];
$subject = "Thanks For Visiting ProtocolEquipment.com";
$message = $_REQUEST['message'];

//send email
mail($admin_email, $subject, $message, "From:" . $email);
*/

?>
