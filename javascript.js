/*==================================================
            MATHIFY | SCRIPT.JS (PART 1)
        Global Features for All HTML Pages
==================================================*/


/*=========================================
            PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1000);

    }

});


/*=========================================
            MOBILE NAVIGATION
=========================================*/

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}


/*=========================================
            SCROLL TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(topBtn){

        if(document.body.scrollTop > 300 ||
           document.documentElement.scrollTop > 300){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    }

}

if(topBtn){

    topBtn.onclick=function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}


/*=========================================
            LIVE CLOCK
=========================================*/

function updateClock(){

    const clock=document.getElementById("clock");

    if(!clock) return;

    const now=new Date();

    let hour=now.getHours();

    let minute=now.getMinutes();

    let second=now.getSeconds();

    let ampm="AM";

    if(hour>=12){

        ampm="PM";

    }

    hour=hour%12;

    hour=hour?hour:12;

    hour=String(hour).padStart(2,"0");
    minute=String(minute).padStart(2,"0");
    second=String(second).padStart(2,"0");

    clock.innerHTML=
    `${hour}:${minute}:${second} ${ampm}`;

}

setInterval(updateClock,1000);

updateClock();


/*=========================================
            CURRENT DATE
=========================================*/

function showDate(){

    const date=document.getElementById("date");

    if(!date) return;

    const today=new Date();

    const options={

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric"

    };

    date.innerHTML=today.toLocaleDateString("en-US",options);

}

showDate();


/*=========================================
            MATH QUOTES
=========================================*/

const quotes=[

"Mathematics is the language of the universe.",

"Pure mathematics is the poetry of logical ideas.",

"Without mathematics, there's nothing you can do.",

"Mathematics knows no races or boundaries.",

"Success is the sum of small efforts repeated daily.",

"The only way to learn mathematics is to do mathematics.",

"Mathematics is not about numbers, equations, computations, or algorithms; it is about understanding."

];

const quote=document.getElementById("quote");

if(quote){

    const random=Math.floor(Math.random()*quotes.length);

    quote.innerHTML=quotes[random];

}


/*=========================================
            FUN FACTS
=========================================*/

const facts=[

"Zero is the only number that cannot be represented using Roman numerals.",

"A circle has infinite lines of symmetry.",

"Pi never ends and never repeats.",

"A googol is the number 1 followed by 100 zeros.",

"The equals sign (=) was invented in 1557.",

"Ancient Egyptians used geometry to build pyramids.",

"The word mathematics comes from the Greek word 'mathema'.",

"There are infinitely many prime numbers.",

"A right angle measures exactly 90 degrees.",

"Every square is also a rectangle."

];

const fact=document.getElementById("fact");

const factBtn=document.getElementById("factBtn");

function randomFact(){

    if(!fact) return;

    const random=Math.floor(Math.random()*facts.length);

    fact.innerHTML=facts[random];

}

if(fact){

    randomFact();

}

if(factBtn){

    factBtn.addEventListener("click",randomFact);

}


/*=========================================
            GREETING
=========================================*/

function greetUser(){

    const username=document.getElementById("username");

    const greeting=document.getElementById("greeting");

    if(!username || !greeting) return;

    const name=username.value.trim();

    if(name===""){

        greeting.innerHTML="Please enter your name.";

        greeting.style.color="#e53935";

        return;

    }

    const hour=new Date().getHours();

    let message="";

    if(hour<12){

        message="Good Morning";

    }

    else if(hour<18){

        message="Good Afternoon";

    }

    else{

        message="Good Evening";

    }

    greeting.style.color="#f06292";

    greeting.innerHTML=
    `${message}, <strong>${name}</strong>! Keep learning and enjoy using Mathify.`;

}


/*=========================================
        ENTER KEY FOR GREETING
=========================================*/

const username=document.getElementById("username");

if(username){

    username.addEventListener("keypress",function(e){

        if(e.key==="Enter"){

            greetUser();

        }

    });

}


/*=========================================
            SMOOTH FADE-IN
=========================================*/

const cards=document.querySelectorAll(

".card, .feature, .formula-card, .skill, .contact-card"

);

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".6s";

    observer.observe(card);

});


/*=========================================
            END OF PART 1
=========================================*/

