//////////////////////////////


export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const phoneRegex = /^(\+2)?01[0125]\d{8}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;








export function togglePasswordVisibility(icon){
    icon.classList.toggle("fa-eye-slash");
    icon.classList.toggle("fa-eye");
}