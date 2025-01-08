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


containerElement.addEventListener("click",  (eventObject) => {
    console.log(eventObject);
    containerElement.style.background = "green";
    containerElement.textContent = "CLICKED!!!"
})
    


containerElement.addEventListener("mouseover", (event) => {
    console.log(event);
    containerElement.style.background = "yellow";
    containerElement.textContent = "someone Entered!!!"
})

containerElement.addEventListener("mouseout", (event) => {
    console.log(event);

    containerElement.style.background = "white";
    containerElement.textContent = "someone exited!!!"
})


// eventObject  -> is nothing the the representation of event 

/**
 * {
 *  isTrusted
: 
true
altKey
: 
false
bubbles
: 
true
button
: 
0
buttons
: 
0
cancelBubble
: 
false
cancelable
: 
true
clientX
: 
52
clientY
: 
86
composed
: 
true
ctrlKey
: 
false
currentTarget
: 
null
defaultPrevented
: 
false
detail
: 
0
eventPhase
: 
0
fromElement
: 
null
layerX
: 
52
layerY
: 
191
metaKey
: 
false
movementX
: 
0
movementY
: 
0
offsetX
: 
23
offsetY
: 
35
pageX
: 
52
pageY
: 
191
relatedTarget
: 
null
returnValue
: 
true
screenX
: 
47
screenY
: 
-699
shiftKey
: 
false
sourceCapabilities
: 
InputDeviceCapabilities {firesTouchEvents: false}
srcElement
: 
div#container
target
: 
div#container
timeStamp
: 
22683.70000000298
toElement
: 
div#container
type
: 
"mouseover"
view
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
which
: 
0
x
: 
52
y
: 
86
 * }
 */
{}


// utkarsh -> OBJ 
// {
//     name: "utkarsh",
//     age: 26,
//     salary: 1000,

// }


// IPL -> OBJ 
// {
//     startDate: "feb",
//     endDate: "march",
//     winner: "csk",
//     2ndWinner: ""
// }