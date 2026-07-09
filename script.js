function menu(){
    let responsive = document.querySelector(".responsive");
    let menu = document.querySelector(".menu");
    if (menu.innerHTML === "="){
        responsive.style.display = "block";
        menu.innerHTML = "x";
    }
    else{
        responsive.style.display = "none";
        menu.innerHTML = "=";
    }
}