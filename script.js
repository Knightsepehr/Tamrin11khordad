
function showform1(input) {
    if (input == 1) {
        
        document.getElementById("form-1").style.display = "flex";
    }
    else{
        document.getElementById("form-1").style.display = "none";

    }
}
function prompt1() {
    let output = "";
    let age = parseInt(prompt("Please Enter your age"));
    if (age > 18 && age <= 20) {
        output += "Your age is between 18 and 20 ";
    }
    output += `after 56 years your age will be : ${age+56}`;
    alert(output);
}
function prompt2() {
    let operator = prompt("Choose Operator : + - * /");

    let num1 = parseInt(prompt("Please enter num1"));
    let num2 = parseInt(prompt("Please enter num2"));

    switch (operator) {
        case "+":
            alert(`result = ${num1+num2}`);
            break;
        case "-":
            alert(`result = ${num1-num2}`);
            break;
        case "*":
            alert(`result = ${num1*num2}`);
            break;
        case "/":
            alert(`result = ${num1/num2}`);
            break;
        default:
            alert("invalid input");
            break;
    }
    
}

function form1() {
    const output = document.getElementById("output");
    let outputtext = "";
    let age = parseInt(document.getElementById("age").value);
    if (age > 18 && age <= 20) {
        outputtext = "Your age is between 18 and 20 and ";
    }
    outputtext += `after 56 years your age will be : ${age+56}`;
    if (age) {
        output.innerText = outputtext;
    }
}
