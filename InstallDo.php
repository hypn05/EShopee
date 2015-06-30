<?php
/**
 * Created by PhpStorm.
 * User: Siddhant Mehta
 * Date: 12/20/2014
 * Time: 11:19 PM
 */
include 'AdminDO.php';
class InstallDO
{
    /**
     * @param $serverName
     * @param $databaseName
     * @param $username
     * @param $password
     * @param $adminUsername
     * @param $adminPassword
     * @param $adminName
     * @return bool
     */
    static function install($serverName, $databaseName, $username,$password,$adminUsername,$adminPassword,$adminName)
    {
        $done=true;
       try{
           $c=new PDO("mysql:host=$serverName;dbname=$databaseName",$username,$password);
           $c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
           $sql=file_get_contents("sql/tableScript.sql");
          // $c->exec($sql);
           $c=null;
           $f=fopen("DatabaseConnection.php","w");
           fputs($f,"<?php\r");
           fputs($f,"class DatabaseConnection\r{\r");
           fputs($f,"public static function getConnection()\r{\r");
           fputs($f,"$"."c=null;\r");
           fputs($f,"try{\r");
           fputs($f,"$"."c=new PDO(\"mysql:host=$serverName;dbname=$databaseName\",\"$username\",\"$password\");\r");
           fputs($f,"$"."c->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);\r");
           fputs($f,"}catch(PDOException $"."pe)\r{\r");
           fputs($f,"return null;\r");
           fputs($f,"}\r");
           fputs($f,"catch(Exception $"."e)\r{\r");
           fputs($f,"return null;\r");
           fputs($f,"}\r");
           fputs($f,"return $"."c;\r");
           fputs($f,"}\r");
           fputs($f,"}\r");
           fputs($f,"?>");
           fclose($f);
print "jdjdkf";
           $admin=new Admin();
           $admin->username=$adminUsername;
           $admin->password=$adminPassword;
           $admin->name=$adminName;
           $adminDO=new AdminDO();
           $adminDO->create($admin);

       }catch(PDOException $pe)
       {
           //print $pe->getMessage();
           $done=false;
       }
        catch(Exception $e)
        {
//            print $e;
              $done=false;
        }
            return $done;
    }
}
?>