/*==================================================
            MATHIFY | SCRIPT.JS (PART 2)
        Scientific Calculator Functions
==================================================*/


/*=========================================
            DISPLAY
=========================================*/

const display = document.getElementById("display");


/*=========================================
            APPEND VALUE
=========================================*/

function appendValue(value){

    if(!display) return;

    display.value += value;

}


/*=========================================
            CLEAR DISPLAY
=========================================*/

function clearDisplay(){

    if(!display) return;

    display.value = "";

}


/*=========================================
            DELETE LAST CHARACTER
=========================================*/

function deleteLast(){

    if(!display) return;

    display.value = display.value.slice(0,-1);

}


/*=========================================
            SQUARE ROOT
=========================================*/

function squareRoot(){

    if(!display) return;

    try{

        const value = eval(display.value);

        if(value < 0){

            display.value = "Invalid";

            return;

        }

        display.value = Math.sqrt(value);

    }

    catch{

        display.value = "Error";

    }

}


/*=========================================
            CALCULATE
=========================================*/

function calculate(){

    if(!display) return;

    try{

        const expression = display.value;

        const answer = eval(expression);

        addHistory(expression + " = " + answer);

        display.value = answer;

    }

    catch{

        display.value = "Error";

    }

}


/*=========================================
            HISTORY
=========================================*/

const historyList = document.getElementById("historyList");


function addHistory(text){

    if(!historyList) return;

    const li = document.createElement("li");

    li.textContent = text;

    historyList.prepend(li);

}


/*=========================================
            CLEAR HISTORY
=========================================*/

function clearHistory(){

    if(!historyList) return;

    historyList.innerHTML = "";

}


/*=========================================
            COPY RESULT
=========================================*/

function copyResult(){

    if(!display) return;

    navigator.clipboard.writeText(display.value);

    alert("Result copied!");

}


/*=========================================
            KEYBOARD SUPPORT
=========================================*/

document.addEventListener("keydown",function(e){

    if(!display) return;

    const key = e.key;

    if(
        (key >= "0" && key <= "9") ||
        key=="+" ||
        key=="-" ||
        key=="*" ||
        key=="/" ||
        key=="." ||
        key=="%" ||
        key=="(" ||
        key==")"
    ){

        display.value += key;

    }

    else if(key=="Backspace"){

        deleteLast();

    }

    else if(key=="Delete"){

        clearDisplay();

    }

    else if(key=="Enter"){

        e.preventDefault();

        calculate();

    }

});


/*=========================================
        PREVENT INVALID INPUT
=========================================*/

function validateDisplay(){

    if(!display) return;

    if(display.value=="Error" || display.value=="Invalid"){

        display.value="";

    }

}

if(display){

    display.addEventListener("click",validateDisplay);

}


/*=========================================
            BUTTON ANIMATION
=========================================*/

const calcButtons=document.querySelectorAll(".calculator-buttons button");

calcButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.92)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },120);

    });

});


/*=========================================
        AUTO CLEAR AFTER ERROR
=========================================*/

if(display){

    display.addEventListener("input",()=>{

        if(display.value==="Error" || display.value==="Invalid"){

            display.value="";

        }

    });

}


/*=========================================
        DOUBLE CLICK TO CLEAR
=========================================*/

if(display){

    display.addEventListener("dblclick",()=>{

        clearDisplay();

    });

}


/*=========================================
        END OF PART 2
=========================================*/

/*==================================================
            MATHIFY | SCRIPT.JS (PART 3A)
        Diameter & Area Calculators
==================================================*/


/*=========================================
            HELPER FUNCTION
=========================================*/

function getValue(id){

    return parseFloat(document.getElementById(id).value);

}


/*=========================================
            DIAMETER CALCULATORS
=========================================*/


// Circle Diameter

function circleDiameter(){

    const radius = getValue("circleRadius");

    if(isNaN(radius) || radius <= 0){

        alert("Please enter a valid radius.");

        return;

    }

    document.getElementById("circleResult").innerHTML =
    "Diameter = " + (2 * radius).toFixed(2);

}

function clearCircle(){

    document.getElementById("circleRadius").value="";
    document.getElementById("circleResult").innerHTML="";

}


// Radius from Diameter

