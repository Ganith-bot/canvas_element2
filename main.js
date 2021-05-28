canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="blue";
width="2";

var last_positionx,last_positiony;
var mouseEvent="empty";

canvas.addEventListener("mousedown",line1);

function line1(e){
color=document.getElementById("color1").value;
width=document.getElementById("width1").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",line2);

function line2(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",line3);

function line3(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",line4);

function line4(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientX-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("current_position_x = "+ current_position_x);
        console.log("current_position_y = "+ current_position_y);
        console.log("last_position_x = "+ last_positionx);
        console.log("last_position_y = "+ last_positiony);
        ctx.moveTo(last_positionx,last_positiony);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
    }
    last_positionx=current_position_x;
    last_positiony=current_position_y;
}
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}