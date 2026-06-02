const inform = document.querySelector(".informSite");
inform.textContent = 
console.log(navigator.userAgent)
inform.textContent = navigator.userAgent;

const noteText = document.querySelector(".noteT");
const noteClear = document.querySelector(".btnClearN");
const noteSave = document.querySelector(".btnSaveN");

const noteColor = document.querySelector(".btnColorN");
const noteColorT = document.querySelector(".btnColorTN");


noteClear.addEventListener("click", function() {
    if(noteText.value == "Батырбек")
    alert("Создатель сайта");
    if(noteText.value = ""){}
})

noteSave.addEventListener("click", function(){
    if(noteText.value == ""){
        alert(`ты гений? нельзя сохранить пустой тект`)
    }
    else{
        let saveText = document.querySelector(".noteT").value;
        let el = document.createElement('a');
        el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(saveText));
        el.setAttribute('download', 'SaveText.txt');
        el.style.display = 'none';
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
    }
 
})

const colors = ["rgba(255, 0, 0, 0.47)", "rgba(255, 247, 0, 0.47)", "rgba(60, 255, 0, 0.47)", "rgba(0, 255, 255, 0.47)", "rgba(0, 0, 255, 0.47)", "rgba(123, 0, 255, 0.47)", "rgba(255, 255, 255, 0.47)", "rgb(2, 2, 2)"];
let index = 0;
let indexT = 0
noteColor.addEventListener("click", function() {
    console.log("color");
    noteText.style.backgroundColor = colors[index]

    index++

    if(index == 8){
        index = 0
    }
        
});


   
noteColorT.addEventListener("click", function() {
    console.log("color");
    noteText.style.color = colors[indexT]

    indexT++

    if(indexT == 8){
        indexT = 0
    }
        
});