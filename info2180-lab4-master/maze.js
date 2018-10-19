//Exercise 1
window.onload = function(){
    let bound1 = document.getElementById('boundary1');
    bound1.addEventListener("mouseover",change);

    var allBound = document.querySelectorAll('.boundary');
    for(var x = 1;x<allBound.length -1;x++){
        allBound[x].addEventListener("mouseover",change);  
    }
   
}
function change(){
    this.classList.add("youlose");
}

window.onload;

