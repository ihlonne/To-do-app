/* If nothing has been typed into the input section, 
there will be an alert pop-up that says "Please Enter a Task" */

document.querySelector('#submit').onclick = function() {
    if(document.querySelector('#new-task input').value.length == 0) {
        alert(`Please Enter a Task`);
        return;
    }

/* Else, if something has been typed into the input section, 
a new <div> will be made with the information as well as a delete button */
    
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#new-task input').value}
            </span>
            <button class="delete">
                Delete
            </button>
        </div>
        `;

/* If the delete button is pressed, the <div> will be deleted from the code. */

        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}
