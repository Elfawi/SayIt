const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });



export function fadeUp(text, delay = 0,sync = null){
    tl.fromTo(text, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 ,delay: delay}, sync);
}

export function animateFormTitle(title ,delay = 0,sync = null){
    const text = document.querySelector(title);
const letters = Array.from(text.textContent);
// console.log(letters);
text.textContent = "";
letters.forEach((letter) => {
  text.innerHTML += `<span class="letter">${letter}</span>`;
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: delay, stagger: 0.05, ease: "back.out(3)" },sync
);

}
export function animateFormContainer(formContainer){
    tl.fromTo(
        formContainer,
        { scale: 1.5, opacity: 0, borderRadius: 0 },
        {
          scale: 0.9,
          opacity: 1,
          borderRadius: "2rem",
          delay: 0.35,
          duration: 2.5,
          ease: "elastic.out(1.5, 1)",
        }
      );
}