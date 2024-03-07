const form = document.getElementById("form")
const userName = document.getElementById("username")
const email = document.getElementById("email")
const password1 = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("click", (e) => {
    e.preventDefault()

    validateInputs()
})


const setError = (element, message ) => {
    const control = element.parentElement
    const errorDis = control.querySelector(".error")

        errorDis.innerText = message
        control.classList.add("error")
        control.classList.remove("success")

}

const setSuccess = element => {
    const control = element.parentElement
    const errorDis = control.querySelector(".error")


    errorDis.innerText = ""
    control.classList.add("success")
    control.classList.remove("error")
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());}

const validateInputs = () => {
    const userNameInput = userName.value.trim()
    const emailInput = email.value.trim()
    const password1Input = password1.value.trim()
    const password2Input = password2.value.trim()


    if(userNameInput === ""){
        setError(userName, "Username is needed!")
    }else{
        setSuccess(userName)
    }

    if(emailInput === ""){
        setError(email, "Email is needed!")
    }else if(!isValidEmail(emailInput)) {
        setError(email, "Email Address is neccesary!")
    } else{
        setSuccess(email)
    }

    if(password1Input === ""){
        setError(password1, "Password is needed!")
    } else if(password1Input.lenght < 8) {
        setError(password1, "Password must be just 8 characters!")
    } else{
        setSuccess(password1)
    }


    if(password2Input === "") {
        setError(password2, "Confirm password please!")
    } else if(password2Input !== password1Input){
        setError(password2, "Password does not match!")
    } else{
        setSuccess(password2)
    }

}