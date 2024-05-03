window.onload=init;
function init(){
    let add=document.getElementById("add");
    add.onclick=onAddBtn;
    let sub=document.getElementById("sub");
    sub.onclick=onSubBtn;
    let mul=document.getElementById("mul");
    mul.onclick=onMulBtn;
    let div=document.getElementById("div");
    div.onclick=onDivBtn;
}
function onAddBtn(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let ans=document.getElementById("ans");
    ans.value=parseInt(num1.value)+parseInt(num2.value);
}
function onSubBtn(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let ans=document.getElementById("ans");
    ans.value=parseInt(num1.value)-parseInt(num2.value);
}
function onMulBtn(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let ans=document.getElementById("ans");
    ans.value=parseInt(num1.value)*parseInt(num2.value);
}
function onDivBtn(){
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let ans=document.getElementById("ans");
    ans.value=parseInt(num1.value)/parseInt(num2.value);
}