// function formvalidate() {
//     var first = document.getElementById("first").value;
//     var last = document.getElementById("last").value;
//     var email = document.getElementById("email").value;
//     var number = document.getElementById("number").value;
//     var pass = document.getElementById("pass").value;
//     var conpass = document.getElementById("conpass").value;
//     var error = document.getElementById("error");
//     var text = "";

//     if (first.length < 2 || last.length < 2 || email.indexOf("@") == -1 || email.length < 5 ||
//         isNaN(number) || number.length < 8 || pass.length < 6 || pass !== conpass) {
//         text = "Invalid input or passwords do not match.";
//         error.innerHTML = text;
//         return false;
//     } else {
//         alert("Account created successfully!");
//         return true;
//     }
// }
function formvalidate() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;
    var error = document.getElementById("error");
    var text = " ";

    if (first.length < 7) {
        text = "Please Enter Valid First Name";
        error.innerHTML = text;
        return false;
    } else if (last.length < 7) {
        text = "Please Enter Valid Last Name";
        error.innerHTML = text;
        return false;
    } else if (email.indexOf("@") == -1 || email.length < 10) {
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    } else if (isNaN(number) || number.length < 11) {
        text = "Please Enter Valid Number";
        error.innerHTML = text;
        return false;
    } else if (pass.length < 6) {
        text = "Please Enter Valid Password";
        error.innerHTML = text;
        return false;
    } else if (conpass.length < 6) {
        text = "Please Enter Valid Confirm Password";
        error.innerHTML = text;
        return false;
    } else {
        alert("Done");
        return true;
    }
}
