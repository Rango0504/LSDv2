const faqQue = document.querySelectorAll(".faqEl");
faqQue.forEach(el =>{
    el.addEventListener("click",()=>{
        if(!el.classList.contains("fieldOpen")){
            el.classList.add("fieldOpen");
        }
        else{
            el.classList.remove("fieldOpen");
        }
    })
})

// const offerImages = document.querySelectorAll(".offerImages");
// const galleryLabels = document.querySelectorAll(".galleryLabels a");

// galleryLabels.forEach(el =>{
//     el.addEventListener("click", e =>{
//         offerImages.forEach(element => element.classList.remove("imagesOn"));
//         galleryLabels.forEach(element => element.classList.remove("borderBottom"));
//         e.preventDefault();
//         let splitArrayOfURL = el.href.split("/");
//         document.querySelector(splitArrayOfURL[splitArrayOfURL.length-1]).classList.add("imagesOn");
//         el.classList.add("borderBottom");
//     }
//     )
// })
const lightbox = GLightbox();

const bars = document.querySelector("#bars");
const mobileMenuLabels = document.querySelector(".menuLabelsMobile");
let menuFlag = 0;

bars.addEventListener("click", ()=>{
    if(menuFlag == 0){
        mobileMenuLabels.style.display="flex";
        menuFlag++;
    }
    else{
        mobileMenuLabels.style.display="none";
        menuFlag--;
    }
})