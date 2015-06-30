<?php
/**
 * Created by PhpStorm.
 * User: Siddhant Mehta
 * Date: 1/5/2015
 * Time: 5:21 PM
 */
include ("OperatorDO.php");
$operatorDO=new OperatorDO();
$operators=$operatorDO->getAll();
$x=0;
$c=count($operators);
print "[";
while($x<$c)
{
    $operator=$operators[$x];
    $isBlocked=($operator->isBlocked)?"true":"false";
    print "{";
    print "\"username\":\"$operator->username\",";
    print "\"password\":null,";
    print "\"employeeId\":\"$operator->employeeId\",";
    print "\"name\":\"$operator->name\",";
    print "\"isBlocked\":\"$isBlocked\"";
    if($x<$c-1)
    {
        print "},";
    }
    else{
print "}";
    }
    $x++;
}
print "]"
?>