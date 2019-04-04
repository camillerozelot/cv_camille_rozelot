
var firstText = document.getElementById("text");
var secondText = document.getElementById("text2")
var	thirdText = document.getElementById("text3")
var txt1 = 'working abroad...';
var txt2 = 'traveling...'
var txt3 = 'many other things...'


function write(element,text){
var i = -1;

var speed = 50; 

function typeWriter(){
 if (i < text.length) {  
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,speed)
 }
};
setInterval(typeWriter(),30000);
element.innerHTML = " ";
};


write(firstText,txt1);
window.setInterval(function(){
write(firstText,txt1);
}, 6000);

write(secondText,txt2);
window.setInterval(function(){
write(secondText,txt2);
}, 6000);

write(thirdText,txt3);
window.setInterval(function(){
write(thirdText,txt3);
}, 6000);

