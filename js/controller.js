
import {form} from "./form.js";
// if(document.forms.length === 2 && window.location.href !== "http://127.0.0.1:5500/home.html"){
    // form.checkValidationLayerOne();
    // form.checkValidationLayerTwo();
// }

if(document.forms.length === 2 && window.location.href !== "http://127.0.0.1:5500/home.html")
form.initForm();


//   Temporary solution
const url = window.location.href;
if(url.includes("?")){
    window.location.href = url.split("?")[0];
}
console.log(url);

//////////////////