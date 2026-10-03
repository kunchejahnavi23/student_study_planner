function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");

        li.textContent = task;

        document.getElementById("taskList").appendChild(li);

        document.getElementById("taskInput").value = "";
    }
}
