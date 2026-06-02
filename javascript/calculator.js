// const one = document.querySelector(".btnOne")
// const two = document.querySelector(".btnTwo")
// const three = document.querySelector(".btnThr")
// const four = document.querySelector(".btnFou")
// const five = document.querySelector(".btnFif")
// const six = document.querySelector(".btnSix")
// const seven = document.querySelector(".btnSev")
// const eihgt = document.querySelector(".btnEih")
// const nine = document.querySelector(".btnNin")
// const zero = document.querySelector(".btnZero")
// const doubleZero = document.querySelector(".btnDZero")

// one.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// two.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// three.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// four.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// five.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// six.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// seven.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// eihgt.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// nine.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// zero.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
// });

// doubleZero.addEventListener('click', function() {
//     const key = event.target.textContent
//     textC.textContent = key;
//     return(key)
// });

let a = '';
let b = '';
let sing = '';
let done = false;

const number = ["0", "1", "2" ,"3", "4", "5", "6", "7", "8", "9", "00", "."]

const delo = ["*", "/", "+", "-"]

const out = document.querySelector('.textCalc')

const AC = document.querySelector(".btn.Clear")

AC.addEventListener("click", function(){
    a = '';
    b = '';
    sing = '';
    done = false;
    out.textContent = 0;
    console.log("clear");
} )


// document.querySelector(".btn.Clear").onclick = clearAll();

document.querySelector('.butt').onclick = (event) => {
    if(!event.target.classList.contains("btn")) return;
    if(event.target.classList.contains(".btn.Clean"));

    
    
    const key = event.target.textContent;

    if(number.includes(key)){
        if (b ==='' && sing === ''){
             a += key;
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && done){
            b = key;
            done = false;
            out.textContent = b;
        }
        else{
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sing);
        return;
       
    }

    if(delo.includes(key)){
        sing = key;
        out.textContent = sing;
        console.log(a, b, sing);
        return;
    }

    if (key === "=") {

        switch(sing) {

            case "+":
                a = (+a) + (+b);
                break;

            case "-":
                a = a - b;
                break;
        
            case "*":
                a = a * b;
                break;
        
            case "-":
                a = a - b;
                break;
            case "/":
                a = a / b;
                break;
            }
            done = true;
            out.textContent = a;
    }
}