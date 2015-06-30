<!doctype html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <link type="text/css" rel="stylesheet" href="styles/styles.css" />
    <link type="text/css" rel="stylesheet" href="styles/common.css" />
    <script type="text/javascript" src="js/Common.js"></script>
    <script type="text/javascript" src="js/AdminModules.js"></script>
    <script type="text/javascript" src="js/Installation.js"></script>
</head>
<body>
<h3>Installation</h3>
<form id="installationForm">
    <table>
        <tr>
            <td>Server Name</td>
            <td><span id="serverNameError" class="validationError"><img src="images/errorIcon.png"></span><input type="text" id="serverName" name="serverName" maxlength="15"></td>
        </tr>
        <tr>
            <td>Database Name</td>
            <td><span id="databaseNameError" class="validationError"><img src="images/errorIcon.png"></span><input type="text" id="databaseName" name="databaseName" maxlength="15"></td>
        </tr>
        <tr>
            <td>Username</td>
            <td><span id="usernameError" class="validationError"><img src="images/errorIcon.png"></span><input type="text" id="username" name="username" maxlength="15"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><span id="passwordError" class="validationError"><img src="images/errorIcon.png"></span><input type="text" id="password" name="password" maxlength="15"></td>
        </tr>
        <tr>
            <td>Admin Username</td>
            <td><span id="adminUsernameError" class="validationError"><img src="images/errorIcon.png"></span><input type="text" id="adminUsername" name="adminUsername" maxlength="15"></td>
        </tr>
        <tr>
            <td>Admin Password</td>
            <td><span id="adminPasswordError" class="validationError"><img src="images/errorIcon.png"></span><input type="text" id="adminPassword" name="adminPassword" maxlength="15"></td>
        </tr>
        <tr>
            <td>Admin Name</td>
            <td><span id="adminNameError" class="validationError"><img src="images/errorIcon.png"></span><input type="text" id="adminName" name="adminName" maxlength="15"></td>
        </tr>
        <tr>
            <td colspan="2"><input type="button" value="Install" id="installButton" onclick="submitInstallationForm()"></td>
        </tr>
    </table>
</form>
</body>
</html>