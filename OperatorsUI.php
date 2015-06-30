<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="styles/styles.css"/>
    <link type="text/css" rel="stylesheet" href="styles/common.css" />
    <script type="text/javascript" src="js/Common.js"></script>
    <script type="text/javascript" src="js/AdminModules.js"></script>
    <script type="text/javascript" src="js/OperatorsUI.js"></script
</head>
<body>
<div id="operatorsModuleHeader">
<span class="administratorModuleTitle">Operators</span>
    <span id="operatorsModuleToolStrip">
        <img src="images/addIcon.png" onclick="showAddOperatorWindow()" class="operationIcons" />
        <img src="images/trashIcon.png" onclick="showDeleteOperatorWindow()" class="operationIcons" />
    </span>
    </div>
<table id="operatorsTable">
    <thead>
    <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Employee Id</th>
        <th>Username</th>
        <th>Blocked</th>
    </tr>
    </thead>
    <tbody>

    </tbody>
    </table>
<div id="operatorDivision" class="moduleDivision">
<form id="operatorForm">
    <table>
        <tr>
            <td>Username</td>
            <td><input type="text" id="username" name="username" maxlength="15" size="16"></td>
            <td><img id="usernameError" src="images/errorIcon.png" class="validationError"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="text" id="password" name="password" maxlength="15" size="16"></td>
            <td><img id="passwordError" src="images/errorIcon.png" class="validationError"/></td>
        </tr>
        <tr>
            <td>Name</td>
            <td><input type="text" id="name" name="name" maxlength="30" size="31"></td>
            <td><img id="nameError" src="images/errorIcon.png" class="validationError"/></td>
        </tr>
        <tr>
            <td>Employee Id.</td>
            <td><input type="text" id="employeeId" name="employeeId" maxlength="20" size="21"></td>
            <td><img id="employeeIdError" src="images/errorIcon.png" class="validationError"/></td>
        </tr>
        <tr>
            <td>Block user</td>
            <td><input type="checkbox" id="isBlocked" name="isBlocked"></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="text-align: center"><input type="button" value="Add" onclick="addOperator()"></td>
        </tr>
    </table>
</form>
</div>
</body>
</html>