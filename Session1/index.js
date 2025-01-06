// Everything we do on the browser is an event.
// CLick, dblClick, hover, scroll, zoom, cut, copy, paste, changing screensize, using keyboard KEys etc. 

// COUNTER 

/**
 * 1. select the element
 * 2. add the event listner to the + and - button element.
 * 
 */


const counterElement = document.getElementById("counter");


const plusButtonElement = document.getElementById("incrementzzz");
const negativeButtonElement = document.getElementById("decrement");

console.dir(counterElement);

plusButtonElement.addEventListener("click", () => {
    const oldValue = Number(counterElement.textContent);
    const latestValue = oldValue + 1;
    counterElement.textContent = latestValue;
})

negativeButtonElement.addEventListener("click", function () {
    const oldValue = Number(counterElement.textContent);
    // if(oldValue === 0) {
    //     return; // stop the -ve cycle
    // }
    const latestValue = oldValue - 1;
    counterElement.textContent = latestValue;
})




const containerElement = document.getElementById("container");

console.dir(containerElement)


containerElement.addEventListener("click",  () => {
    containerElement.style.background = "green";
    containerElement.textContent = "CLICKED!!!"
})
    


containerElement.addEventListener("mouseover", () => {
    containerElement.style.background = "yellow";
    containerElement.textContent = "someone Entered!!!"
})

containerElement.addEventListener("mouseout", () => {
    containerElement.style.background = "white";
    containerElement.textContent = "someone exited!!!"
})

