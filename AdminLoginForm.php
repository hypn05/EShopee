<!doctype html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="styles/styles.css" />
    <link type="text/css" rel="stylesheet" href="styles/common.css" />
    <script type="text/javascript" src="js/Common.js"></script>
    <script type="text/javascript" src="js/AdminModules.js"></script>
    <script type="text/javascript" src="js/Administrator.js"></script>
</head>
<body>
<h3>Administrator Authentication</h3>
<form id="administratorLoginForm">
    <table>
        <tr>
            <td>Username</td>
            <td><span id="usernameError" class="validationError"><img src="images/errorIcon.png" title="Username required."/></span><input type="text" id="username" name="username" maxlength="15"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><span id="passwordError" class="validationError"><img src="images/errorIcon.png" title="Password required" /></span><input type="text" id="password" name="password" maxlength="15"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="button" value="Login" id="loginButton" onclick="submitAdministratorLoginForm()"></td>
        </tr>
        </table>
    </form>
<form id='administratorHomePageForm' action="/uecproject/AdministratorHomePage.php"></form>
</body>
</html>