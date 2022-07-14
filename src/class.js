import { allProjects } from './index.js';

class Task {
    constructor(title, desc, dueDate, priority, project) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.object = this;
    }

    Print() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.desc}`);
        console.log(`Due: ${this.dueDate}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Project: ${this.project}`);
    }
};

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.object = this;
        this.elemLi = this.liDOM();
        this.elemOp = this.optionDOM();
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
        closeBtn.addEventListener('click', (e) => {
            allProjects.removeProj(this.object); // Remove project from list variable (index.js => allProjects)
            e.target.parentElement.remove(); // Remove DOM element
            allProjects.updateApp()
        });
        return li;
    }

    optionDOM() {
        const option = document.createElement('option');
        option.value = this.name;
        option.innerText = this.name;
        return option;
    }
}

export { Task, Project };