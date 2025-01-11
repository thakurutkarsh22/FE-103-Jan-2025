const colorDisplayElement = document.getElementById("target");
const palletElement = document.getElementById("pallet");

const greenElement = document.getElementById("green");
const redElement = document.getElementById("red");
const blueElement = document.getElementById("blue");
const yellowElement = document.getElementById("yellow");


// greenElement.addEventListener("click", () => {
//     targetElement.style.background = "green"
//     targetElement.textContent ="Selected Color: green";
// })

// redElement.addEventListener("click", () => {
//     targetElement.style.background = "red"
//     targetElement.textContent = "Selected Color: " + "red";
// })

// blueElement.addEventListener("click", () => {
//     targetElement.style.background = "blue"
//     targetElement.textContent = "Selected Color: " + "blue";
// })

// yellowElement.addEventListener("click", () => {
//     targetElement.style.background = "yellow"
//     targetElement.textContent = "Selected Color: " + "yellow";
// })


// addEventListener -> it takes space in RAM -> 4 space in ram 
// IS this a good way ?  YES OR NO ? 



// -------- event delegation ---------------

// palletElement.addEventListener("click", (eventOvb) => {
//     console.log(eventOvb)
//     const culpritElement = eventOvb.target;
//     const color = culpritElement.id;
//     console.log(culpritElement, color);

//     colorDisplayElement.style.background = color
//     colorDisplayElement.textContent = "Selected Color: " + color;
// })


// it takes space in RAM -> 1 space in ram 




// FORMS 


// HTML - default behaviour of form is to SUBMIT the data to backend and then reload the page

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

    console.log(bookingDetail);
})
