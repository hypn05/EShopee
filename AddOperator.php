<?php
/**
 * Created by PhpStorm.
 * User: Siddhant Mehta
 * Date: 1/8/2015
 * Time: 7:04 PM
 */
include("OperatorDO.php");
$username=$_POST["username"];
$password=$_POST["password"];
$employeeId=$_POST["employeeId"];
$name=$_POST["name"];
$isBlocked=$_POST["isBlocked"];
if(strcmp($isBlocked,"true")==0)
{
    $isBlocked=true;
}
else{
    $isBlocked=false;
}
$operator=new Operator();
$operator->username=$username;
$operator->password=$password;
$operator->name=$name;
$operator->employeeId=$employeeId;
$operator->isBlocked=$isBlocked;
$operatorDO=new OperatorDO();
try {
    $operatorDO->add($operator);
    ?>
    {
    "successful":true,
    "message":"Operator added"
    }
<?php
}catch(DOException $doException)
{
    print "{";
    print "\"successful\":false,";
    print "\"message\":\"".$doException->__toString()."\"";
    print "}";
}
?>