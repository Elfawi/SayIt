import { form } from "./form.js";
import {nameRegex, emailRegex, phoneRegex, passwordRegex } from "./utilities.js";

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

export function colorize(input){
input.addEventListener("input", (e) => {
    const value = e.target.value;
    if(input.type === 'text'){
        if(nameRegex.test(value) && value.length >= 4){
            input.style.borderColor = "var(--color-primary)";
        }
        else{
            input.style.borderColor = "var(--color-danger)";
        }
    }
    // Email validation
    if(input.type === "email"){
    if(emailRegex.test(value)){
    input.style.borderColor = "var(--color-primary)";
    } 
    else{
    input.style.borderColor = "var(--color-danger)";
    }
    }
    // Password validation
    if(input.type === "password"){
      if(passwordRegex.test(value)){
          input.style.borderColor = "var(--color-primary)";
      }
      else{
          input.style.borderColor = "var(--color-danger)";
      }
      }
      // Phone validation
      if(input.type === "tel"){
        if(phoneRegex.test(value)){
            input.style.borderColor = "var(--color-primary)";
        }
        else{
            input.style.borderColor = "var(--color-danger)";
        }
        }
})
}
// export function clearEffects(form){
//     const inputs = document.querySelectorAll('input');
//     inputs.forEach(input => {
//       form.addEventListener('click', (e) => {
//         // if(e.target !== input)
//         // input.style.borderColor = "var(--color-grey-light-3)";
//       })
//       // if(e.target === input)
//       //   colorize(input);
//     })
// }