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


/*====================================
        MATHEMATICS CORNER
=====================================*/

const mathFacts = [

"Zero (0) is the only number that cannot be represented using Roman numerals.",

"Pi (π) is an irrational number, meaning its decimal digits never end and never repeat.",

"There are infinitely many prime numbers.",

"The word 'mathematics' comes from the Greek word 'máthēma,' meaning knowledge or learning.",

"A googol is the number 1 followed by 100 zeros.",

"A googolplex is 1 followed by a googol zeros, which is too large to write in the observable universe.",

"The equals sign (=) was invented by Welsh mathematician Robert Recorde in 1557.",

"Every even number greater than 2 can be written as the sum of two prime numbers according to the Goldbach Conjecture, which remains unproven.",

"The Fibonacci sequence appears naturally in flowers, pinecones, pineapples, and sunflower seed patterns.",

"A circle has an infinite number of lines of symmetry.",

"Zero is both an even number and an integer.",

"The number π (pi) has been calculated to trillions of decimal places.",

"The decimal number system uses base 10 because humans have ten fingers.",

"A triangle's interior angles always add up to 180 degrees in Euclidean geometry.",

"The symbol ∞ for infinity was introduced by John Wallis in 1655.",

"The number e (approximately 2.71828) is the base of natural logarithms and appears throughout science and engineering.",

"A palindrome number reads the same forwards and backwards, like 121 or 1331.",

"The largest known prime numbers contain millions of digits.",

"The ancient Babylonians used a base-60 number system, which is why an hour has 60 minutes.",

"Perfect numbers are positive integers equal to the sum of their proper divisors. For example, 6 = 1 + 2 + 3."

];

const mathTrivia = [

"Did you know? Sudoku is based on logic, not arithmetic.",

"The world's most famous unsolved math problem is the Riemann Hypothesis.",

"The Rubik's Cube has over 43 quintillion possible arrangements.",

"There are exactly five Platonic solids.",

"The Pythagorean Theorem applies only to right triangles.",

"The probability of shuffling a deck of cards into the exact same order twice is incredibly small (1 in 52!).",

"Prime numbers are numbers greater than 1 that have exactly two factors.",

"Negative numbers were once considered impossible by many ancient civilizations.",

"The symbol √ for square root was introduced in the 1500s.",

"The number 1729 is known as the Hardy-Ramanujan Number because it is the smallest number expressible as the sum of two cubes in two different ways.",

"A Möbius strip has only one side and one edge.",

"Chess has more possible game positions than there are atoms in the observable universe.",

"Hexagons are the most efficient shape for covering a flat surface without gaps.",

"Every square number has an odd number of factors.",

"The ancient Egyptians used geometry to measure farmland after floods."

];

const mathematicians = [

{
name:"Pythagoras",
fact:"Greek mathematician best known for the Pythagorean Theorem."
},

{
name:"Euclid",
fact:"Known as the Father of Geometry. He wrote 'Elements,' one of the most influential mathematics books ever."
},

{
name:"Archimedes",
fact:"Discovered principles of buoyancy and developed formulas for the area and volume of many shapes."
},

{
name:"Isaac Newton",
fact:"Co-developed calculus and formulated the laws of motion and universal gravitation."
},

{
name:"Gottfried Wilhelm Leibniz",
fact:"Independently developed calculus and introduced many mathematical symbols still used today."
},

{
name:"Leonhard Euler",
fact:"Introduced modern mathematical notation including f(x), e, and Σ."
},

{
name:"Carl Friedrich Gauss",
fact:"Often called the Prince of Mathematicians because of his contributions to number theory, algebra, and astronomy."
},

{
name:"Srinivasa Ramanujan",
fact:"An Indian mathematical genius who made extraordinary discoveries in number theory despite little formal training."
},

{
name:"Blaise Pascal",
fact:"Developed Pascal's Triangle and contributed to probability theory."
},

{
name:"René Descartes",
fact:"Created the Cartesian coordinate system used in graphing."

},

{
name:"John Napier",
fact:"Invented logarithms, making difficult calculations much easier."

},

{
name:"Hypatia",
fact:"One of the earliest known female mathematicians and philosophers from Alexandria."

},

{
name:"Emmy Noether",
fact:"Made groundbreaking contributions to abstract algebra and theoretical physics."

},

{
name:"John Wallis",
fact:"Introduced the infinity symbol (∞)."

},

{
name:"Robert Recorde",
fact:"Invented the equals sign (=) in 1557."

}

];

function randomItem(array){

    return array[Math.floor(Math.random()*array.length)];

}

function showMathFact(){

    document.getElementById("mathFact").textContent =
    randomItem(mathFacts);

}

function showMathTrivia(){

    document.getElementById("mathTrivia").textContent =
    randomItem(mathTrivia);

}

function showMathematician(){

    const person = randomItem(mathematicians);

    document.getElementById("mathematicianName").textContent =
    person.name;

    document.getElementById("mathematicianFact").textContent =
    person.fact;

}
// ============================
// INITIALIZE CONTENT
// ============================

showMathFact();
showMathTrivia();
showMathematician();

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


/* ==========================
   DIAMETER
========================== */

function calculateDiameter(){

    let r = parseFloat(document.getElementById("diameterRadius").value);

    if(isNaN(r) || r <= 0){
        alert("Please enter a valid radius.");
        return;
    }

    let d = 2 * r;

    document.getElementById("diameterResult").innerHTML =
    "Diameter = " + d.toFixed(2);

}

function clearDiameter(){

    document.getElementById("diameterRadius").value = "";
    document.getElementById("diameterResult").innerHTML = "Answer:";

}


/* ==========================
   RADIUS
========================== */

