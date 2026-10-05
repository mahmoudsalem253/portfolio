const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav-links");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".skill-card,.project,.service,.info-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(14px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
