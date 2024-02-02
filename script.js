const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function addTask() {
    if(inputBox.value === ''){
        alert("you must write something")
    }else{
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ""
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

inputBox.addEventListener("keypress" ,(event) => {
    if (event.key === "Enter"){
        addTask()
    }
} )
const removeAllTask = ()=>{

}


const backgroundImg = document.getElementById("gradient")
const inputBorder = document.getElementById("input-border")
const changeModeBtn = document.getElementById("toggle");
const todoList = document.getElementById("todo-list");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
sun.style.display = "none"
// const icon = document.createElement("i")
// icon.classList = "fa-solid fa-moon"
// changeModeBtn.appendChild(icon)

changeModeBtn.addEventListener("click" , () => {
    if(sun.style.display === "none"){
        sun.style.display = "block"
        moon.style.display = "none"
    }else if (sun.style.display = "block"){
        sun.style.display = "none"
        moon.style.display = "block"
    }
    document.body.classList.toggle("dark-mode");
    inputBox.classList.toggle("input-dark-mode");
    inputBorder.classList.toggle("input-dark-mode");
    backgroundImg.classList.toggle("dark-background");
    listContainer.classList.remove("list")
    listContainer.classList.toggle ("input-dark-mode")
})


