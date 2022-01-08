
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



// s=document.getElementById("carousel-swipe")

//     function firstbtn(){
//         s.style.left="0%"
//         document.getElementById("active-first").style.color="rgba(245, 245, 245)"
//         document.getElementById("active-second").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-third").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fourth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fifth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-sixth").style.color="rgba(245, 245, 245, 0.384)"
//     }
//     function secondbtn(){
//         s.style.left="-100%"
//         document.getElementById("active-first").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-second").style.color="rgba(245, 245, 245)"
//         document.getElementById("active-third").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fourth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fifth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-sixth").style.color="rgba(245, 245, 245, 0.384)"
//     }
//     function thirdbtn(){
//         s.style.left="-200%"
//         document.getElementById("active-first").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-second").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-third").style.color="rgba(245, 245, 245)"
//         document.getElementById("active-fourth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fifth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-sixth").style.color="rgba(245, 245, 245, 0.384)"
//     }
//     function fourthbtn(){
//         s.style.left="-300%"
//         document.getElementById("active-first").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-second").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-third").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fourth").style.color="rgba(245, 245, 245)"
//         document.getElementById("active-fifth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-sixth").style.color="rgba(245, 245, 245, 0.384)"
//     }
//     function fifthbtn(){
//         s.style.left="-400%"
//         document.getElementById("active-first").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-second").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-third").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fourth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fifth").style.color="rgba(245, 245, 245)"
//         document.getElementById("active-sixth").style.color="rgba(245, 245, 245, 0.384)"
//     }
//     function sixthbtn(){
//         s.style.left="-500%"
//         document.getElementById("active-first").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-second").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-third").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fourth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-fifth").style.color="rgba(245, 245, 245, 0.384)"
//         document.getElementById("active-sixth").style.color="rgba(245, 245, 245)"
//     }

//     if(s.style.left="0%"){
//         document.getElementById("active-first").style.color="rgba(245, 245, 245)"
//     }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper = new Swiper(".mySwipe", {
        slidesPerView: "auto",
        spaceBetween: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });