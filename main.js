function Rotate(){
    const img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random()*6) + 1;
    console.log(randomNumber);
    img.setAttribute("src", `${randomNumber}.png`);
}
function anim(){
    setTimeout(Rotate ,300);
    const img = document.getElementById("img") ;
    img.setAttribute("src","loader.gif") ;
}
