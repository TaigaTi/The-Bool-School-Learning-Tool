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
},
{
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
    src: "img/kquiz4.png",
    size: 8,
    q: "Which 2 variable K-Map is formatted correctly?",
    a: [{ text: "Map Y", isCorrect: false },
        { text: "Map Z", isCorrect: false },
        { text: "Both", isCorrect: true },
        { text: "Neither", isCorrect: false }
    ]
},
{
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
var selected = "";
var result = document.getElementsByClassName("result");

function iterate(id) {
selected = "";

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

// Resetting all colours
op1.style.backgroundColor = "#cde9fa";
op2.style.backgroundColor = "#cde9fa";
op3.style.backgroundColor = "#cde9fa";
op4.style.backgroundColor = "#cde9fa";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "#cde9fa";
    op3.style.backgroundColor = "#cde9fa";
    op4.style.backgroundColor = "#cde9fa";
    selected = op1.id;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#cde9fa";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "#cde9fa";
    op4.style.backgroundColor = "#cde9fa";
    selected = op2.id;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#cde9fa";
    op2.style.backgroundColor = "#cde9fa";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "#cde9fa";
    selected = op3.id;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#cde9fa";
    op2.style.backgroundColor = "#cde9fa";
    op3.style.backgroundColor = "#cde9fa";
    op4.style.backgroundColor = "lightskyblue";
    selected = op4.id; 
})

var qNum = Questions[id].id + 1;
document.getElementById("question-number").innerHTML = "Question " + (qNum);

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

var checked = false;

// Evaluate method
evaluate[0].addEventListener("click", eval)

// Grabbing the Next button and changing it to Get score if at the end
const nextbtn = document.getElementsByClassName("evaluate");
if (qNum == 30)
{    
    document.getElementById("next").innerText = "GET SCORE";
}
else
{
    document.getElementById("next").innerText = "NEXT";
}

} 

// points array
var points = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 

// Does some evaluation
function eval () {
    console.log(id)
    if (Questions[id].a[parseInt(selected.match(/\d+/),30)-1].isCorrect) {
        result[0].innerHTML = "Correct!";
        result[0].style.color = "green";

        points[id] = 1;
        console.log("id "+id)
        console.log("points "+points[id])
        checked = true;
        
        
        console.log("Points increased: "+points)
        console.log("selected: "+selected) 
        console.log(Questions[id].a[parseInt(selected.match(/\d+/),30)-1].text)
    } else {
        result[0].innerHTML = "Try Again";
        result[0].style.color = "red";
        console.log("That was wrong")
        points[id] = 0;
        console.log("Points changed: "+points)
        console.log(Questions[id].a[parseInt(selected.match(/\d+/),30)-1].text)
    }
}


if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
var previous = false;

var totalscore = 0;

// Calculate score percentage
function callscore(totalscore)
{
    var percent = (totalscore/30)*100;

    return percent;
} 

next.addEventListener("click", () => {
start = false;
if (selected != "")
{
    if (id < 29) {        
        eval();
        id++;
        iterate(id);
    } 
    else { 
        var total = 0;
        for (var i = 0; i<points.length; i++)
        {
            total += points[i];
            totalscore = total;
        }
         
        callscore(totalscore);

        document.getElementById("next").innerText = "GET SCORE";

        //No going back to change answers for you!
        console.log("Your score is: "+totalscore)
        console.log("No going back to change those answers :)")
        document.getElementById("prev").disabled = true;
        document.getElementById("eval").disabled = true;

        function score()
        {
            if (callscore(totalscore).toFixed(2) > 70) {
                alert("Congrats! Your final score is: " + callscore(totalscore).toFixed(2) + "%");
            }
            else {
                alert("Your final score is: " + callscore(totalscore).toFixed(2) + "%. Review the material to improve your score!");
            }
        }
        score();
    }
}
else
{
    alert("Select an option to continue!")
}
    
})

const prev = document.getElementsByClassName('prev')[0];

prev.addEventListener("click", () => {
previous = true;
start = false;
if (id > 0) {
    id--;
    iterate(id);
}})