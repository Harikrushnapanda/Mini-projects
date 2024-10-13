function redirectPage()
{
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const userType=document.getElementById("userType").value


    const validCredentials ={
        username: "admin",
        password: "admin123"
    };

    if(username === ""|| password === ""||userType === ""){
        alert("please enter credentials");
        return;
    }

    if(username === validCredentials.username && password === validCredentials.password ){
        alert("Login successfull");
    }else{
        alert("invalid details");
    }
    
    if(userType == "user"){
        window.location.href="user.html";
    }else if(userType == "a"){
        window.location.href="admin.html";
    }
}