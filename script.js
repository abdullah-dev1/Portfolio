/*==========================================================
                PORTFOLIO JAVASCRIPT
                PART 1
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initNavbar();

    initSmoothScroll();

    initScrollProgress();

    initBackToTop();

});

/*==========================================================
                    LOADER
==========================================================*/

function initLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    });

}

/*==========================================================
                STICKY NAVBAR
==========================================================*/

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    function updateNavbar() {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        }

        else {

            navbar.classList.remove("scrolled");

        }

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);

}

/*==========================================================
                SMOOTH SCROLL
==========================================================*/

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        });

    });

}

/*==========================================================
                SCROLL PROGRESS
==========================================================*/

function initScrollProgress() {

    const progressBar = document.querySelector(".progress-bar");

    if (!progressBar) return;

    function updateProgress() {

        const scrollTop = window.scrollY;

        const height =

            document.documentElement.scrollHeight -

            window.innerHeight;

        const progress =

            (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";

    }

    updateProgress();

    window.addEventListener("scroll", updateProgress);

}

/*==========================================================
                BACK TO TOP
==========================================================*/

function initBackToTop() {

    const button = document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            button.classList.add("show");

        }

        else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==========================================================
                PART 2
        PREMIUM INTERACTIONS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initRevealAnimation();

    initMagneticButtons();

    initRippleEffect();

    initCardHover();

});

/*==========================================================
                REVEAL ANIMATION
==========================================================*/

function initRevealAnimation() {

    const elements = document.querySelectorAll(

        ".section-heading, .glass-card, .feature-card, .project-card, .achievement-card, .timeline-item, .phone-card, .info-card"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold: .15

        }

    );

    elements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}

/*==========================================================
                MAGNETIC BUTTON
==========================================================*/

function initMagneticButtons() {

    const buttons = document.querySelectorAll(

        ".primary-btn, .secondary-btn, .resume-btn"

    );

    buttons.forEach(button => {

        button.addEventListener("mousemove", e => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) * 0.18;

            const moveY = (y - rect.height / 2) * 0.18;

            button.style.transform =

                `translate(${moveX}px, ${moveY}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

}

/*==========================================================
                RIPPLE EFFECT
==========================================================*/

function initRippleEffect() {

    const buttons = document.querySelectorAll(

        ".primary-btn, .secondary-btn, .resume-btn"

    );

    buttons.forEach(button => {

        button.style.position = "relative";

        button.style.overflow = "hidden";

        button.addEventListener("click", function(e){

            const ripple = document.createElement("span");

            const size = Math.max(

                button.clientWidth,

                button.clientHeight

            );

            const rect = button.getBoundingClientRect();

            ripple.style.width = size + "px";

            ripple.style.height = size + "px";

            ripple.style.left =

                e.clientX - rect.left - size / 2 + "px";

            ripple.style.top =

                e.clientY - rect.top - size / 2 + "px";

            ripple.style.position = "absolute";

            ripple.style.borderRadius = "50%";

            ripple.style.background =

                "rgba(255,255,255,.35)";

            ripple.style.transform = "scale(0)";

            ripple.style.pointerEvents = "none";

            ripple.style.animation =

                "ripple .6s linear";

            button.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

}

/*==========================================================
            MOMENTUMX PHONE PARALLAX
==========================================================*/

function initPhoneParallax(){

    const showcase = document.querySelector(

        ".momentum-showcase"

    );

    if(!showcase) return;

    const phones =

        showcase.querySelectorAll(".phone-card");

    showcase.addEventListener("mousemove",(e)=>{

        const rect = showcase.getBoundingClientRect();

        const x =

            (e.clientX - rect.left) / rect.width - .5;

        const y =

            (e.clientY - rect.top) / rect.height - .5;

        phones.forEach((phone,index)=>{

            const depth = (index + 1) * 8;

            phone.style.transform +=

                ` translate(${x*depth}px,${y*depth}px)`;

        });

    });

    showcase.addEventListener("mouseleave",()=>{

        phones.forEach(phone=>{

            
        });

    });

}

/*==========================================================
            PREMIUM CARD HOVER
==========================================================*/

function initCardHover(){

    const cards=document.querySelectorAll(

        ".feature-card,.project-card,.achievement-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=(x-rect.width/2)/18;

            const rotateX=-(y-rect.height/2)/18;

            card.style.transform=

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}
/*==========================================================
                    PART 3
        PREMIUM ANIMATIONS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initTypingEffect();

    initCounterAnimation();

    initMobileMenu();

    initSpotlight();

});

/*==========================================================
                HERO TYPING EFFECT
==========================================================*/

function initTypingEffect(){

    const element=document.querySelector(".typing-text");

    if(!element) return;

    const words=[

        "Backend Developer",

        "Flutter Developer",

        "Python Developer",

        "FastAPI Enthusiast",

        "Software Engineer"

    ];

    let wordIndex=0;

    let charIndex=0;

    let deleting=false;

    function type(){

        const word=words[wordIndex];

        if(!deleting){

            element.textContent=

                word.substring(0,charIndex++);

            if(charIndex>word.length){

                deleting=true;

                setTimeout(type,1600);

                return;

            }

        }

        else{

            element.textContent=

                word.substring(0,--charIndex);

            if(charIndex===0){

                deleting=false;

                wordIndex=(wordIndex+1)%words.length;

            }

        }

        setTimeout(type,deleting?45:90);

    }

    type();

}

/*==========================================================
                COUNTER ANIMATION
==========================================================*/

function initCounterAnimation(){

    const counters=document.querySelectorAll(

        ".achievement-card h2"

    );

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },

        {threshold:.5}

    );

    counters.forEach(counter=>observer.observe(counter));

}

function animateCounter(element){

    const finalValue=parseInt(

        element.textContent.replace(/\D/g,"")

    );

    if(isNaN(finalValue)) return;

    let current=0;

    const duration=1800;

    const increment=finalValue/

        (duration/16);

    function update(){

        current+=increment;

        if(current<finalValue){

            element.textContent=

                Math.floor(current)+"+";

            requestAnimationFrame(update);

        }

        else{

            element.textContent=

                finalValue+"+";

        }

    }

    update();

}

/*==========================================================
                MOBILE MENU
==========================================================*/

function initMobileMenu(){

    const toggle=document.querySelector(".menu-toggle");

    const nav=document.querySelector(".nav-links");

    if(!toggle||!nav) return;

    toggle.addEventListener("click",()=>{

        nav.classList.toggle("open");

        toggle.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a")

    .forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("open");

            toggle.classList.remove("active");

        });

    });

}

/*==========================================================
            FLOATING PHONE ANIMATION
==========================================================*/

function initFloatingPhones(){

    const phones=document.querySelectorAll(".phone-card");

    phones.forEach((phone,index)=>{

        phone.animate(

            [

                {

                    transform:

                    "translateY(0px)"

                },

                {

                    transform:

                    "translateY(-12px)"

                },

                {

                    transform:

                    "translateY(0px)"

                }

            ],

            {

                duration:3500+(index*350),

                iterations:Infinity,

                easing:"ease-in-out"

            }

        );

    });

}

/*==========================================================
                SPOTLIGHT EFFECT
==========================================================*/

function initSpotlight(){

    const cards=document.querySelectorAll(

        ".glass-card,.feature-card,.project-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.background=

            `radial-gradient(

                circle at ${x}px ${y}px,

                rgba(59,130,246,.18),

                rgba(255,255,255,.04) 55%

            )`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background=

            "rgba(255,255,255,.05)";

        });

    });

}


