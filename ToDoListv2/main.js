window.addEventListener('load', () => {

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const task_list = document.querySelector("#tasks");

//create method or statement to load local storage data (tasks) IF there is any


form.addEventListener('submit', (e) => {
    

    e.preventDefault();
    //creating the new html divs

    const task = input.value;

    /*const saveToLocalStorage = () => {
        const n = 0;
        localStorage.setItem("task" + n, task);
        n+=1;
        // create method to create an arraylist for the tasks, or 
        // to create unique key pair to be able to retrieve
    }
    */

    if (!task) {
        alert("Please enter a task!");
    }
    // prevents from empty task being added
    else{
    
   
    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");
    

    // making task_content_element a child of task_element, inherits traits

    task_element.appendChild(task_content_element);

    // creating the input div, and assigning it the proper type and value
    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.value = task;
    task_input_element.readOnly = true;
    


    task_content_element.appendChild(task_input_element);
   
    task_list.appendChild(task_element);

    input.value = "";
 //resets input box for a new task



    const task_actions_element = document.createElement("div");
    task_actions_element.classList.add("actions");
    

    const task_edit_element = document.createElement("button");
    task_edit_element.classList.add("edit");
    task_edit_element.innerHTML = ("Edit");

    const task_delete_element = document.createElement("button");
    task_delete_element.classList.add("delete");
    task_delete_element.innerHTML = ("Delete");

    task_actions_element.appendChild(task_edit_element);
    task_actions_element.appendChild(task_delete_element);

    task_list.appendChild(task_actions_element);






   


    
    }

});

});

/*
- figure out how and why to have it listen to (e)
-have it save storage uppon pressing submit
-create new tasks in html folder
    - then create submit/delete buttons (children?)
-as you do this, try to have it save storage when submit/delete buttons pressed\
*/