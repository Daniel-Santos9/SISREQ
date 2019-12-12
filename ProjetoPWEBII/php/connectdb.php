<?php 
define("HOSTNAME","localhost");
define("USERNAME","root");
define("PASSWORD","123");
define("DATABASE","sisque");

$dbhandle=new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE) or die("Unable to Connect DB");

?>
