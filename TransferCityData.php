<?php
try
{
$c=new PDO("mysql:host=127.0.0.1;dbname=uecphpprojectdb","uecphpprojectu","uecphpprojectp");
$c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$ps=$c->prepare("delete from city");
$ps->execute();
$ps=$c->prepare("delete from state");
$ps->execute();
$rs=$c->query("select distinct state from citydata order by state");
$x=1;
$y=1;
foreach($rs as $row)
{
print "1\r";
$state=$row["state"];
print "2\r";
$ps1=$c->prepare("insert into state values (?,?)");
print "3\r";
$ps1->bindParam(1,$x);
print "4\r";
$ps1->bindParam(2,$state);
print "5\r";
$ps1->execute();
print "6\r";
$rs1=$c->query("select city_name from citydata where state='$state' order by city_name");
print "7\r";
	foreach($rs1 as $row1)
	{
	    	$city=$row1["city_name"];
	    	$ps2=$c->prepare("insert into city values (?,?,?)");
		$ps2->bindParam(1,$y);
		$ps2->bindParam(2,$city);
		$ps2->bindParam(3,$x);
		$ps2->execute();
		$y++;
	}
$x++;
}
$c=null;
print "Done";
}catch(PDOException $pe)
{
print $pe->getMessage();
}
catch(Exception $e)
{
print $e->getMessage();
}
?>