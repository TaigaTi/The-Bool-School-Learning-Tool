const Questions = [{
    id: 0,
    src: "img/algebra.png",
    size: 2,
    q: "The Karnaugh Map is a form of logic diagram invented by _________",
    a: [{ text: "Adrian Als", isCorrect: false },
        { text: "Maurice Karnaugh", isCorrect: true },
        { text: "George Boole", isCorrect: false },
        { text: "Mary Karnaugh", isCorrect: false }
    ]

},
{
    id: 1,
    src: "img/algebra.png",
    size: 2,
    q: "The Karnaugh map comprises a box for every line in the truth table.",
    a: [{ text: "True", isCorrect: true },
        { text: "False", isCorrect: false },
        { text: "-", isCorrect: false },
        { text: "-", isCorrect: false }
    ]

},
{
    id: 2,
    src: "img/algebra.png",
    size: 2,
    q: "Grouping in Karnaugh Maps can be done",
    a: [{ text: "With n^2 diagonally, horizontally or vertically adjacent minterms", isCorrect: false },
        { text: "With n^2 horizontally or vertically adjacent minterms", isCorrect: false },
        { text: "With 2^n horizontally or vertically adjacent minterms", isCorrect: true },
        { text: "With 2^n diagonally, horizontally or vertically adjacent minterms", isCorrect: false }
    ]

},
{
    id: 3,
    src: "img/algebra.png",
    size: 2,
    q: "1s assigned to the Karnaugh map’s boxes represent the same minterms as the 1s in the truth table’s output column.",
    a: [{ text: "True", isCorrect: true },
        { text: "False", isCorrect: false },
        { text: "-", isCorrect: false },
        { text: "-", isCorrect: false }
    ]

},
{
    id: 4,
    src: "img/kquiz1.png",
    size: 5,
    q: "Simplify the Karnaugh Map",
    a: [{ text: "F(W, X, Y, Z) = XZ’ + X’Z", isCorrect: false },
        { text: "F(W, X, Y, Z) = X + Z", isCorrect: false },
        { text: "F(W, X, Y, Z) = XZ", isCorrect: false },
        { text: "F(W, X, Y, Z) = X ⊕ Z", isCorrect: true }
    ]

},
{
    id: 5,
    src: "img/kquiz2.png",
    size: 5,
    q: "Simplify the Karnaugh Map",
    a: [{ text: "F(A, B, C, D) = ABCD’", isCorrect: false },
        { text: "F(A, B, C, D) = ACD’ + B’D’", isCorrect: true },
        { text: "F(A, B, C, D) = ACD + BD", isCorrect: false },
        { text: "F(A, B, C, D) = AC + B’D’", isCorrect: false }
    ]

},
{
    id: 6,
    src: "img/kquiz3.png",
    size: 8,
    q: "Which of these groupings is correct?",
    a: [{ text: "A", isCorrect: false },
        { text: "B", isCorrect: true },
        { text: "-", isCorrect: false },
        { text: "-", isCorrect: false }
    ]

},
{
    id: 7,
    src: "img/algebra.png",
    size: 2,
    q: "Which of the following rules is incorrect?",
    a: [{ text: "Groups can overlap each other", isCorrect: false },
        { text: "The number of cells of a group can be represented in the power of 2", isCorrect: false },
        { text: "Each group should be as small as possible", isCorrect: true },
        { text: "A group can only contain 2^n cells", isCorrect: false }
    ]

},
{
    id: 8,
    src: "img/algebra.png",
    size: 2,
    q: "Minimize the expression: F(A, B, C, D) = Σm(0, 1, 2, 5, 7, 8, 9, 10, 13, 15)",
    a: [{ text: "F(A, B, C, D) = BD + C’D + B’D’", isCorrect: true},
        { text: "F(A, B, C, D) = B + B’D’", isCorrect: false },
        { text: "F(A, B, C, D) = BD + C’D", isCorrect: false },
        { text: "F(A, B, C, D) = ABC", isCorrect: false }
    ]

},
{
    id: 9,
    src: "img/kquiz4.png",
    size: 8,
    q: "Which 2 variable K-Map is formatted correctly?",
    a: [{ text: "Map Y", isCorrect: false },
        { text: "Map Z", isCorrect: false },
        { text: "Both", isCorrect: true },
        { text: "Neither", isCorrect: false }
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