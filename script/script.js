const form = document.getElementById("form");
const uname = document.getElementById("username");
const eml = document.getElementById("email");
const phn = document.getElementById("phone");
const pswd = document.getElementById("password");
const cnfpswd = document.getElementById("cnfpassword");
const btnclick = document.querySelector(".btn");

//add event
btnclick.addEventListener('click', (prm) => {
    prm.preventDefault();
   isValid=validate();
   console.log(isValid)
   if(isValid){
    console.log(isValid)
   window.location.assign("successmsg.html")
   }
})
//more email validate
const isEmail = (emp) => {
    var atSymbol = emp.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emp.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false; 
    if(dot === emp.length - 1) return false;
    return true;
}
// //another way for email validation
// function emailCheck(input){
//     let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
//     let valid = emailFormat.test(input);
//     return valid
// }


const validate = () => {
    const unameVal = uname.value.trim();
    const emlVal = eml.value.trim();
    const phnVal =phn.value.trim();
    const pswdVal = pswd.value.trim();
    const cnfpswdVal=cnfpswd.value.trim();

    //username
    if(unameVal===""){
        setErrorMsg(uname, "username cannot be blank");
    }else if(unameVal.length <= 2){
        setErrorMsg(uname, 'username min 3 char');
    }else{
        setSuccessMsg(uname);
    }

     //Email
    if(emlVal===""){
        setErrorMsg(eml, 'Email cannot  be blank');
    }else if(!isEmail(emlVal)){
        setErrorMsg(eml, 'Not a valid Email');
    }else{
        setSuccessMsg(eml);
    }

    //phone
    if(phnVal=== ""){
        setErrorMsg(phn, 'Phone Number is blank');
    }else if(phnVal.length != 10){
        setErrorMsg(phn, 'Enter Correct Number');
    }else{
        setSuccessMsg(phn);
    }

    //password
    if(pswdVal === ""){
        setErrorMsg(pswd, 'password empty');
    }else if(pswdVal.length < 8){
        setErrorMsg(pswd, 'password must be 8 characters');
    }else{
        setSuccessMsg(pswd);
    }

    //confirm password
    if(cnfpswdVal === ""){
        setErrorMsg(cnfpswd, 'confirm password is not empty');
    }else if(pswdVal != cnfpswdVal ){
        setErrorMsg(cnfpswd, 'Password is not matching');
    }else{
        setSuccessMsg(cnfpswd);
        return true;
    }
}


function setErrorMsg(input, errmsgs){
    const parent = input.parentElement;
    const smallChild = parent.querySelector('small');
    smallChild.innerText = errmsgs;
    parent.classList.add('error')
    parent.classList.remove('success')
}

function setSuccessMsg(input){
    const parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}

