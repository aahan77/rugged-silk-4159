let signUpinfo= document.querySelector("form");
signUpinfo.addEventListener("submit",myFun);
let infoArr=JSON.parse (localStorage.getItem("signupin"))||[]
function myFun(event){
    event.preventDefault();

    let infObj={
        email:document.querySelector("#email").value,
         pass:document.querySelector("#password").value
    }
    
    infoArr.push(infObj)
    localStorage.setItem("signupin", JSON.stringify(infoArr)  )

    alert("SignUp Successful , Your account has been created")

}