function myFunction(){
    x=document.getElementById("mySidenav")
    y=document.getElementById("down")
    if(x.style.display=="none"){
        x.style.display="flex"
        y.style.transform="rotate(180deg)"
    }else{
        x.style.display="none"
        y.style.transform="rotate(360deg)"
    }
}