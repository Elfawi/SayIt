
import { User } from "./user.js";
import { togglePasswordVisibility } from "./utilities.js";
import { emailRegex, phoneRegex, passwordRegex } from "./utilities.js";
import { animateFormContainer , animateFormTitle , fadeUp} from "./GSAPAnimations.js";
//////// Form Animations


let sender;

class Form{
//////// Form Animations
#signUpButton = document.getElementById("signUp");
#signInButton = document.getElementById("signIn");
#container = document.getElementById("container");
///////////////////////////////
// From validation
    initForm(){
        this.#initFormAnimations();
        this.checkValidationLayerTwo();
        this.checkValidationLayerOne();
    }
///// SIGN IN Variables
#signInUsername = document.getElementById("signInUsername");
#password = document.getElementById("sign-in-password");
///// SIGN IN END Variables
#message = document.querySelector(".form__message");
//// SIGN UP  => Create Account
#createAccountForm = document.getElementById("create-account__form");
#signInForm = document.getElementById("sign-in__form");
#username = document.getElementById("username");
#email = document.getElementById("email");
#CreateAccountpassword = document.getElementById("create-account-password");
#confirmPassword = document.getElementById("confirm-password");
#phone = document.getElementById("phone");
#dateOfBirth = document.getElementById("dateOfBirth");
#gender;
///// SIGN UP END 
    checkValidationLayerOne(){
    this.#createAccountForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.#gender = [...document.querySelectorAll('.form__radio-input[name="gender"]')].map(gender => gender.checked ? gender.value : null) .filter(gender => gender !== null)[0];
        if(this.#username.value && this.#email.value && this.#CreateAccountpassword.value && this.#confirmPassword.value && this.#phone.value && this.#dateOfBirth.value && this.#gender){
            this.#renderMessageSuccess("Sign up success");
        }
        else{
           





            if(this.#gender ==='' || this.#gender === null || this.#gender === undefined)
            this.#renderMessageError("Check your Gender");
            if(this.#dateOfBirth.value ==='' || this.#dateOfBirth.value === null || this.#dateOfBirth.value === undefined)
                this.#renderMessageError("Check your Date of Birth, Cannot be empty");
            if(this.#phone.value ==='' || this.#phone.value === null || this.#phone.value === undefined)
                this.#renderMessageError("Check your Phone Number, Cannot be empty");
            if(this.#confirmPassword.value ==='' || this.#confirmPassword.value === null || this.#confirmPassword.value === undefined)
                this.#renderMessageError("Check your Confirm Password, Cannot be empty");
            if(this.#CreateAccountpassword.value ==='' || this.#CreateAccountpassword.value === null || this.#CreateAccountpassword.value === undefined)
                this.#renderMessageError("Check your Password, Cannot be empty");
            if(this.#email.value ==='' || this.#email.value === null || this.#email.value === undefined)
                this.#renderMessageError("Check your Email, Cannot be empty");
            if(this.#username.value ===''|| this.#username.value === null || this.#username.value === undefined)
                this.#renderMessageError("Check your Username, Cannot be empty");
    }
        })
    }

    checkValidationLayerTwo(){       
            let username;
            let email;
            let password;
            let confirmPassword;
            let phone;
            console.log(emailRegex.test(this.#email.value.trim()));
            // let dateOfBirth =document.getElementById("dateOfBirth").value;
            // let gender;
            this.#createAccountForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                if(this.#username.value.trim().includes(" "))
                    this.#renderMessageError("Check your Username, Cannot contain spaces");
                else username = this.#username.value.trim().toLowerCase();
                
                if(!emailRegex.test(this.#email.value.trim()))
                    this.#renderMessageError("Your email is not valid"); 
                else email = this.#email.value.trim().toLowerCase();
                
                if(!passwordRegex.test(this.#CreateAccountpassword.value))
                    this.#renderMessageError("Your password is not valid , it must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
                if(this.#CreateAccountpassword.value !== this.#confirmPassword.value)
                    this.#renderMessageError("Passwords do not match");
                else password = confirmPassword = this.#CreateAccountpassword.value;
                
                if(!phoneRegex.test(this.#phone.value.trim()))
                    this.#renderMessageError("Your phone number is not valid");
                else phone = this.#phone.value.trim();
                if(username && email && password && confirmPassword && phone && dateOfBirth.value && this.#gender){
                    sender = new User(username,email,password,confirmPassword,phone,this.#dateOfBirth.value,this.#gender);
                    console.log(sender.getUserData());
                    setTimeout(() => {
                        e.target.submit();
                    }, 2000);
                }
                    })
                
    }
    #showPassword(){
        const showIconSignUp = document.querySelector(".show-password");
        const showIconLogin = document.querySelector(".show-password-login");
        const showConfirmPassword = document.querySelector(".show-confirm-password");
        showIconSignUp.addEventListener("click", ()=>{
            togglePasswordVisibility(showIconSignUp);
        if(this.#CreateAccountpassword.type === "password"){
            this.#CreateAccountpassword.type = "text";
        }
        else{
            this.#CreateAccountpassword.type = "password";
        }
    })
        showConfirmPassword.addEventListener("click", ()=>{
        togglePasswordVisibility(showConfirmPassword);
        if(this.#confirmPassword.type === "password"){
            this.#confirmPassword.type = "text";
            // this.#confirmPassword.type = "password";
        }
        else{
            this.#confirmPassword.type = "password";
        }
    })

    showIconLogin.addEventListener("click", ()=>{
        togglePasswordVisibility(showIconLogin);
        if(this.#password.type === "password"){
        this.#password.type = "text";
        }
        else{
        this.#password.type = "password";
        }
        })
    }
#initFormAnimations() {
    this.#signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    animateFormTitle(".form__title-sign-up",0.3);
    animateFormTitle(".overlay-title-right",0.3);

    });
    this.#signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
        animateFormTitle(".form__title-login",0);
    animateFormTitle(".overlay-title-left",0 );
    fadeUp(".overlay-subtitle-left");

        });
        this.#showPassword();
        animateFormContainer(this.#container);
        animateFormTitle(".form__title-login");
        animateFormTitle(".overlay-title-left");
        fadeUp(".overlay-subtitle-left",'<50%');

    }
    /////////////////// SIGN UP END   => Create Account //////////////////---
    #renderMessageError(message) {
        this.#message.style.display = "block";
        this.#message.textContent = `*${message}`;
        this.#message.classList.remove("form__message-success");
        this.#message.classList.add("form__message-error");
    }
    #renderMessageSuccess(message) {
        this.#message.style.display = "block";
        this.#message.textContent = message;
        this.#message.classList.remove("form__message-error");
        this.#message.classList.add("form__message-success");
    }

}

// From animations end
export const form = new Form();

// console.log(sender.getUserData());