function circleRadius(){

    const diameter = getValue("diameterValue");

    if(isNaN(diameter) || diameter <=0){

        alert("Please enter a valid diameter.");

        return;

    }

    document.getElementById("radiusResult").innerHTML =
    "Radius = " + (diameter/2).toFixed(2);

}

function clearRadius(){

    document.getElementById("diameterValue").value="";
    document.getElementById("radiusResult").innerHTML="";

}


// Diameter from Circumference

function circumferenceDiameter(){

    const circumference = getValue("circumferenceValue");

    if(isNaN(circumference) || circumference<=0){

        alert("Please enter a valid circumference.");

        return;

    }

    const diameter = circumference / Math.PI;

    document.getElementById("circumferenceResult").innerHTML =
    "Diameter = " + diameter.toFixed(2);

}

function clearCircumference(){

    document.getElementById("circumferenceValue").value="";
    document.getElementById("circumferenceResult").innerHTML="";

}



/*=========================================
            AREA CALCULATORS
=========================================*/


// Square

function squareArea(){

    const side = getValue("squareSide");

    if(isNaN(side) || side<=0){

        alert("Please enter a valid side.");

        return;

    }

    const answer = side * side;

    document.getElementById("squareResult").innerHTML =
    "Area = " + answer.toFixed(2);

}

function clearSquare(){

    document.getElementById("squareSide").value="";
    document.getElementById("squareResult").innerHTML="";

}


// Rectangle

function rectangleArea(){

    const length = getValue("rectangleLength");
    const width = getValue("rectangleWidth");

    if(isNaN(length)||isNaN(width)||length<=0||width<=0){

        alert("Please enter valid values.");

        return;

    }

    const answer = length * width;

    document.getElementById("rectangleResult").innerHTML =
    "Area = " + answer.toFixed(2);

}

function clearRectangle(){

    document.getElementById("rectangleLength").value="";
    document.getElementById("rectangleWidth").value="";
    document.getElementById("rectangleResult").innerHTML="";

}


// Triangle

function triangleArea(){

    const base = getValue("triangleBase");
    const height = getValue("triangleHeight");

    if(isNaN(base)||isNaN(height)||base<=0||height<=0){

        alert("Please enter valid values.");

        return;

    }

    const answer = (base * height) / 2;

    document.getElementById("triangleResult").innerHTML =
    "Area = " + answer.toFixed(2);

}

function clearTriangle(){

    document.getElementById("triangleBase").value="";
    document.getElementById("triangleHeight").value="";
    document.getElementById("triangleResult").innerHTML="";

}


// Circle

function areaCircle(){

    const radius = getValue("areaCircleRadius");

    if(isNaN(radius)||radius<=0){

        alert("Please enter a valid radius.");

        return;

    }

    const answer = Math.PI * radius * radius;

    document.getElementById("areaCircleResult").innerHTML =
    "Area = " + answer.toFixed(2);

}

function clearAreaCircle(){

    document.getElementById("areaCircleRadius").value="";
    document.getElementById("areaCircleResult").innerHTML="";

}


// Parallelogram

function parallelogramArea(){

    const base = getValue("paraBase");
    const height = getValue("paraHeight");

    if(isNaN(base)||isNaN(height)||base<=0||height<=0){

        alert("Please enter valid values.");

        return;

    }

    const answer = base * height;

    document.getElementById("paraResult").innerHTML =
    "Area = " + answer.toFixed(2);

}

function clearParallelogram(){

    document.getElementById("paraBase").value="";
    document.getElementById("paraHeight").value="";
    document.getElementById("paraResult").innerHTML="";

}


// Trapezoid

function trapezoidArea(){

    const base1 = getValue("trapBase1");
    const base2 = getValue("trapBase2");
    const height = getValue("trapHeight");

    if(isNaN(base1)||isNaN(base2)||isNaN(height)
        ||base1<=0||base2<=0||height<=0){

        alert("Please enter valid values.");

        return;

    }

    const answer = ((base1 + base2) * height) / 2;

    document.getElementById("trapResult").innerHTML =
    "Area = " + answer.toFixed(2);

}

function clearTrapezoid(){

    document.getElementById("trapBase1").value="";
    document.getElementById("trapBase2").value="";
    document.getElementById("trapHeight").value="";
    document.getElementById("trapResult").innerHTML="";

}


