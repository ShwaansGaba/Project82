mouseEvent="empty";
var lastpositionofx,lastpositionofy;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown" ,mymousedown);
function mymousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave" ,mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup" ,mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove" ,mymousemove);
function mymousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=3;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,15,0,2*Math.PI);
        ctx.stroke();
    }
    lastpositionofx=current_position_of_mouse_x;
    lastpositionofy=current_position_of_mouse_y;
}


