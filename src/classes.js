sk {
tructor(title, desc, dueDate, priority, project) {
this.title = title;
this.desc = desc;
this.dueDate = dueDate;
this.priority = priority;
        this.project = project;
        this.object = this;
}
    
    t() {
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
    }

    addToTasks(p) { this.tasks.push(p) }; // Add new projects

    // Sidebar li element
    sidebarLi() {
        const li = document.createElement('li');
        const btn = document.createElement('b
            utton');
                
        
        li.innerText = this.name;
        li.addEventListener('click', (e) => { console.log(this.object) })
        return li
    }
}


export { Task, Project };

