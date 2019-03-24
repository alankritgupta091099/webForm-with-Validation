function myValidaiton(){
    
    let userNameValue=document.getElementById('userName').value;
    // let userPassword1=document.getElementById('password1').value;
    // let userPassword2=document.getElementById('password2').value;
    
    // if(isNaN(userNameValue)||userNameValue<5||userNameValue>15)
    // {
    //     console.log("invalid  input");
    // }
    // else
    // {
    //     console.log("valid input");
    // } 
}
document.querySelector('.inputForm').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.userName.value)
    console.log(event.target.password1.value)
    console.log(event.target.password2.value)
    // if(event.target.password1.value.length<5)
    //     {
    //         alert("goodd going");
    //     }
    if(event.target.password1.value!=event.target.password2.value)
    {
        alert("Renter Password")
        password1.focus();
    }
    event.target.userName.value=''
    event.target.password1.value=''
    event.target.password2.value=''
    
})
