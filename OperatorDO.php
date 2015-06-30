<?php
/**
 * Created by PhpStorm.
 * User: Siddhant Mehta
 * Date: 1/5/2015
 * Time: 5:16 PM
 */
include ("DOException.php");
include ("Operator.php");
include ("DatabaseConnection.php");
class OperatorDO
{
    public function add($operator)
    {
        $c=DatabaseConnection::getConnection();
        try{
            $ps=$c->prepare("select username from operator where username=?");
            $ps->bindParam(1,$operator->username);
            $ps->execute();
            $row =$ps->fetch(PDO::FETCH_ASSOC);
            if($row)
            {
                $c=null;
                throw new DOException("Username exists");
            }
            $ps=$c->prepare("select username from operator where employee_id=?");
            $ps->bindParam(1,$operator->employeeId);
            $ps->execute();
            $row=$ps->fetch(PDO::FETCH_ASSOC);
            if($row)
            {
                $c=null;
                throw new DOException("Employee Id. exists");
            }
            $ps=$c->prepare("insert into operator values(?,md5(?),?,?,?)");
            $ps->bindParam(1,$operator->username);
            $ps->bindParam(2,$operator->password);
            $ps->bindParam(3,$operator->employeeId);
            $ps->bindParam(4,$operator->name);
            $vIsBlocked=($operator->isBlocked)?1:0;
            $ps->bindParam(5,$vIsBlocked);
            $ps->execute();
            $c=null;
        }catch(PDOException $pe)
        {
            print $pe->getMessage();
        }
        catch(DOException $doException)
        {
            throw $doException;
        }
        catch(Exception $e)
        {
            print $e->getMessage();
        }
    }
    public function getAll()
    {
     $c=DatabaseConnection::getConnection();
        try
        {
            $rs=$c->query("select username,employee_id,name,is_blocked from operator order by name");
            $operators=[];
            $x=0;
            foreach($rs as $row)
            {
                $operator=new Operator();
                $operator->username=trim($row["username"]);
                $operator->employeeId=trim($row["employee_id"]);
                $operator->name=trim($row["name"]);
                $operator->isBlocked=$row["is_blocked"];
                $operators[$x]=$operator;
                $x++;
            }
            $c=null;
            return $operators;
        }catch(PDOException $pe)
        {
            print $pe->getMessage();
        }
        catch(Exception $e)
        {
            print $e->getMessage();
        }

    }
}
?>