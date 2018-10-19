//Exercise 1
let touch = false;
window.onload = function(){
    let bound1 = document.getElementById('boundary1');
    bound1.addEventListener("mouseover",change);

    var allBound = document.querySelectorAll('.boundary');
    for(var x = 1;x<allBound.length -1;x++){
        allBound[x].addEventListener("mouseover",change);  
    }

    document.getElementById('end').addEventListener("mouseover",win);   
}

function change(){
    this.classList.add("youlose");
    touch = true;
}

function win(){
    if(!(touch)){
        alert("You win!!");
    }
}

window.onload;

