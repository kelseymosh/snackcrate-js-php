<!-- Retrieve the Users IP address -->
<?php
echo $_SERVER['HTTP_CLIENT_IP'] ? : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? : $_SERVER['REMOTE_ADDR']);
?>

<!-- //Retrieve the Users Password and username from a POST 
//Salt and hash the password, and then store both the IP, username and password in the database under the table "users".
	//Example Key Value Pair in this post
    //"password"="hacked123"
    //"user"="Bobby Tables"
  //Database Credentials [This is fake please don't expect to actually connect to anything. It is used for the sake of this exercise]:
    //Host: 123.0.0.2
    //Username: snackcrate
    //password: 12345
    //database: TestPurposes -->

<!-- //Write a function to get today's date in this format "2014-02-13 02:42:48" -->
<?php
  date_default_timezone_set("America/Denver");
  $currentDateTime = date('Y-m-d H:i:s');
  echo $currentDateTime;
?>