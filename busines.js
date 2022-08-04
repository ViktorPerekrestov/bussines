let burger=document.querySelector(".header__burger");
let nav=document.querySelector(".header__nav");
let mains=document.querySelector("main");
let footer=document.querySelector("footer");
let sbross=0;
burger.onclick=function()
{
    if (sbross==0)
    {
    nav.style.display="block";
    mains.style.display="none"; 
   footer.style.display="none"; 
    sbross++;
    burger.innerHTML="X";
    }
    else if (sbross!=0)
    {
        nav.style.display="none";
        mains.style.display="block"; 
        footer.style.display="block";
        burger.innerHTML="&#9776;";
        sbross=0;
    }
}