/*==================================================
            END OF PART 3A
==================================================*/

/*==================================================
        MATHIFY | SCRIPT.JS (PART 3B-1)
        Volume Calculators
==================================================*/


/*=========================================
            CUBE
=========================================*/

function cubeVolume(){

    const side = getValue("cubeSide");

    if(isNaN(side) || side <= 0){

        alert("Please enter a valid side length.");
        return;

    }

    const volume = Math.pow(side, 3);

    document.getElementById("cubeResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function clearCube(){

    document.getElementById("cubeSide").value = "";
    document.getElementById("cubeResult").innerHTML = "";

}


/*=========================================
        RECTANGULAR PRISM
=========================================*/

function prismVolume(){

    const length = getValue("prismLength");
    const width = getValue("prismWidth");
    const height = getValue("prismHeight");

    if(
        isNaN(length) ||
        isNaN(width) ||
        isNaN(height) ||
        length <= 0 ||
        width <= 0 ||
        height <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const volume = length * width * height;

    document.getElementById("prismResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function clearPrism(){

    document.getElementById("prismLength").value = "";
    document.getElementById("prismWidth").value = "";
    document.getElementById("prismHeight").value = "";
    document.getElementById("prismResult").innerHTML = "";

}


/*=========================================
            CYLINDER
=========================================*/

function cylinderVolume(){

    const radius = getValue("cylinderRadius");
    const height = getValue("cylinderHeight");

    if(
        isNaN(radius) ||
        isNaN(height) ||
        radius <= 0 ||
        height <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const volume = Math.PI * radius * radius * height;

    document.getElementById("cylinderResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function clearCylinder(){

    document.getElementById("cylinderRadius").value = "";
    document.getElementById("cylinderHeight").value = "";
    document.getElementById("cylinderResult").innerHTML = "";

}


/*=========================================
                CONE
=========================================*/

function coneVolume(){

    const radius = getValue("coneRadius");
    const height = getValue("coneHeight");

    if(
        isNaN(radius) ||
        isNaN(height) ||
        radius <= 0 ||
        height <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const volume = (Math.PI * radius * radius * height) / 3;

    document.getElementById("coneResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function clearCone(){

    document.getElementById("coneRadius").value = "";
    document.getElementById("coneHeight").value = "";
    document.getElementById("coneResult").innerHTML = "";

}


/*=========================================
                SPHERE
=========================================*/

function sphereVolume(){

    const radius = getValue("sphereRadius");

    if(isNaN(radius) || radius <= 0){

        alert("Please enter a valid radius.");
        return;

    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("sphereResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function clearSphere(){

    document.getElementById("sphereRadius").value = "";
    document.getElementById("sphereResult").innerHTML = "";

}


/*=========================================
                PYRAMID
=========================================*/

function pyramidVolume(){

    const length = getValue("pyramidLength");
    const width = getValue("pyramidWidth");
    const height = getValue("pyramidHeight");

    if(
        isNaN(length) ||
        isNaN(width) ||
        isNaN(height) ||
        length <= 0 ||
        width <= 0 ||
        height <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const volume = (length * width * height) / 3;

    document.getElementById("pyramidResult").innerHTML =
    "Volume = " + volume.toFixed(2);

}

function clearPyramid(){

    document.getElementById("pyramidLength").value = "";
    document.getElementById("pyramidWidth").value = "";
    document.getElementById("pyramidHeight").value = "";
    document.getElementById("pyramidResult").innerHTML = "";

}


/*==================================================
            END OF PART 3B-1
==================================================*/

/*==================================================
        MATHIFY | SCRIPT.JS (PART 3B-2)
        Perimeter Calculators
==================================================*/


/*=========================================
        RECTANGLE PERIMETER
=========================================*/

function rectanglePerimeter(){

    const length = getValue("rectPerLength");
    const width = getValue("rectPerWidth");

    if(
        isNaN(length) ||
        isNaN(width) ||
        length <= 0 ||
        width <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const perimeter = 2 * (length + width);

    document.getElementById("rectanglePerimeterResult").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

function clearRectanglePerimeter(){

    document.getElementById("rectPerLength").value = "";
    document.getElementById("rectPerWidth").value = "";
    document.getElementById("rectanglePerimeterResult").innerHTML = "";

}


/*=========================================
            SQUARE PERIMETER
=========================================*/

function squarePerimeter(){

    const side = getValue("squarePerSide");

    if(isNaN(side) || side <= 0){

        alert("Please enter a valid side.");
        return;

    }

    const perimeter = 4 * side;

    document.getElementById("squarePerimeterResult").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

function clearSquarePerimeter(){

    document.getElementById("squarePerSide").value = "";
    document.getElementById("squarePerimeterResult").innerHTML = "";

}


/*=========================================
        TRIANGLE PERIMETER
=========================================*/

function trianglePerimeter(){

    const side1 = getValue("triangleSide1");
    const side2 = getValue("triangleSide2");
    const side3 = getValue("triangleSide3");

    if(
        isNaN(side1) ||
        isNaN(side2) ||
        isNaN(side3) ||
        side1 <= 0 ||
        side2 <= 0 ||
        side3 <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const perimeter = side1 + side2 + side3;

    document.getElementById("trianglePerimeterResult").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

function clearTrianglePerimeter(){

    document.getElementById("triangleSide1").value = "";
    document.getElementById("triangleSide2").value = "";
    document.getElementById("triangleSide3").value = "";
    document.getElementById("trianglePerimeterResult").innerHTML = "";

}


/*=========================================
        CIRCLE CIRCUMFERENCE
=========================================*/

function circlePerimeter(){

    const radius = getValue("circlePerRadius");

    if(isNaN(radius) || radius <= 0){

        alert("Please enter a valid radius.");
        return;

    }

    const circumference = 2 * Math.PI * radius;

    document.getElementById("circlePerimeterResult").innerHTML =
    "Circumference = " + circumference.toFixed(2);

}

function clearCirclePerimeter(){

    document.getElementById("circlePerRadius").value = "";
    document.getElementById("circlePerimeterResult").innerHTML = "";

}


/*=========================================
    PARALLELOGRAM PERIMETER
=========================================*/

function parallelogramPerimeter(){

    const base = getValue("paraSide1");
    const side = getValue("paraSide2");

    if(
        isNaN(base) ||
        isNaN(side) ||
        base <= 0 ||
        side <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const perimeter = 2 * (base + side);

    document.getElementById("parallelogramPerimeterResult").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

function clearParallelogramPerimeter(){

    document.getElementById("paraSide1").value = "";
    document.getElementById("paraSide2").value = "";
    document.getElementById("parallelogramPerimeterResult").innerHTML = "";

}


/*=========================================
        TRAPEZOID PERIMETER
=========================================*/

function trapezoidPerimeter(){

    const side1 = getValue("trapSide1");
    const side2 = getValue("trapSide2");
    const side3 = getValue("trapSide3");
    const side4 = getValue("trapSide4");

    if(
        isNaN(side1) ||
        isNaN(side2) ||
        isNaN(side3) ||
        isNaN(side4) ||
        side1 <= 0 ||
        side2 <= 0 ||
        side3 <= 0 ||
        side4 <= 0
    ){

        alert("Please enter valid values.");
        return;

    }

    const perimeter = side1 + side2 + side3 + side4;

    document.getElementById("trapezoidPerimeterResult").innerHTML =
    "Perimeter = " + perimeter.toFixed(2);

}

function clearTrapezoidPerimeter(){

    document.getElementById("trapSide1").value = "";
    document.getElementById("trapSide2").value = "";
    document.getElementById("trapSide3").value = "";
    document.getElementById("trapSide4").value = "";
    document.getElementById("trapezoidPerimeterResult").innerHTML = "";

}


/*=========================================
        INPUT VALIDATION
=========================================*/

document.querySelectorAll("input[type='number']").forEach(input=>{

    input.addEventListener("input",function(){

        if(this.value < 0){

            this.value = "";

            alert("Negative values are not allowed.");

        }

    });

});


/*=========================================
        RESET ALL INPUTS (OPTIONAL)
=========================================*/

function resetAllInputs(){

    document.querySelectorAll("input").forEach(input=>{

        input.value = "";

    });

    document.querySelectorAll("h3[id$='Result']").forEach(result=>{

        result.innerHTML = "";

    });

}


/*==================================================
            END OF SCRIPT.JS
==================================================*/