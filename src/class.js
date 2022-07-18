import { allProjects } from './index.js';
// import { mainContent } from './variables.js';
// Task class
class Task {
    constructor(title, desc, dueDate, priority, project) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.object = this;
        this.done = false;
        this.delete = null;
        this.check = null;
        this.edit = null;
        this.parentProj = null;
        this.titleElem = document.createElement('h4');
        this.descElem = document.createElement('p');
        this.dueDateElem = document.createElement('p');
        this.priorityElem = document.createElement('p');
        this.projectElem = document.createElement('p');
    }

    buildElem() {
        const li = document.createElement('li');
        this.delete = document.createElement('button');
        this.check = document.createElement('input');
        this.edit = document.createElement('button');
        this.titleElem.innerText = this.title;
        this.descElem.innerText = this.desc;
        this.dueDateElem.innerText = this.dueDate;
        this.priorityElem.innerText = this.priority;
        this.projectElem.innerText = this.project;
        this.check.type = 'checkbox';
        this.check.checked = this.done;
        this.delete.innerText = 'X';
        this.edit.innerText = 'edit';
        this.delete.addEventListener('click', (e) => {
            li.remove();

            this.parentProj.tasks.splice(this.parentProj.tasks.indexOf(e), 1);
            // allProjects.removeTask(this.object); // Remove task from list variable (index.js => allProjects)
        }); // Delete task
        this.check.addEventListener('click', (e) => {
            console.log('test');
            this.done = this.check.checked
        }); // Update done key
        this.edit.addEventListener('click', (e) => {
            console.log('testing');
        });
        li.append(this.check, this.titleElem, this.descElem, this.dueDateElem, this.priorityElem, this.projectElem, this.edit, this.delete);
        return li;
    }
};

// Project class
class Project {
    constructor(name) {
        this.name = name;
        this.allProj = [];
        this.tasks = [];
        this.object = this;
        this.projHeader = document.createElement('h3');
        this.projBtn = null;
        this.option = document.createElement('option');
        this.sbLi = null;
        this.closeBtn = null;
    }

    addToTasks(p) { this.tasks.push(p) }; // Add new projects

    // Sidebar li element
    liDOM() {
        this.sbLi = document.createElement('li');
        this.closeBtn = document.createElement('button');
        this.projBtn = document.createElement('button');
        this.projBtn.innerText = this.name;
        this.closeBtn.innerText = 'X';
        this.sbLi.append(this.projBtn, this.closeBtn);
        // Remove project 
        this.closeBtn.addEventListener('click', (e) => {
            allProjects.removeProj(this.object); // Remove project from list variable (index.js => allProjects)
            this.sbLi.remove(); // Remove DOM element
        });

        this.projBtn.addEventListener('click', (e) => {
            if (this.tasks.length > 0) {
                allProjects.showMainContent(this.tasksElem());
            } else {
                console.log('Write Function to handle => No task ');
            }
        });
        return this.sbLi;
    }

    // Task form option element
    optionDOM() {
        this.option.value = this.name;
        this.option.innerText = this.name;
        return this.option;
    }

    // Edit project title
    editTitle() {
        const div = document.createElement('div');
        const editBtn = document.createElement('button');
        const closeEdit = document.createElement('button');
        const editInput = document.createElement('input');
        // Attributes
        div.classList.add('edit-wrap');
        editInput.type = 'text';
        editBtn.innerText = 'edit';
        closeEdit.innerText = 'X';
        closeEdit.classList.add('edit-proj-close');
        editInput.classList.add('edit-proj-input');
        // Append
        div.append(editInput, closeEdit, editBtn);
        // Click events
        editBtn.addEventListener('click', (e) => {
            if (div.classList.contains('active')) {
                if (allProjects.checkProjList(editInput.value)) {
                    this.name = editInput.value;
                    this.projHeader.innerText = this.name;
                    this.projBtn.innerText = this.name;
                    this.option.innerText = this.name;
                    editBtn.innerText = 'edit';
                    this.tasks.forEach(task => {
                        task.project = this.name;
                        task.projectElem.innerText = this.name;
                    });
                    div.classList.remove('active');
                } else {
                    console.log('Write Function to handle => Project Already Exists');
                }
            } else {
                editBtn.innerText = 'update';
                div.classList.add('active');
            }

        });
        closeEdit.addEventListener('click', (e) => {
            div.classList.remove('active');
        });

        return div;
    }

    // Show project tasks
    tasksElem() {
        const mainDiv = document.createElement('div');
        const ul = document.createElement('ul');
        mainDiv.classList.add('project-wrap');
        this.projHeader.innerText = this.name;

        mainDiv.append(this.projHeader, this.editTitle(), ul);

        ul.classList.add('task-wrap');
        this.tasks.forEach(task => {
            ul.appendChild(task.buildElem());
        });

        return mainDiv;
    }

}

export { Task, Project };