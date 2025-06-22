let iconadd = document.querySelector("#addicon");
let icondone = document.querySelector("#doneicon");
let taskviewarea = document.querySelector("#taskviewarea");
let outermostcontainer = document.querySelector("#outermostcontainer");
let taskcontainer = document.querySelector("#taskcontainer");
let CompletedTask = document.querySelector("#CompletedTask");
let taskarea = document.querySelector(".task");
let taskinput = document.querySelector("#taskinput");
let completedChores=[];
let chores=[];
let flip2=false;


const showCompletedTasks = () => {

    CompletedTask.style.display="block";
    taskcontainer.style.display="none";

    taskinput.disabled = true;
   
    CompletedTask.innerHTML = "";  // Clear tasks cleanly

    if (completedChores.length > 0) {
        // Display all completedChores
        completedChores.map((element) => {
            let taskDiv = document.createElement("div");
            taskDiv.innerHTML = `
                <div class="innercontainer taskdiv">
                    <div class="task">
                        <p>${element}</p>
                    </div>
                </div>
            `;
            CompletedTask.appendChild(taskDiv);
        });

        // // Wait and auto-exit done view
        // setTimeout(() => {
        //     taskcontainer.innerHTML = "";
        //     taskinput.disabled = false;
        //     doingevent();
        // }, 7000);

    } else {
        // No completedChores yet
        let warning = document.createElement("div");
        warning.innerHTML = `
            <div class="innercontainer taskdiv">
                <div class="task">
<h1>No completed tasks yet. Add and complete tasks to see them here.</h1>

                </div>
            </div>
        `;
        CompletedTask.appendChild(warning);

        setTimeout(() => {
            taskcontainer.innerHTML = "";
            taskinput.disabled = false;
            doingevent();
        }, 4000);
    }
}


const doingevent = () => {
    CompletedTask.style.display = "none";
    taskcontainer.style.display = "block";
    taskinput.disabled = false;

    let value = taskinput.value.trim();

    if (value !== "") {

        let newelement = document.createElement("div");
        newelement.innerHTML = `
            <div class="innercontainer taskdiv">
                <div class="task">
                    <div class="toggle" id="buttondiv">
                        <i class="fa-regular fa-circle-dot togglebutton"></i>
                    </div>
                    <p>${value}</p>
                </div>
            </div>
        `;

        taskcontainer.appendChild(newelement);

        let para = newelement.querySelector("p");
        let toggle = newelement.querySelector(".togglebutton");

        toggle.addEventListener("click", (evt) => {
            completedChores.push(para.innerText);

            para.style.textDecoration = "line-through";
            evt.target.closest(".taskdiv").style.backgroundColor = "lightgreen";

            setTimeout(() => {
                evt.target.closest(".taskdiv").remove();
            }, 2000);
        });
    }

    taskinput.value = "";
};

iconadd.addEventListener("click", () => {
    doingevent();
});

icondone.addEventListener("click",()=>{
    showCompletedTasks();
})
