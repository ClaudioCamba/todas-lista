import { allProjects } from './index.js';
// import { mainContent } from './variables.js';

class Task {
    constructor(title, desc, dueDate, priority, project) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.object = this;
    }

    buildElem() {
        const li = document.createElement('li');
        const title = document.createElement('h4');
        const desc = document.createElement('p');
        const date = document.createElement('p');
        const priv = document.createElement('p');
        const proj = document.createElement('p');

        title.innerText = this.title;
        desc.innerText = this.desc;
        date.innerText = this.dueDate;
        priv.innerText = this.priority;
        proj.innerText = this.project;

        li.append(title, desc, date, priv, proj);
        return li;
    }
};

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.object = this;
        this.projHeader = document.createElement('h3');
        this.projBtn = document.createElement('button');
        this.option = document.createElement('option');
    }

    addToTasks(p) { this.tasks.push(p) }; // Add new projects

    // Sidebar li element
    liDOM() {
        const li = document.createElement('li');
        const closeBtn = document.createElement('button');
        this.projBtn.innerText = this.name;
        closeBtn.innerText = 'X';
        li.append(this.projBtn, closeBtn);
        // Remove project 
        closeBtn.addEventListener('click', (e) => {
            allProjects.removeProj(this.object); // Remove project from list variable (index.js => allProjects)
            e.target.parentElement.remove(); // Remove DOM element
            allProjects.updateApp()
        });

        this.projBtn.addEventListener('click', (e) => {
            if (this.tasks.length > 0) {
                allProjects.showMainContent(this.tasksElem());
            } else {
                console.log('Write Function to handle => No task ');
            }
        });
        return li;
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