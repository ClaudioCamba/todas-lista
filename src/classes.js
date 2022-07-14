'use strict';

module.exports = class Task {
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

module.exports = class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.object = this;
    }

    addToTasks(p) { this.tasks.push(p) }; // Add new projects

    // Sidebar li element
    sidebarLi() {
        const li = document.createElement('li');
        li.innerText = this.name;
        li.addEventListener('click', (e) => { console.log(this.object) })
        return li
    }
}