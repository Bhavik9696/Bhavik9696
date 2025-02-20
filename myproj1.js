let curs=document.querySelector("#cur")
let blur=document.querySelector("#cur-blr")

document.addEventListener("mousemove",function(dets){
     curs.style.left=dets.x+"px"
     curs.style.top=dets.y+"px"
      blur.style.left=dets.x-190+"px"
       blur.style.top=dets.y-190+"px"
})





gsap.to("#nav",{
         backgroundColor:"#000",
         duration:0.5,
         height:"90px",
         scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            start:"topv-20%",
            end:"top -20",
            scrub:1
         }

})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -40%",
        end:"top -70%",
        scrub:2
     }
})



