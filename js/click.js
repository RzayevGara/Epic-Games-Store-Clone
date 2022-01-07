
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


function openright(){
    r=document.getElementById("myRightbar")
    if(r.style.right=="-100%"){
        r.style.right="0"
        document.getElementById("hide").style.display="none"
        document.getElementById("tr-right").style.transform="rotate(50deg)"
        document.getElementById("tr-right").style.position="absolute"
        document.getElementById("tr-left").style.transform="rotate(130deg)"
        document.getElementById("tr-left").style.position="absolute"
        document.getElementById("x-menu").style.justifyContent="center"
        document.getElementById("x-menu").style.backgroundColor="rgb(18, 18, 18)"
        document.body.style.overflow = 'hidden';

    }else{
        r.style.right="-100%"
        document.getElementById("hide").style.display="block"
        document.getElementById("tr-right").style.transform="rotate(0)"
        document.getElementById("tr-right").style.position="static"
        document.getElementById("tr-left").style.transform="rotate(0)"
        document.getElementById("tr-left").style.position="static"
        document.getElementById("x-menu").style.justifyContent="space-evenly"
        document.getElementById("x-menu").style.backgroundColor="#0078f2"
        document.body.style.overflow = 'visible';
    }
}
