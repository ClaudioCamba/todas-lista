import { allProjects } from './index.js';
import { mainContent } from './variables.js';

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

    // Show project tasks
    tasksElem() {
        const div = document.createElement('div');
        const editBtn = document.createElement('button');
        const ul = document.createElement('ul');
        this.projHeader.innerText = this.name;
        editBtn.innerText = 'edit';
        div.append(this.projHeader, editBtn, ul);

        editBtn.addEventListener('click', (e) => {
            this.name = 'What';
            this.projHeader.innerText = this.name;
            this.projBtn.innerText = this.name;
            this.option.innerText = this.name;

            console.log('Open Modal');
        });
        ul.classList.add('task-wrap');
        this.tasks.forEach(task => {
            ul.appendChild(task.buildElem());
        });

        return div;
    }

}

export { Task, Project };