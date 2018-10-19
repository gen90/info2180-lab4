//Exercise 1
let touch = false;
let started = false;
window.onload = function(){
    let bound1 = document.getElementById('boundary1');
    bound1.addEventListener("mouseover",change);

    var allBound = document.querySelectorAll('.boundary');
    for(var x = 1;x<allBound.length -1;x++){
        allBound[x].addEventListener("mouseover",change);  
    }

    document.getElementById('end').addEventListener("mouseover",win);
    document.getElementById('start').addEventListener("click",start);   
}

function change(){
    this.classList.add("youlose");
    touch = true;
   
}

function win(){
    if(!(touch) && started){
        alert("You Win!!")
    }
}

function start(){
    started = true;
    touch = false;

    var all = document.querySelectorAll('.boundary');
    for(var i=0;i<all.length;i++){
        all[i].classList.remove("youlose");
    }

}

window.onload;

