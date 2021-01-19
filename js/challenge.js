
const minus=document.getElementById("minus");
const plus= document.getElementById("plus");
const heart= document.getElementById("heart");
const pause= document.getElementById("pause");


let counterdisplay=0;
let counter = document.getElementById('counter');

let intervalId=setInterval(add,1000)
                      
function add(){
    counterdisplay++;
    counter.innerText=counterdisplay;
  }
 

minus.addEventListener('click',(e)=>{
    counter.innerText=counterdisplay-1;
})

plus.addEventListener('click',(e)=>{
    counter.innerText=counterdisplay+1;
})

pause.addEventListener('click',()=>{
    if(pause.innerText === "pause") {
        pause.innerText = "resume";
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        clearInterval(intervalId);
    }else{
        setInterval(add,1000);
        pause.innerText = "pause";
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
    }
})


heart.addEventListener('click',() =>{
  let likes=document.querySelector('.likes');
  let li=document.createElement('li');
      li.innerText=`Loving count❤️ ${counterdisplay}`;   
  likes.appendChild(li);
})



let commentform=document.getElementById("comment-form");

commentform.addEventListener('submit',(e) => {
  e.preventDefault()
  let commentInput=document.getElementById("comment-input").value;
  let list=document.getElementById("list")
  let p=document.createElement('p')
  p.innerText=`${commentInput}`
  list.appendChild(p)
  document.getElementById("comment-input").value=""
})


