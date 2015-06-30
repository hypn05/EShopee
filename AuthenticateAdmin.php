<?php
/**
 * Created by PhpStorm.
 * User: Siddhant Mehta
 * Date: 12/23/2014
 * Time: 8:27 PM
 */
//error_reporting(E_ERROR);
include 'AdminDO.php';
if(isset($_POST["username"]))
{
$username=$_POST["username"];
$password=$_POST["password"];
}
if(isset($_GET["username"]))
{
    $username=$_GET["username"];
    $password=$_GET["password"];
}

$admin=new Admin();
$admin->username=$username;
$admin->password=$password;
$adminDO=new AdminDO();
$valid=$adminDO->authenticate($admin);
if($valid)
{
    ?>
{
    "success" : true,
    "message" : "Valid Username/password"
    }
<?php
}
else
{
?>
{
    "success" : false,
    "message" : "Invalid Username/password"
    }
<?php
}
?>
