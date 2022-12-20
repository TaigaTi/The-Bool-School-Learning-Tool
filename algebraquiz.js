const Questions = [{
    id: 0,
    src: "img/algebra.png",
    size: 2,
    q: "Boolean algebra is a branch of algebra that was formulated by ________",
    a: [{ text: "Rihanna Fenty", isCorrect: false },
        { text: "Adrian Als", isCorrect: false },
        { text: "George Boole", isCorrect: true },
        { text: "George Washington", isCorrect: false }
    ]

},
{
    id: 1,
    src: "img/algebra.png",
    size: 2,
    q: "Boolean values can either be __________",
    a: [{ text: "Floating Point or Percentages", isCorrect: false, isSelected: false },
        { text: "Integers or Decimals", isCorrect: false },
        { text: "Numbers or Symbols", isCorrect: false },
        { text: "True or False", isCorrect: true }
    ]

},
{
    id: 2,
    src: "img/algebra.png",
    size: 2,
    q: "Boolean Algebra Expressions make use of _________",
    a: [{ text: "AND, OR, NOT, MINUS, PLUS...", isCorrect: false },
        { text: "PLUS, MINUS, NEGATIVE, POSITIVE", isCorrect: false },
        { text: "AND, OR, NOT, XOR, XNOR...", isCorrect: true },
        { text: "PLUS, MINUS, TRUE, FALSE", isCorrect: false }
    ]

},
{
    id: 3,
    src: "img/algebra.png",
    size: 2,
    q: "The Identity Law states that _________",
    a: [{ text: "1 + A = A", isCorrect: false },
        { text: "1A = A and 0 + A = A", isCorrect: true },
        { text: "1 + A = A and 0A = A", isCorrect: false },
        { text: "0A = A", isCorrect: false }
    ]

},
{
    id: 4,
    src: "img/algebra.png",
    size: 2,
    q: "The Associative Law states that _________",
    a: [{ text: "(AB)C = A(BC)", isCorrect: true },
        { text: "0A = A", isCorrect: false },
        { text: "(AB)C = (AC)(BC)", isCorrect: false },
        { text: "1A = A and 0 + A = A", isCorrect: false }
    ]

},
{
    id: 5,
    src: "img/algebra.png",
    size: 2,
    q: "Reduce the following expression to it's simplest form: A . (A + B)",
    a: [{ text: "B", isCorrect: false },
        { text: "B + A", isCorrect: false },
        { text: "A", isCorrect: true },
        { text: "A . (1 + B)", isCorrect: false }
    ]

},
{
    id: 6,
    src: "img/aquiz1.png",
    size: 6,
    q: "Name these logic gates!",
    a: [{ text: "GATE 1: OR  ----- GATE 2: AND", isCorrect: false },
        { text: "GATE 1: AND ----- GATE 2: OR", isCorrect: false },
        { text: "GATE 1: NOT ----- GATE 2: AND", isCorrect: false },
        { text: "GATE 1: AND ----- GATE 2: NOT", isCorrect: true }
    ]

},
{
    id: 7,
    q: "Reduce the Boolean expression: A = XY + X(Y+Z) + Y(Y+Z)",
    src: "img/algebra.png",
    size: 2,
    a: [{ text: "A = Y + X + Z", isCorrect: false },
        { text: "A = YXZ", isCorrect: false },
        { text: "A = Y + XZ", isCorrect: true },
        { text: "A = YX + Z", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Which of these expressions depicts DeMorgan's Law?",
    src: "img/algebra.png",
    size: 2,
    a: [{ text: "(A.B) = A’ + B’", isCorrect: false },
        { text: "(A + B)’ = A + B", isCorrect: false },
        { text: "(A.B) = A + B’", isCorrect: false },
        { text: "(A.B)’ = A’ + B’", isCorrect: true }
    ]

},
{
    id: 9,
    q: "Simplify the expression: AB + (BC)' + (BC')",
    src: "img/algebra.png",
    size: 2,
    a: [{ text: "A + B’ + C’", isCorrect: true },
        { text: "A + B + C", isCorrect: false },
        { text: "ABC", isCorrect: false },
        { text: "AC’", isCorrect: false }
    ]
}
]

var start = true;

function iterate(id) {

var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Setting the question text and image
var question = document.getElementById("question");
question.innerText = Questions[id].q;

var img = document.getElementById("questionimg");
img.src = Questions[id].src;

var imgbox = document.getElementById("imgbox");
imgbox.className = "col-"+ Questions[id].size;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "#cde9fa";
    op3.style.backgroundColor = "#cde9fa";
    op4.style.backgroundColor = "#cde9fa";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#cde9fa";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "#cde9fa";
    op4.style.backgroundColor = "#cde9fa";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#cde9fa";
    op2.style.backgroundColor = "#cde9fa";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "#cde9fa";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#cde9fa";
    op2.style.backgroundColor = "#cde9fa";
    op3.style.backgroundColor = "#cde9fa";
    op4.style.backgroundColor = "lightskyblue";
    selected = op4.value;
})

var qNum = Questions[id].id + 1;
document.getElementById("question-number").innerHTML = "Question " + (qNum);

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct!";
        result[0].style.color = "green";

    } else {
        result[0].innerHTML = "Try Again";
        result[0].style.color = "red";
    }
})

}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 9) {
    id++;
    iterate(id);
    console.log(id);
}})

const prev = document.getElementsByClassName('prev')[0];

prev.addEventListener("click", () => {
start = false;
if (id > 0) {
    id--;
    iterate(id);
    console.log(id);
}})