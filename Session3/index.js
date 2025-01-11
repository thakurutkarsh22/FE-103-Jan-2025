
const nameInfoElement = document.getElementById("name-info");
const emailInfoElement = document.getElementById("email-info");
const fullNameElement = document.getElementById("fullName");
const emailElement = document.getElementById("email");

const form = document.getElementById("booking-form");

console.dir(form)

form.addEventListener("submit", (event) => {
    event.preventDefault(); // this will prevent the reload of page and giving data to backend
    console.log("form submitted");


    const name = form.elements["fullName"].value;
    const email = form.elements["email"].value;
    const doctor = form.elements["doctor"].value;
    const location = form.elements["location"].value;
    const date = form.elements["date"].value;

    const bookingDetail = {
        name: name,
        email: email,
        doctor: doctor,
        location: location,
        datezazzz: date
    }

    // FORM VALIDATION 

    const isValid = validate(bookingDetail);


    // send the data to backend.

    if(isValid) {
        fetch("anyUrl", {
            method: "POST",
            body: JSON.stringify(bookingDetail)
        })
    } else {
        alert('please look at the form')
    }

    console.log(bookingDetail);
})

function validate(appointmentObject){

    const {name, email, doctor} = appointmentObject;

    const isNameValid = nameValidation(name);

    const isEmailValid = emailValidation(email);

    const isDoctorValid = true;

    return isNameValid && isEmailValid && isDoctorValid;
}

function nameValidation(nameInput = "") {
    let isValid = true;

    const name = nameInput.trim();
    const nameRegex = /^[A-Za-z\s\-.']+$/;

    if(!name) {
        isValid = false;
        nameInfoElement.textContent = "Name should be there!!";
    } else if (name.length < 3 && name.length > 50) {
        isValid = false;
        nameInfoElement.textContent = "Name should have 2 letters";
    } else if (!name.match(nameRegex)) {
        isValid = false;
        nameInfoElement.textContent = "Name should not have special characters";
    }
    return isValid;
}

function emailValidation(emailInput = "") {
    let isValid = true;
    const email = emailInput.trim();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


    if(!email) {
        isValid = false;
        emailInfoElement.textContent = "email should be there!!";
    } else if (!email.match(emailRegex)) {
        isValid = false;
        emailInfoElement.textContent = "email should be correct";
    }
    return isValid;
}


// GOVT WEBSITE ENDs, interactive starts 

fullNameElement.addEventListener("focus", () => {
    console.log("name focus")
    nameInfoElement.textContent = "";
})

fullNameElement.addEventListener("blur", (e) => {
    const name = e.target.value
    const isNameValid = nameValidation(name);
})



emailElement.addEventListener("focus", () => {
    emailInfoElement.textContent = "";
})

emailElement.addEventListener("blur", (e) => {
    const email = e.target.value
    const isNameValid = emailValidation(email);
})

// 








// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response => {
//     return response.json()
// }).then(data => {
//     console.log("play with data", data)
// })