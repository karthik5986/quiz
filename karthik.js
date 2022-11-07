function validateForm() {
    let g = document.getElementById("email").value;
    let g_reg = /^[a-zA-Z]+[\.][a-zA-Z]+\d{4}@vitstudent.ac.in$/i;
    if(g==""||g_reg.test(g)==false){
        document.getElementById("demo1").innerHTML="*Invalid Email ID ";
        document.getElementById("demo1").style. color = "maroon";
        document.getElementById("demo1").style. fontSize = "17px";
        return false;
    }
    let f = document.getElementById("password").value;
    let f_reg = /^([a-z0-9][a-z]){3}[a-z0-9]$/i;
    if(f==""||f_reg.test(f)==true){
        document.getElementById("demo2").innerHTML="*Strong Password Is Required";
        document.getElementById("demo2").style. color = "maroon";
        document.getElementById("demo2").style. fontSize = "17px";
        return true;
    }
}
