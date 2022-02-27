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

const form = document.querySelector("#form");
const subject = document.querySelector("#subject");
const body = document.querySelector("#body");
const telephone = document.querySelector("#telephone")
const email = document.querySelector("#email");
const messageCase = document.querySelector(".message");
const submitButton = document.querySelector("#submit");
const formCheck = document.querySelector(".formCheck");
const formCheckImg = document.querySelector(".formCheckImg");

submitButton.addEventListener("click", ()=>{
    messageCase.innerText = "Wysyłanie";
    formCheckImg.classList.add("imageHeight")
})
      form.addEventListener("submit", (e) => {
          if(subject.value == "" && body.value == "" && email.value == ""){
              alert("Wszystkie pola formularza muszą być wypełnione!")
          }
          else{
            e.preventDefault();
            // const formData = new FormData(form);
            // fetch("mailer.php", {
            //   method: 'post',
            //   body: formData
            // })
            // .then(function (text) {
            //     subject.value = "";
            //     body.value = "";
            //     telephone.value = "";
            //     email.value = "";
            //     submitButton.style.display = "none";
            //     form.classList.add("formAnimationComplete");
            //     formCheck.classList.add("formCheckAnimation");
            // });
            console.log(grecaptcha);
          }
      })

