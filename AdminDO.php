<?php
/**
 * Created by PhpStorm.
 * User: Siddhant Mehtau
 * Date: 12/23/2014
 * Time: 8:09 PM
 */
include 'Admin.php';
include 'DatabaseConnection.php';
class AdminDO
{
public function create($admin)
{
    $done=true;
    $c=DatabaseConnection::getConnection();
    try{
              $ps=$c->prepare("insert into administrator values  (?,?,?)");
        $ps->bindParam(1,$admin->username);
        $ps->bindParam(2,$admin->password);
        $ps->bindParam(3,$admin->name);
        $ps->execute();
    }catch(PDOException $pe)
    {
        $done=false;
    }
    catch(Exception $e)
    {
         $done=false;
    }
    $c=null;
    return $done;
}
public function authenticate($admin)
{
    $valid=false;
    $c=DatabaseConnection::getConnection();
    try
    {
        $ps=$c->prepare("select name from administrator where username=? and password=?");
        $ps->bindParam(1,$admin->username);
        $ps->bindParam(2,$admin->password);
        $ps->execute();
        $row=$ps->fetch(PDO::FETCH_ASSOC);
        if($row)
        {
            $admin->name=$row["name"];
            $valid=true;
        }

    }catch(PDOException $pe)
    {
        $valid=false;
    }
    catch(Exception $e)
    {
        $valid=false;
    }
    $c=null;
    return $valid;
}
}
?>