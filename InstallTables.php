<?php
//error_reporting(E_NOTICE |E_PARSE | E_ERROR | E_WARNING);
//error_reporting(E_ERROR);
/**
 * Created by PhpStorm.
 * User: Siddhant Mehta
 * Date: 12/20/2014
 * Time: 11:17 PM
 */
include 'InstallDO.php';
if(isset($_POST["serverName"]))
{
    $serverName=$_POST["serverName"];
    $databaseName=$_POST["databaseName"];
    $username=$_POST["username"];
    $password=$_POST["password"];
    $adminUsername=$_POST["adminUsername"];
    $adminPassword=$_POST["adminPassword"];
    $adminName=$_POST["adminName"];
}
else
{
    $serverName=$_GET["serverName"];
    $databaseName=$_GET["databaseName"];
    $username=$_GET["username"];
    $password=$_GET["password"];
    $adminUsername=$_GET["adminUsername"];
    $adminPassword=$_GET["adminPassword"];
    $adminName=$_GET["adminName"];
}
if(InstallDO::install($serverName,$databaseName,$username,$password,$adminUsername,$adminPassword,$adminName))
{
    ?>
    {
    "success" : true,
    "message" : "Installation  complete."
    }
    <?php
}
else
{
   ?>
   {
    "success" : false,
    "message" : "Invalid database details."
    }
    <?php
}
?>