/**
 * Created by Siddhant Mehta on 1/3/2015.
 */
function getXMLHttpRequest()
{
    var ax=null;
    if(window.XMLHttpRequest)
    {
        ax=new XMLHttpRequest();
    }
    return ax;
}
function closeMessageBox()
{
    var messageBoxModalWindowMask=document.getElementById("messageBoxModalWindowMask");
    messageBoxModalWindowMask.style.visibility="hidden";
}
function showMessageBox(title,message)
{
    var messageBoxModalWindowMask=document.getElementById("messageBoxModalWindowMask");
    var messageBoxModalWindowTitle=document.getElementById("messageBoxModalWindowTitle");
    var messageBoxModalWindowMessage=document.getElementById("messageBoxModalWindowMessage");
    messageBoxModalWindowTitle.innerHTML=title;
    messageBoxModalWindowMessage.innerHTML=message;
    messageBoxModalWindowMask.style.visibility="visible";
}
function addMessageBoxDivision()
{
    var element=document.createElement("div");
    element.id="messageBoxModalWindowMask";
    var html='<div id="messageBoxModalWindow">';
    html+='<span id="messageBoxModalWindowTitle">Message</span>';
    html+='<span id="messageBoxModalWindowCloseButton"><img src="images/errorIcon.png" onclick="closeMessageBox()"></span>';
    html+='<div id="messageBoxModalWindowMessage">hello</div>';
    html+='<div id="messageBoxModalWindowOkButton"><input type="button" value="Ok" onclick="closeMessageBox()"></div>';
    html+='</div>';
    element.innerHTML=html;
    document.getElementsByTagName("body")[0].appendChild(element);

}

function showConfirmationBox(title,message,onYesClicked)
{
    var confirmationBoxModalWindowMask=document.getElementById("confirmationBoxModalWindowMask");
    var confirmationBoxModalWindowTitle=document.getElementById("confirmationBoxModalWindowTitle");
    var confirmationBoxModalWindowMessage=document.getElementById("confirmationBoxModalWindowMessage");
    var confirmationBoxModalWindowYesButton=document.getElementById("confirmationBoxModalWindowYesButton");
    confirmationBoxModalWindowTitle.innerHTML=title;
    confirmationBoxModalWindowMessage.innerHTML=message;
    confirmationBoxModalWindowYesButton.onclick=onYesClicked;
    confirmationBoxModalWindowMask.style.visibility="visible";
}

function closeConfirmationBox()
{
    var confirmationBoxModalWindowMask=document.getElementById("confirmationBoxModalWindowMask");
    confirmationBoxModalWindowMask.style.visibility="hidden";
}

function addConfirmationBoxDivision()
{
    var element=document.createElement("div");
    element.id="confirmationBoxModalWindowMask";
    var html='<div id="confirmationBoxModalWindow">';
    html+='<span id="confirmationBoxModalWindowTitle"></span>';
    html+='<span id="confirmationBoxModalWindowCloseButton"><img src="images/errorIcon.png" onclick="closeConfirmationBox()"/></span>';
    html+='<div id="confirmationBoxModalWindowMessage"></div>';
    html+='<div id="confirmationBoxModalWindowButtons">';
    html+='<input type="button" value="Yes" id="confirmationBoxModalWindowYesButton">';
    html+='<input type="button" value="No" id="confirmationBoxModalWindowNoButton" onclick="closeConfirmationBox()">';
    html+='</div>';
    html+='</div>';
    element.innerHTML=html;
    document.getElementsByTagName("body")[0].appendChild(element);
}


function TMWindow()
{
    //private properties
    var tmMaskWindowDivision=null;
    var tmWindowDivision=null;
    var tmWindowTitleSpan=null;
    var tmWindowCloseButtonSpan=null;
    var tmWindowClientDivision=null;
    var tmWindowCloseButton=null;
    //public properties
    this.onClose=null;
    this.title="";
    //the following division contains the id of the division whose innerHTML should be the part of the division
    //to which the tmWindowClientDivision pointer is going to point
    this.clientDivision="";
    this.width="300px";
    this.height="100px";
    this.setSize=function(w,h){
        this.width=w;
        this.height=h;
    };
    this.showModal=function(){
        tmMaskWindowDivision=document.createElement("div");
        tmMaskWindowDivision.className="TMModalWindowMask";

        tmWindowDivision=document.createElement("div");
        tmWindowDivision.className="TMWindow";
        tmWindowDivision.style.width=this.width;
        tmWindowDivision.style.height=this.height;

        tmWindowTitleSpan=document.createElement("span");
        tmWindowTitleSpan.className="TMWindowTitle";
        tmWindowTitleSpan.innerHTML=this.title;

        tmWindowCloseButtonSpan=document.createElement("span");
        tmWindowCloseButtonSpan.className="TMWindowCloseButton";

        tmWindowCloseButton=document.createElement("img");
        tmWindowCloseButton.src="images/errorIcon.png";

        (function(k){
            tmWindowCloseButton.onclick=function(){
              //logic to put back the innerHTML of  the division to which the tmWindowClientDivision is pointing to,
                //into the division whose id is in the variable->clientDivision which can be referred by variable k
                document.getElementById(k.clientDivision).innerHTML=tmWindowClientDivision.innerHTML;
                tmMaskWindowDivision.style.visibility="hidden";
                if(k.onClose!=null)
                {
                    k.onClose();
                }
            };})(this);


        tmWindowClientDivision=document.createElement("div");
        tmWindowClientDivision.className="TMModalWindowClientDivision";
        tmWindowClientDivision.innerHTML=document.getElementById(this.clientDivision).innerHTML;
        tmModalWindowClientDivision.style.height=(parseInt(tmWindowDivision.style.height)-30)+"px";
        document.getElementById(this.clientDivision).innerHTML="";
        tmMaskWindowDivision.appendChild(tmWindowDivision);
        tmWindowDivision.appendChild(tmWindowTitleSpan);
        tmWindowCloseButtonSpan.appendChild(tmWindowCloseButton);
        tmWindowDivision.appendChild(tmWindowCloseButtonSpan);
        tmWindowDivision.appendChild(tmModalWindowClientDivision);

        document.body.appendChild(tmMaskWindowDivision);
        tmMaskWindowDivision.style.visibility="visible";
    };
}

window.addEventListener("load",addMessageBoxDivision);
window.addEventListener("load",addConfirmationBoxDivision);