function calculateRadius(){

    let d = parseFloat(document.getElementById("radiusDiameter").value);

    if(isNaN(d) || d <= 0){
        alert("Please enter a valid diameter.");
        return;
    }

    let r = d / 2;

    document.getElementById("radiusResult").innerHTML =
    "Radius = " + r.toFixed(2);

}

function clearRadius(){

    document.getElementById("radiusDiameter").value = "";
    document.getElementById("radiusResult").innerHTML = "Answer:";

}


/* ==========================
   CIRCUMFERENCE
========================== */

function calculateCircumference(){

    let r = parseFloat(document.getElementById("circumferenceRadius").value);

    if(isNaN(r) || r <= 0){
        alert("Please enter a valid radius.");
        return;
    }

    let c = 2 * Math.PI * r;

    document.getElementById("circumferenceResult").innerHTML =
    "Circumference = " + c.toFixed(2);

}

function clearCircumference(){

    document.getElementById("circumferenceRadius").value = "";
    document.getElementById("circumferenceResult").innerHTML = "Answer:";

}

/* ==========================
   RADIUS FROM CIRCUMFERENCE
========================== */

function calculateRadiusFromCircumference(){

    let c = parseFloat(document.getElementById("radiusCircumference").value);

    if(isNaN(c) || c <= 0){
        alert("Please enter a valid circumference.");
        return;
    }

    let r = c / (2 * Math.PI);

    document.getElementById("radiusCircumferenceResult").innerHTML =
    "Radius = " + r.toFixed(2);

}

function clearRadiusFromCircumference(){

    document.getElementById("radiusCircumference").value = "";
    document.getElementById("radiusCircumferenceResult").innerHTML = "Answer:";

}

/*=========================================
            AREA CALCULATORS
=========================================*/


/*=========================================
        RECTANGLE AREA
=========================================*/

function calculateRectangleArea(){

    let length = parseFloat(document.getElementById("rectLength").value);
    let width = parseFloat(document.getElementById("rectWidth").value);

    if(isNaN(length) || isNaN(width) || length <= 0 || width <= 0){

        alert("Please enter valid values.");
        return;

    }

    let area = length * width;

    document.getElementById("rectangleResult").innerHTML =
    "Area = " + area.toFixed(2);

}

function clearRectangleArea(){

    document.getElementById("rectLength").value = "";
    document.getElementById("rectWidth").value = "";
    document.getElementById("rectangleResult").innerHTML = "Answer:";

}


/*=========================================
        SQUARE AREA
=========================================*/

function calculateSquareArea(){

    let side = parseFloat(document.getElementById("squareSide").value);

    if(isNaN(side) || side <= 0){

        alert("Please enter a valid side.");
        return;

    }

    let area = side * side;

    document.getElementById("squareResult").innerHTML =
    "Area = " + area.toFixed(2);

}

function clearSquareArea(){

    document.getElementById("squareSide").value = "";
    document.getElementById("squareResult").innerHTML = "Answer:";

}


/*=========================================
        TRIANGLE AREA
=========================================*/

function calculateTriangleArea(){

    let base = parseFloat(document.getElementById("triangleBase").value);
    let height = parseFloat(document.getElementById("triangleHeight").value);

    if(isNaN(base) || isNaN(height) || base <= 0 || height <= 0){

        alert("Please enter valid values.");
        return;

    }

    let area = (base * height) / 2;

    document.getElementById("triangleResult").innerHTML =
    "Area = " + area.toFixed(2);

}

function clearTriangleArea(){

    document.getElementById("triangleBase").value = "";
    document.getElementById("triangleHeight").value = "";
    document.getElementById("triangleResult").innerHTML = "Answer:";

}


/*=========================================
        CIRCLE AREA
=========================================*/

function calculateCircleArea(){

    let radius = parseFloat(document.getElementById("circleRadius").value);

    if(isNaN(radius) || radius <= 0){

        alert("Please enter a valid radius.");
        return;

    }

    let area = Math.PI * radius * radius;

    document.getElementById("circleResult").innerHTML =
    "Area = " + area.toFixed(2);

}

function clearCircleArea(){

    document.getElementById("circleRadius").value = "";
    document.getElementById("circleResult").innerHTML = "Answer:";

}


/*=========================================
    PARALLELOGRAM AREA
=========================================*/

function calculateParallelogramArea(){

    let base = parseFloat(document.getElementById("paraBase").value);
    let height = parseFloat(document.getElementById("paraHeight").value);

    if(isNaN(base) || isNaN(height) || base <= 0 || height <= 0){

        alert("Please enter valid values.");
        return;

    }

    let area = base * height;

    document.getElementById("parallelogramResult").innerHTML =
    "Area = " + area.toFixed(2);

}

function clearParallelogramArea(){

    document.getElementById("paraBase").value = "";
    document.getElementById("paraHeight").value = "";
    document.getElementById("parallelogramResult").innerHTML = "Answer:";

}


/*=========================================
        TRAPEZOID AREA
=========================================*/

function calculateTrapezoidArea(){

    let base1 = parseFloat(document.getElementById("trapBase1").value);
    let base2 = parseFloat(document.getElementById("trapBase2").value);
    let height = parseFloat(document.getElementById("trapHeight").value);

    if(isNaN(base1) || isNaN(base2) || isNaN(height)
        || base1 <= 0 || base2 <= 0 || height <= 0){

        alert("Please enter valid values.");
        return;

    }

    let area = ((base1 + base2) * height) / 2;

    document.getElementById("trapezoidResult").innerHTML =
    "Area = " + area.toFixed(2);

}

function clearTrapezoidArea(){

    document.getElementById("trapBase1").value = "";
    document.getElementById("trapBase2").value = "";
    document.getElementById("trapHeight").value = "";
    document.getElementById("trapezoidResult").innerHTML = "Answer:";

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
