/**
 * Created by Siddhant Mehta on 1/4/2015.
 */
function submitInstallationForm()
{
    var installationForm=document.getElementById("installationForm");
    var serverName=installationForm.serverName;
    var databaseName=installationForm.databaseName;
    var username=installationForm.username;
    var password=installationForm.password;
    var adminUsername=installationForm.adminUsername;
    var adminPassword=installationForm.adminPassword;
    var adminName=installationForm.adminName;

    var serverNameValue=serverName.value.trim();
    var databaseNameValue=databaseName.value.trim();
    var usernameValue=username.value.trim();
    var passwordValue=password.value.trim();
    var adminUsernameValue=adminUsername.value.trim();
    var adminPasswordValue=adminPassword.value.trim();
    var adminNameValue=adminName.value.trim();

    var serverNameError=document.getElementById("serverNameError");
    var databaseNameError=document.getElementById("databaseNameError");
    var usernameError=document.getElementById("usernameError");
    var passwordError=document.getElementById("passwordError");
    var adminUsernameError=document.getElementById("adminUsernameError");
    var adminPasswordError=document.getElementById("adminPasswordError");
    var adminNameError=document.getElementById("adminNameError");

    if(serverNameValue.length==0)
    {
        serverNameError.style.visibility="visible";
    }
    else
    {
        serverNameError.style.visibility="hidden";
    }

    if(databaseNameValue.length==0)
    {
        databaseNameError.style.visibility="visible";
    }
    else
    {
        databaseNameError.style.visibility="hidden";
    }

    if(usernameValue.length==0)
    {
        usernameError.style.visibility="visible";
    }
    else
    {
        usernameError.style.visibility="hidden";
    }

    if(passwordValue.length==0)
    {
        passwordError.style.visibility="visible";
    }
    else
    {
        passwordError.style.visibility="hidden";
    }

    if(adminUsernameValue.length==0)
    {
        adminUsernameError.style.visibility="visible";
    }
    else
    {
        adminUsernameError.style.visibility="hidden";
    }

    if(adminPasswordValue.length==0)
    {
        adminPasswordError.style.visibility="visible";
    }
    else
    {
        adminPasswordError.style.visibility="hidden";
    }

    if(adminNameValue.length==0)
    {
        adminNameError.style.visibility="visible";
    }
    else
    {
        adminNameError.style.visibility="hidden";
    }

    var databaseDetails=new DatabaseDetails();
    databaseDetails.serverName=serverNameValue;
    databaseDetails.databaseName=databaseNameValue;
    databaseDetails.username=usernameValue;
    databaseDetails.password=passwordValue;
    var administrator=new Administrator();
    administrator.username=adminUsernameValue;
    administrator.password=adminPasswordValue;
    administrator.name=adminNameValue;
    var installationManager=new InstallationManager();
    installationManager.install(databaseDetails,administrator);
}