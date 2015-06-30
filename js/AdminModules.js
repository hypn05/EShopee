/**
 * Created by Siddhant Mehta on 1/3/2015.
 */
function TMException(m)
{
    this.message=m;
    this.toString=function(){
        return this.message;
    };
}
function Administrator()
{
    this.username="";
    this.password="";
    this.name="";
    this.validateType=function(){
        if(typeof this.username!="string") throw new TMException("Administrator object does not contain username as string");
        if(typeof this.password!="string") throw new TMException("Administrator object does not contain password as string");
        if(typeof this.name!="string") throw new TMException("Administrator object does not contain name as string");
    };
}

function AdministratorManager()
{
    this.authenticate=function(administrator,success,failure){
        if(typeof administrator=="undefined") throw new TMException("Administrator object missing in call to authenticate : prototype : authenticate(administrator,success_function,failure_function)");
        if(typeof success=="undefined")throw new TMException("Success function missing in call to authenticate : prototype : authenticate(administrator,success_function,failure_function)");
        if(typeof failure=="undefined") throw new TMException("Failure function missing in call to authenticate : prototype : authenticate(administrator,success_function,failure_function)");
        if(!(administrator instanceof Administrator))  throw new TMException("First argument is not an Administrator type object in call to authenticate : prototype : authenticate(administrator,success_function,failure_function)");
        if(typeof  success!="function") throw new TMException("Second argument is not a success function in call to authenticate : prototype : authenticate(administrator,success_function,failure_function)");
        if(typeof  failure!="function") throw new TMException("Third argument is not a failure function in call to authenticate : prototype : authenticate(administrator,success_function,failure_function)");
        administrator.validateType();

        var ax=getXMLHttpRequest();
        var qs="username="+encodeURI(administrator.username)+"&password="+encodeURI(administrator.password);
        ax.open('POST','AuthenticateAdmin.php',true);
        ax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ax.setRequestHeader("Content-Length",qs.length);
        ax.setRequestHeader("connection","close");
        ax.onreadystatechange=function(){
            if(ax.readyState===4 && ax.status===200)
            {
                var rs=eval("("+ax.responseText+")");
                if(rs.success)
                {
                    success(rs.message);
                }
                else
                {
                    failure(rs.message);
                }
            }
        };
        ax.send(qs);
    };
}
function DatabaseDetails()
{
    this.serverName="";
    this.databaseName="";
    this.username="";
    this.password="";
}
function installationManager()
{
 this.install=function(databaseDetails,administrator){

     var ax=getXMLHttpRequest();
     var qsa="serverName="+databaseDetails.serverName+"&databaseName="+databaseDetails.databaseName+"&username="+databaseDetails.username+"&password="+databaseDetails.password+"&adminUsername="+administrator.username+"&adminPassword="+administrator.password+"&adminName="+administrator.name;
     ax.open('POST','InstallTables.php',true);
     ax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
     ax.setRequestHeader("Content-Length",qs.length);
     ax.setRequestHeader("connection","close");
     ax.onreadystatechange=function(){
         if(ax.readyState===4 && ax.status===200)
         {
             var rs=eval("("+ax.responseText+")");
             if(rs.success)
             {
                 alert(rs.message);
             }
             else
             {
                 alert(rs.message);
             }
         }
     };
     ax.send(qs);
 };
}


function Operator()
{
    this.username="";
    this.password="";
    this.employeeId="";
    this.name="";
    this.blocked=false;
}
function OperatorManager()
{
    this.add=function(operator,success,failure){
        var ax=getXMLHttpRequest();
        var qs="username="+encodeURI(operator.username) +"&password="+encodeURI(operator.password)+"&name="+encodeURI(operator.name) +"&employeeId="+encodeURI(operator.employeeId)+"&isBlocked="+operator.blocked;
        ax.open('POST','AddOperator.php',true);
        ax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ax.setRequestHeader("Content-Length",qs.length);
        ax.setRequestHeader("connection","close");
        ax.onreadystatechange=function()
        {
            if(ax.readyState===4 && ax.status===200)
            {
                var response=eval("("+ax.responseText+")");
                if(response.successful) {
                    success(response.message);
                }
                if(!response.successful) {
                    failure(response.message);
                }
            }
        };
        ax.send(qs);
    };


    this.getAll=function(success,failure){
        var ax=getXMLHttpRequest();
        ax.open('GET','GetOperators.php',true);
        ax.onreadystatechange=function(){
            if(ax.readyState===4 && ax.status===200)
            {
                var response=eval("("+ax.responseText+")");
                success(response);
            }
        };
        ax.send();
    };
}