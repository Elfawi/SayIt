export class User {
    #id;
    #username;
    #email;
    #password;
    #confirmPassword;
    #phone;
    #dateOfBirth;
    #gender;
    
    constructor(username, email, password, confirmPassword, phone, dateOfBirth, gender) {
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
        this.#phone = phone;
        this.#dateOfBirth = dateOfBirth;
        this.#gender = gender;
    }
    setUserData(username, email, password, confirmPassword, phone, dateOfBirth, gender) {
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
        this.#phone = phone;
        this.#dateOfBirth = dateOfBirth;
        this.#gender = gender;
    }
    getUserData() {
        return {
            username: this.#username,
            email: this.#email,
            password: this.#password,
            confirmPassword: this.#confirmPassword,
            phone: this.#phone,
            dateOfBirth: this.#dateOfBirth,
            gender: this.#gender
        }
    }
    sendMessage(){
        console.log("Message sent");
    }
}
// export const user = new User();