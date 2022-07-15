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
    }

    addToTasks(p) { this.tasks.push(p) }; // Add new projects

    // Sidebar li element
    liDOM() {
        const li = document.createElement('li');
        const projBtn = document.createElement('button');
        const closeBtn = document.createElement('button');
        projBtn.innerText = this.name;
        closeBtn.innerText = 'X';
        li.append(projBtn, closeBtn);
        // Remove project 
        closeBtn.addEventListener('click', (e) => {
            allProjects.removeProj(this.object); // Remove project from list variable (index.js => allProjects)
            e.target.parentElement.remove(); // Remove DOM element
            allProjects.updateApp()
        });

        projBtn.addEventListener('click', (e) => {
            allProjects.showMainContent(this.tasksElem());
        });
        return li;
    }

    // Task form option element
    optionDOM() {
        const option = document.createElement('option');
        option.value = this.name;
        option.innerText = this.name;
        option.addEventListener('click', (e) => {
            console.log(this.object);
        })
        return option;
    }

    // Show project tasks
    tasksElem() {
        if (this.tasks.length > 0) {
            const ul = document.createElement('ul');
            ul.classList.add('task-wrap');
            this.tasks.forEach(task => {
                ul.appendChild(task.buildElem());
            });
            return ul;
        } else {
            return '';
        }

    }

}

export { Task, Project };