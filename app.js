'use strict'

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
ctx.strokeStyle="#000000";
ctx.lineWidth=1;
let painting = false;

function stopPainting() { painting = false;}
function startPainting() { painting = true;}


const drawCursor = (event) =>{
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x,y);

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
};

canvas.addEventListener("mousemove",drawCursor);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",stopPainting);