let iconadd = document.querySelector("#addicon");
let taskviewarea = document.querySelector("#taskviewarea");
let outermostcontainer = document.querySelector("#outermostcontainer");
let taskarea = document.querySelector(".task");
let taskinput = document.querySelector("#taskinput");

const doingevent = () => {
    console.log("yes");
    let newelement = document.createElement("div");
    newelement.innerHTML =
        `
    <div class="innercontainer taskdiv" id="taskviewarea">

    <div class="task">
        
        <div class="toggle" id="buttondiv">
            <i class="fa-regular fa-circle-dot togglebutton"></i>
        </div>
        <p>this is a task</p>

    </div>

    </div>`;
    
    let para = newelement.querySelector("p");
    para.innerText = taskinput.value;
    outermostcontainer.appendChild(newelement);


    let toggle = newelement.querySelector(".togglebutton");
    toggle.addEventListener("click", (evt) => {

        para.style.textDecoration="line-through";
        (evt.target.closest(".taskdiv")).style.backgroundColor="lightgreen"
        
        setTimeout(()=>{
            let targetted = evt.target.closest(".taskdiv");
            (evt.target.closest(".taskdiv")).style.backgroundColor="FFFFFF"
            targetted.remove();},2000)
    })

taskinput.value=""
}

iconadd.addEventListener("click", () => {
    doingevent()
});
