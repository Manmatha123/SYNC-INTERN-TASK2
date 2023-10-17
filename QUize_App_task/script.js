const quize = [

    {
        ques: `int main(){ int x=5;  if(x=3){printf('hello'); }  else{
                 printf('hii');
                }}`,
        op1: "hii",
        op2: "hello",
        op3: "undefined",
        op4: "error",
        ans: "hello"
    },
    {
        ques: "What is a correct syntax to output 'Hello World' in C?",
        op1: "Console.writeLine('Hello World');",
        op2: "cout << 'Hello World';",
        op3: "System.out.println('Hello WOrld');",
        op4: "printf('Hello World');",
        ans: "printf('Hello World');"
    },
    {
        ques: "How do you insert COMMENTS in C code?",
        op1: "--This is a comment",
        op2: "*This is a comment",
        op3: "//This is a comment",
        op4: "#This is a comment",
        ans: "//This is a comment"
    },
    {
        ques: "Which format specifier is often used to print integers?",
        op1: "%d",
        op2: "%f",
        op3: "%s",
        op4: "%c",
        ans: "%d"
    },
    {
        ques: "Array indexes start with:",
        op1: "1",
        op2: "0",
        op3: "-1",
        op4: "None Of These",
        ans: "0"
    }





]


const btn = document.getElementById("btn");
const quesn = document.getElementById("ques");
const innerfield = document.getElementById("innerfield");




let leb1 = document.getElementById("leb1");
let leb2 = document.getElementById("leb2");
let leb3 = document.getElementById("leb3");
let leb4 = document.getElementById("leb4");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let options = document.querySelectorAll(".options");

let i = 0;
let count = 0;
let x = 0;
quesn.innerText = quize[i].ques;
leb1.innerText = quize[i].op1;
leb2.innerText = quize[i].op2;
leb3.innerText = quize[i].op3;
leb4.innerText = quize[i].op4;

option1.value = quize[i].op1;
option2.value = quize[i].op2;
option3.value = quize[i].op3;
option4.value = quize[i].op4;

btn.addEventListener("click", () => {
    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;


    if (i < 4) {
        i = i + 1;

        quesn.innerText = quize[i].ques;


        leb1.innerText = quize[i].op1;
        leb2.innerText = quize[i].op2;
        leb3.innerText = quize[i].op3;
        leb4.innerText = quize[i].op4;

        option1.value = quize[i].op1;
        option2.value = quize[i].op2;
        option3.value = quize[i].op3;
        option4.value = quize[i].op4;


        console.log(count + "count value");
        x = 0;
    }
    else {
        if (count >= 4) {
            innerfield.innerHTML = `<div class="success">
            <section class="navbarsuccess">
                <p id="successmsg">Your score is ${count}/5</p>
            </section>
            
            <img src="successimg-removebg-preview.png" alt="" id="susimg">
        </div>
        
                </div>
            </div>
            </div>`;
        }
        else {
            innerfield.innerHTML = `<div class="success">
            <section class="navbarsuccess navbad">
                <p id="successmsg">Your score is ${count}/5</p>
            </section>
            
            <img src="sadimg-removebg-preview.png" alt="" id="sadimg">
        </div>
        
                </div>
            </div>
            </div>`;
        }

    }
})



options.forEach((data) => {
    data.addEventListener("click", () => {

        if (data.value == quize[i].ans) {
            if (x == 0) {
                count = count + 1;
                x = x + 1;
            }
        }

    })
})
