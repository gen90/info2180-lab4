//Exercise 1
let touch = false;
let started = false;
let ended = false;
window.onload = function(){
    document.getElementById('status').style.height = "20px";
    let bound1 = document.getElementById('boundary1');
    bound1.addEventListener("mouseover",change);

    var allBound = document.querySelectorAll('.boundary');
    for(let x = 1;x<allBound.length -1;x++){
        allBound[x].addEventListener("mouseover",change);  
    }

    document.getElementById('end').addEventListener("mouseover",win);
    document.getElementById('start').addEventListener("click",start);   
}

function change(){
    if(!ended && started){
        this.classList.add("youlose");
        touch = true;
        document.getElementById('status').innerHTML = "<h2>You Lose</h2>";
    }
}

function win(){
    if(!(touch) && started){
        document.getElementById('status').innerHTML = "<h2>You Win!!!</h2>";
    }
    ended = true;
}

function start(){
    started = true;
    touch = false;
    ended = false;

    let all = document.querySelectorAll('.boundary');
    for(let i=0;i<all.length;i++){
        all[i].classList.remove("youlose");
    }
   document.getElementById('status').innerHTML = "<h2>The Game has begun</h2>";

}

window.onload;


