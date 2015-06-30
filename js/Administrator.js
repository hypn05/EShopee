/**
 * Created by Siddhant Mehta on 1/3/2015.
 */
function submitAdministratorLoginForm()
{
    var administratorLoginForm=document.getElementById("administratorLoginForm");
    var username=administratorLoginForm.username;
    var password=administratorLoginForm.password;
    var usernameValue=username.value.trim();
    var passwordValue=password.value.trim();
    var usernameError=document.getElementById("usernameError");
    var passwordError=document.getElementById("passwordError");
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
    try
    {
        var administrator=new Administrator();
        administrator.username=usernameValue;
        administrator.password=passwordValue;
        var administratorManager=new AdministratorManager();
        administratorManager.authenticate(administrator,administratorLoginFormSubmitted,administratorLoginFormSubmissionFailed);
    }catch(exception)
    {
        showMessageBox("Error",exception.toString());
    }
}
function administratorLoginFormSubmitted(message)
{
    document.getElementById("administratorHomePageForm").submit();
}
function administratorLoginFormSubmissionFailed(message)
{
    showMessageBox("Error",message);
}
