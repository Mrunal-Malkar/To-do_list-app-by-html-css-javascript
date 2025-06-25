let iconadd = document.querySelector("#addicon");
let taskinput = document.querySelector("#taskinput");
let tasklabel = document.querySelector("#tasklabel");
let tasksArea = document.querySelector("#tasksArea");
let completedTasksArea = document.querySelector("#completedTasksArea");

const doingevent = () => {
  if (taskinput.value.trim() === "") return; // مانضفش حاجة فاضية

  let label = tasklabel.value;

  let newelement = document.createElement("div");
  newelement.innerHTML = `
        <div class="innercontainer taskdiv">
            <div class="task">
                <div class="toggle" id="buttondiv">
                    <i class="fa-regular fa-circle-dot togglebutton"></i>
                </div>
           
                <div class="todo-task">
                <p>${taskinput.value}</p>
                ${
                  label === "None"
                    ? ""
                    : `<span class="task-label" style="
  ${
    label === "Important"
      ? "background-color: red;"
      : label === "Easy"
      ? "background-color: green;"
      : label === "Immediate"
      ? "background-color: orange;"
      : label === "Hard"
      ? "background-color: purple;"
      : ""
  }">
  ${label}
</span>`
                }
                </div>
             
            </div>
        </div>
    `;

  // أضفها لمنطقة المهام النشطة
  tasksArea.appendChild(newelement);

  let toggle = newelement.querySelector(".togglebutton");
  let para = newelement.querySelector("p");

  toggle.addEventListener("click", (evt) => {
    let taskDiv = evt.target.closest(".taskdiv");
    taskDiv.classList.add("completed-task"); // أضف الكلاس

    completedTasksArea.appendChild(taskDiv); // انقلها للقسم المكتمل
  });

  taskinput.value = ""; // فرّغ الإنبوت
  tasklabel.selectedIndex = 0; // Reset dropdown
};

iconadd.addEventListener("click", doingevent);
