const Questions = [{
    id: 0,
    src: "img/algebra.png",
    size: 2,
    q: "The Quine McCluskey technique was developed by _______",
    a: [{ text: "Willard V. Quine", isCorrect: true },
        { text: "Mike Quine", isCorrect: false },
        { text: "George Boole", isCorrect: false },
        { text: "Maurice Karnaugh", isCorrect: false }
    ]

},
{
    id: 1,
    src: "img/algebra.png",
    size: 2,
    q: "The Quine McCluskey technique is used to simplify expressions ______",
    a: [{ text: "with 2 or more inputs", isCorrect: false },
        { text: "with 6 or more inputs", isCorrect: true },
        { text: "with 6 or less inputs", isCorrect: false },
        { text: "with 10 or less inputs", isCorrect: false }
    ]

},
{
    id: 2,
    src: "img/qquiz2.png",
    size: 8,
    q: "What are the extracted prime implicants of the prime implication chart?",
    a: [{ text: "--01, 11--, 1-0-", isCorrect: false },
        { text: "--11, 10--, 0-1-", isCorrect: false },
        { text: "--10, 10--, 1-1-", isCorrect: true },
        { text: "--10, 11--, 0-1-", isCorrect: false }
    ]
},
{
    id: 3,
    src: "img/algebra.png",
    size: 2,
    q: "What is the most significant bit(s) of the function f(A, B, C, D)?",
    a: [{ text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "A and C", isCorrect: false },
        { text: "D", isCorrect: false }
    ]
},
{
    id: 4,
    src: "img/qquiz3.png",
    size: 10,
    q: "What is the sum of minterms for the function f(A, B, C, D)?",
    a: [{ text: "Σm(5,6,7,8,9,10,13,14,15)", isCorrect: false },
        { text: "Σm(0,1,2,3,4,5,7,10,15)", isCorrect: false },
        { text: "Σm(0,5,6,7,9,10,13,14,15)", isCorrect: true },
        { text: "Σm(0,2,2,2,2,3,3,4,3)", isCorrect: false }
    ]
},
{
    id: 5,
    src: "img/qquiz1.png",
    size: 7,
    q: "Minimize the following expression using the Quine McCluskey method: Y(A,B,C,D) = Σm(0,1,3,7,8,9,11,15)",
    a: [{ text: "Y = B’C + AD", isCorrect: false },
        { text: "Y = A + CD", isCorrect: false },
        { text: "Y = AC + CD", isCorrect: false },
        { text: "Y = B’C’ + CD", isCorrect: true }
    ]
},
{
    id: 6,
    src: "img/algebra.png",
    size: 2,
    q: "If A = 0, B = 1 and C = 1, then the min term is represented by ________",
    a: [{ text: "A’B’C", isCorrect: false },
        { text: "AB’C’", isCorrect: false },
        { text: "A’BC", isCorrect: true },
        { text: "ABC", isCorrect: false }
    ]
},
{
    id: 7,
    src: "img/qquiz1.png",
    size: 8,
    q: "Which of the following pairings are correct?",
    a: [{ text: "M8-M3", isCorrect: false },
        { text: "M9-M7", isCorrect: false },
        { text: "M7-M15 ", isCorrect: true },
        { text: "M1-M11", isCorrect: false }
    ]
},
{
    id: 8,
    src: "img/qquiz6.png",
    size: 8,
    q: "What is the minimized expression of the above table for Y(A, B, C, D) = Σm(0, 1, 3, 7, 8, 9, 11, 15)?",
    a: [{ text: "Y = B’D + CD", isCorrect: false },
        { text: "Y = B’C’ + CD ", isCorrect: true },
        { text: "Y = B’C’ + B’D + CD", isCorrect: false },
        { text: "Y = B’C + B’D", isCorrect: false }
    ]
},
{
    id: 9,
    src: "img/qquiz5.png",
    size: 8,
    q: "What is the minimal Quine McCluskey expression?",
    a: [{ text: "b’c’ + cd’ + a’bd", isCorrect: true },
        { text: "bc + cd’ + abd", isCorrect: false },
        { text: "bc’ + cd’ + ad", isCorrect: false },
        { text: "b’c’ + c’d + a’bd", isCorrect: false }
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