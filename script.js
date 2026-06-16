
/* =========================
   TYPING EFFECT
========================= */

const textArray = [
    " Brand New iPhones",
    " Certified Used iPhones",
    " Fast Delivery",
    " Affordable Prices",
    " Trusted Seller",
    " Premium Apple Devices"
];

let sentenceIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeText(){

    if(charIndex < textArray[sentenceIndex].length){

        typingElement.textContent +=
        textArray[sentenceIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,70);

    }else{

        setTimeout(eraseText,2000);

    }
}

function eraseText(){

    if(typingElement.textContent.length > 0){

        typingElement.textContent =
        typingElement.textContent.slice(0,-1);

        setTimeout(eraseText,30);

    }else{

        sentenceIndex++;

        if(sentenceIndex >= textArray.length){
            sentenceIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeText,500);
    }
}

typeText();


/* =========================
   DARK MODE
========================= */

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }

});


/* =========================
   SEARCH PRODUCTS
========================= */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

    const searchValue =
    searchInput.value.toLowerCase();

    const cards =
    document.querySelectorAll(".phone-card");

    cards.forEach(card=>{

        const phoneName =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        if(phoneName.includes(searchValue)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});


/* =========================
   IMAGE GALLERY
========================= */

const phoneImages =
document.querySelectorAll(".phone-image");

phoneImages.forEach(img=>{

    const images =
    img.dataset.images
    .split(",");

    let currentIndex = 0;

    img.addEventListener("click",()=>{

        img.style.transform =
        "scale(0.8) rotateY(180deg)";

        setTimeout(()=>{

            currentIndex++;

            if(currentIndex >= images.length){
                currentIndex = 0;
            }

            img.src =
            images[currentIndex].trim();

            img.style.transform =
            "scale(1) rotateY(0deg)";

        },300);

    });

});

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const phoneName =
            button.closest(".phone-card").querySelector("h3").textContent;

        const customerName = prompt("Enter your full name:");
        if (!customerName) return;

        const customerPhone = prompt("Enter your phone number:");
        if (!customerPhone) return;

        const message =
`Hello Better Buy Me Store

Name: ${customerName}
Phone: ${customerPhone}
Order: ${phoneName}`;

        const url = "https://wa.me/27796729555?text=" + encodeURIComponent(message);

        console.log(url); // debug

        window.open(url, "_blank");
    });
});


/* =========================
   CARD ANIMATION ON SCROLL
========================= */

const cards =
document.querySelectorAll(".phone-card");

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.1
});

cards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    "0.6s ease";

    observer.observe(card);

});


/* =========================
   HERO IMAGE PARALLAX
========================= */

window.addEventListener("scroll",()=>{

    const heroImage =
    document.querySelector(".hero-image img");

    if(heroImage){

        let scrollY =
        window.scrollY;

        heroImage.style.transform =
        `translateY(${scrollY * 0.08}px)`;
    }

});


/* =========================
   SMOOTH BUTTON EFFECT
========================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform =
        "scale(1.08)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform =
        "scale(1)";

    });

});


/* =========================
   FAKE STOCK COUNTER
========================= */

const stockBadges =
document.querySelectorAll(".badge");

stockBadges.forEach(badge=>{

    badge.addEventListener("click",()=>{

        alert(
        "📦 Limited Stock Available!"
        );

    });

});


/* =========================
   PAGE LOADED MESSAGE
========================= */

window.addEventListener("load",()=>{

    console.log(
    "Better Buy Me Store Loaded Successfully"
    );

});

