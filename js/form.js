
import { User } from "./user.js";
import { togglePasswordVisibility } from "./utilities.js";
import { emailRegex, phoneRegex, passwordRegex } from "./utilities.js";
import { animateFormContainer , animateFormTitle , fadeUp , colorize } from "./GSAPAnimations.js";
//////// Form Animations


let sender;
let flagOne = false;
let flagTwo = false;

class Form{
//////// Form Animations
#signUpButton = document.getElementById("signUp");
#signInButton = document.getElementById("signIn");
#container = document.getElementById("container");
/////////////////////////////
// From validation
    initForm(){
        this.#initFormAnimations();
        this.LoginValidation();
        this.checkValidationLayerTwo();
    }
///// SIGN IN Variables
#signInEmail = document.getElementById("sign-in-email");
#password = document.getElementById("sign-in-password");
///// SIGN IN END Variables
#messageSignUp = document.querySelector(".message__sign-up");
#messageSignIn = document.querySelector(".message__sign-in");

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
        flagOne = true;
        }
        else{
            if(this.#gender ==='' || this.#gender === null || this.#gender === undefined)
            this.#renderMessageError(this.#messageSignUp,"Check your Gender");
            if(this.#dateOfBirth.value ==='' || this.#dateOfBirth.value === null || this.#dateOfBirth.value === undefined)
                this.#renderMessageError(this.#messageSignUp,"Check your Date of Birth, Cannot be empty");
            if(this.#phone.value ==='' || this.#phone.value === null || this.#phone.value === undefined)
                this.#renderMessageError(this.#messageSignUp,"Check your Phone Number, Cannot be empty");
            if(this.#confirmPassword.value ==='' || this.#confirmPassword.value === null || this.#confirmPassword.value === undefined)
                this.#renderMessageError(this.#messageSignUp,"Check your Confirm Password, Cannot be empty");
            if(this.#CreateAccountpassword.value ==='' || this.#CreateAccountpassword.value === null || this.#CreateAccountpassword.value === undefined)
                this.#renderMessageError(this.#messageSignUp,"Check your Password, Cannot be empty");
            if(this.#email.value ==='' || this.#email.value === null || this.#email.value === undefined)
                this.#renderMessageError(this.#messageSignUp,"Check your Email, Cannot be empty");
            if(this.#username.value ===''|| this.#username.value === null || this.#username.value === undefined)
                this.#renderMessageError(this.#messageSignUp,"Check your Username, Cannot be empty");
            flagOne = false;
        }
        })
        return flagOne;
    }
    LoginValidation(){

        this.#signInForm.addEventListener('submit',(e)=>{
            e.preventDefault()
           
            if(!passwordRegex.test(this.#password.value))
                this.#renderMessageError(this.#messageSignIn,"Your password is not Correct");
            if(!emailRegex.test(this.#signInEmail.value))
                this.#renderMessageError(this.#messageSignIn,"Your email is not valid");
            if(this.#password.value === '' || this.#password.value === null || this.#password.value === undefined)
                this.#renderMessageError(this.#messageSignIn,"Check your Password, Cannot be empty");
            if(this.#signInEmail.value === '' || this.#signInEmail.value === null || this.#signInEmail.value === undefined)
                this.#renderMessageError(this.#messageSignIn,"Check your Email, Cannot be empty");
            if(emailRegex.test(this.#signInEmail.value) && passwordRegex.test(this.#password.value)){
                this.#renderMessageSuccess(this.#messageSignIn,'Logged in successfuly');
            }
        })
    }
    checkValidationLayerTwo(){ 

            this.checkValidationLayerOne();
            this.#createAccountForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                let username;
                let email;
                let password;
                let confirmPassword;
                let phone;
                let dateOfBirth;
                let gender;
                dateOfBirth =this.#dateOfBirth.value;
                gender = this.#gender;
                if(this.checkValidationLayerOne()){
                    flagTwo = false;
                    if(this.#username.value.trim().includes(" "))
                        this.#renderMessageError(this.#messageSignUp,"Check your Username, Cannot contain spaces");
                    else username = this.#username.value.trim().toLowerCase();
                    if(!emailRegex.test(this.#email.value.trim()))
                        this.#renderMessageError(this.#messageSignUp,"Your email is not valid"); 
                    else email = this.#email.value.trim().toLowerCase();
                    if(!passwordRegex.test(this.#CreateAccountpassword.value))
                        this.#renderMessageError(this.#messageSignUp,"Your password is not valid , it must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
                    if(this.#CreateAccountpassword.value !== this.#confirmPassword.value)
                        this.#renderMessageError(this.#messageSignUp,"Passwords do not match");
                    else password = confirmPassword = this.#CreateAccountpassword.value;
                    if(!phoneRegex.test(this.#phone.value.trim()))
                        this.#renderMessageError(this.#messageSignUp,"Your phone number is not valid");
                    else phone = this.#phone.value.trim();
                    if(username && email && password && confirmPassword && phone && dateOfBirth && gender){
                            flagTwo = true;
                            sender = new User(username,email,password,confirmPassword,phone,dateOfBirth,gender);
                            console.log(sender.getUserData());
                            this.#renderMessageSuccess(this.#messageSignUp,"Account Created Successfuly");
                            setTimeout(() => {
                                e.target.submit();
                            }, 2000);
                            }
                        }
                        
                    }
                )
                return flagTwo;
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
    /// Form Validation Color
        colorize(this.#username);
        colorize(this.#signInEmail);
        colorize(this.#email);
        colorize(this.#phone);
        colorize(this.#password);
        colorize(this.#CreateAccountpassword);
        colorize(this.#confirmPassword);
   ////////////////////////////////
    this.#signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    animateFormTitle(".form__title-sign-up",0);
    animateFormTitle(".overlay-title-left",0);
    fadeUp(".overlay-subtitle-left",1,'<20%');
    this.#clearMessages();

    });
    this.#signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
        animateFormTitle(".form__title-login",0);
        animateFormTitle(".overlay-title-right",0,'<');
        fadeUp(".overlay-subtitle-right",1.5,'<20%');
        this.#clearMessages();
        });
        this.#showPassword();
        animateFormContainer(this.#container);
        animateFormTitle(".form__title-login",0.75);
        animateFormTitle(".overlay-title-right",0.75);
        fadeUp(".overlay-subtitle-right",0.7,'<');
    }
    /////////////////// SIGN UP END   => Create Account //////////////////---
    #renderMessageError(messageEl,message) {
        messageEl.style.display = "block";
        messageEl.textContent = `*${message}`;
        messageEl.classList.remove("form__message-success");
        messageEl.classList.add("form__message-error");
    }
    #renderMessageSuccess(messageEl,message) {
        messageEl.style.display = "block";
        messageEl.textContent = message;
        messageEl.classList.remove("form__message-error");
        messageEl.classList.add("form__message-success");
    }
    #clearMessages(){
        this.#messageSignIn.style.display = "none";
        this.#messageSignUp.style.display = "none";
    }

}

// From animations end
export const form = new Form();
// console.log(sender.getUserData());