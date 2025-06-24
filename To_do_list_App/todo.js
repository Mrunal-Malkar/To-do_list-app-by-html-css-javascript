let iconadd = document.querySelector("#addicon");
let taskinput = document.querySelector("#taskinput");
let tasksArea = document.querySelector("#tasksArea");
let completedTasksArea = document.querySelector("#completedTasksArea");

const doingevent = () => {
  if (taskinput.value.trim() === "") return; // مانضفش حاجة فاضية

  let newelement = document.createElement("div");
  newelement.innerHTML = `
        <div class="innercontainer taskdiv">
            <div class="task">
                <div class="toggle" id="buttondiv">
                    <i class="fa-regular fa-circle-dot togglebutton"></i>
                </div>
                <p>${taskinput.value}</p>
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
};

iconadd.addEventListener("click", doingevent);
