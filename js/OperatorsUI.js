/**
 * Created by Siddhant Mehta on 1/6/2015.
 */
function getOperators()
{
var operatorManager=new OperatorManager();
    operatorManager.getAll(function(operators){
        clearOperatorsTable();
        var operatorsTableBody=document.getElementById("operatorsTable").getElementsByTagName("tbody")[0];
        var operator=null;
        var row=null;
        var col=null;
        var x=0;
        while(x<operators.length)
        {
            operator=operators[x];
            row=operatorsTableBody.insertRow(x);
            row.className="notSelectedRow";


            (function(selectedRow){
                row.addEventListener("click",function(){
                    selectRow(selectedRow);
                })})(row);


            cell=row.insertCell(0);
            cell.innerHTML=(x+1)+".";
            cell=row.insertCell(1);
            cell.innerHTML=operator.name;
            cell=row.insertCell(2);
            cell.innerHTML=operator.employeeId;
            cell=row.insertCell(3);
            cell.innerHTML=operator.username;
            cell=row.insertCell(4);
            if(operator.isBlocked)
            {
                cell.innerHTML="Yes";
            }
            else
            {
                cell.innerHTML="No";
            }

            x++;
        }
    },function(errorMessage){});
}
function         clearOperatorsTable()
{
    var operatorsTableBody=document.getElementById("operatorsTable").getElementsByTagName("tbody")[0];
    while(operatorsTableBody.rows.length>0)
    {
        operatorsTableBody.deleteRow(0);
    }
}

var operatorsTableSelectedRow=null;
function selectRow(selectedRow)
{
    if(operatorsTableSelectedRow!=null)
    {
        operatorsTableSelectedRow.className="notSelectedRow";
    }
    selectedRow.className="selectedRow";
    operatorsTableSelectedRow=selectedRow;
}

function showAddOperatorWindow()
{
    var tmWindow=new TMWindow();
    tmWindow.title="Add Operator";
    tmWindow.clientDivision="operatorDivision";
    tmWindow.setSize("700px","900px");
    tmWindow.onClose=clearAddOperatorForm;
    tmWindow.showModal();
}

function clearAddOperatorForm()
{
    var operatorForm=document.getElementById("operatorForm");
    var username=operatorForm.username;
    var password=operatorForm.password;
    var name=operatorForm.name;
    var employeeId=operatorForm.employeeId;
    var isBlocked=operatorForm.isBlocked;
    var usernameError=operatorForm.usernameError;
    var passwordError=operatorForm.passwordError;
    var nameError=operatorForm.nameError;
    var employeeIdError=operatorForm.employeeIdError;
    operatorForm.reset();
    usernameError.style.display="none";
    passwordError.style.display="none";
    nameError.style.display="none";
    employeeIdError.style.display="none";
}

function addOperator()
{
    var operatorForm=document.getElementById("operatorForm");
    var username=operatorForm.username;
    var usernameValue=username.value.trim();
    var password=operatorForm.password;
    var passwordValue=password.value.trim();
    var name=operatorForm.name;
    var nameValue=name.value.trim();
    var employeeId=operatorForm.employeeId;
    var employeeIdValue=employeeId.value.trim();
    var isBlocked=operatorForm.isBlocked;
    var isBlockedValue=isBlocked.checked;
    var usernameError=operatorForm.usernameError;
    var passwordError=operatorForm.passwordError;
    var nameError=operatorForm.nameError;
    var employeeIdError=operatorForm.employeeIdError;
    var valid=true;
    if(usernameValue.length==0)
    {
        usernameError.style.display="block";
        usernameError.title="Username required";
        valid=false;
    }
    else
    {
        usernameError.style.display="none";
    }
    if(passwordValue.length==0)
    {
        passwordError.style.display="block";
        passwordError.title="Password required";
        valid=false;
    }
    else
    {
        passwordError.style.display="none";
    }
    if(nameValue.length==0)
    {
        nameError.title="Name required";
        nameError.style.display="block";
        valid=false;
    }
    else
    {
        nameError.style.display="none";
    }
    if(employeeIdValue.length==0)
    {
        employeeIdError.title="Employee Id. required";
        employeeIdError.style.display="block";
        valid=false;
    }
    else
    {
        employeeIdError.style.display="none";
    }
    if(!valid)
    {
        showMessageBox("Error","Operator cannot be added, because some inputs are incorrect, hover the mouse pointer on the error icons for details");
        return;
    }
    var operator=new Operator();
    operator.username=usernameValue;
    operator.password=passwordValue;
    operator.name=nameValue;
    operator.employeeId=employeeIdValue;
    operator.blocked=isBlockedValue;
    var operatorManager=new OperatorManager();
    operatorManager.add(operator,function(message){
        alert(message);
    },function(errorMessage){
        alert(errorMessage);
    });
}

window.addEventListener("load",getOperators);