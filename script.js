const size = 480.0;
let n = 16;
const field = document.querySelector(".field");
const btn = document.querySelector("button");


loadField();



function loadField(){
    for(let i = 0; i < n; i++){
        const column = document.createElement("div");
        for(let j = 0; j < n; j++){
            const cell = document.createElement("div");
            cell.style.height = (size/n) + "px";
            cell.style.width = (size/n) + "px";
            cell.addEventListener("mouseover", function(e){
                const current = e.target;
                current.style.backgroundColor = "black";
            })
            column.appendChild(cell);
        }
        field.appendChild(column);
    }
}

function clearField(){
    while(field.firstChild){
        field.removeChild(field.lastChild);
    }
    loadField()
}


