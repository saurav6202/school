const animatedElements = document.querySelectorAll('.mainBox, .box, .aboutText');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => {
    el.classList.add('before-animation');
    observer.observe(el);
});


fetch("/html/footer.html").then(res => res.text()).then(data => document.querySelector("footer").innerHTML = data);

const navBtn = document.querySelector("nav .right i");
const navUl = document.querySelector("nav .right ul");

navBtn.addEventListener("click", e => {
    if (navUl.style.height == "" || navUl.style.height == "0rem") {
        navUl.style.height = "12.5rem";
    } else {
        navUl.style.height = "0rem";
    }
})
navUl.addEventListener("click", e => {
    navUl.style.height = "0rem";
})

document.querySelector(".body").addEventListener("click", () => {
    if (navUl.style.height == "12.5rem") {
        navUl.style.height = "0rem";
    }
})