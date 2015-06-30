<?php
/**
 * Created by PhpStorm.
 * User: Siddhant Mehta
 * Date: 1/3/2015
 * Time: 8:45 PM
 */
if(file_exists("DatabaseConnection.php"))
{
    include("AdminLoginForm.php");
}
else
{
    include("InstallationForm.php");
}
?>