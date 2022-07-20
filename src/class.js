// Module import from index.js
import { allProjects, modalControl } from './index.js';
// Date formatting 
import { format } from 'date-fns'
// Project modal variables
import { formTitle, formDesc, formDate, formPriority, formProject, taskForm, mainContent, allTskBtn } from './variables.js';

// Task class
class Task {
    constructor(title, desc, dueDate, priority, project, done) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.object = this;
        this.done = done;
        this.delete = null;
        this.check = null;
        this.edit = null;
        this.parentProj = null;
        this.li = null;
        this.titleElem = document.createElement('h4');
        this.descElem = document.createElement('p');
        this.dueDateElem = document.createElement('p');
        this.priorityElem = document.createElement('p');
        this.projectElem = document.createElement('p');
    }

    deleteTaskBtn() {
        this.delete = document.createElement('button');
        this.delete.innerText = 'X';
        this.delete.addEventListener('click', (e) => {
            // this.li.remove();
            // console.log(this.parentProj);
            this.parentProj.tasks.splice(this.parentProj.tasks.indexOf(this.object), 1);
            this.parentProj.projectShow();
            allProjects.saveProjects();
        }); // Delete task
        return this.delete;
    }

    updateEdit() {
        const updateBtn = document.createElement('button');
        updateBtn.innerText = 'Update';
        updateBtn.classList.add('update-btn');
        updateBtn.addEventListener('click', () => {

            this.title = formTitle.value;
            this.desc = formDesc.value;
            this.dueDate = formDate.value;
            this.priority = formPriority.value;
            this.project = formProject.value;
            if (this.project !== this.parentProj.name) {
                allProjects.addNewTask(new Task(formTitle.value, formDesc.value, formDate.value, formPriority.value, formProject.value, this.done));
                this.parentProj.tasks.splice(this.parentProj.tasks.indexOf(this.object), 1);
                // if (this.done === true) {
                //     for (const proj of this.parentProj.allProj) {
                //         if (proj.name === this.project) {
                //             console.log(proj);
                //             for (const task of proj.tasks) {
                //                 if (task.title === this.title) {
                //                     task.done = true;
                //                 }
                //             }
                //         }
                //     }
                // }
            }
            console.log(this.object);
            modalControl.closeModal();

            this.parentProj.projectShow();
            allProjects.saveProjects();
        });
        return updateBtn;
    }

    editTaskBtn() {
        this.edit = document.createElement('button');
        this.edit.innerText = 'edit';
        this.edit.addEventListener('click', (e) => {
            taskForm.appendChild(this.updateEdit());
            formTitle.value = this.title;
            formDesc.value = this.desc;
            formDate.value = this.dueDate;
            formPriority.value = this.priority;
            formProject.value = this.project;
            modalControl.openModal('task-edit-show');
        });
        return this.edit;
    }

    buildElem() {
        this.li = document.createElement('li');
        this.check = document.createElement('input');
        this.titleElem.innerText = this.title;
        this.descElem.innerText = this.desc;
        this.dueDate !== '' ? this.dueDateElem.innerText = format(new Date(this.dueDate), 'dd/MM/yyyy') : this.dueDateElem.innerText = '';
        this.priorityElem.innerText = this.priority;
        this.projectElem.innerText = this.project;
        this.check.type = 'checkbox';
        this.check.checked = this.done;
        this.check.addEventListener('click', (e) => {
            this.done = this.check.checked;
            allProjects.saveProjects();
        }); // Update done key
        this.li.append(this.check, this.titleElem, this.descElem, this.dueDateElem, this.priorityElem, this.projectElem, this.editTaskBtn(), this.deleteTaskBtn());
        return this.li;
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

    // Sidebar li element
    liDOM() {

        this.sbLi = document.createElement('li');
        this.closeBtn = document.createElement('button');
        this.projBtn = document.createElement('button');
        this.projBtn.innerText = this.name;
        this.projBtn.classList.add('proj-name');
        this.closeBtn.innerText = 'X';
        this.name === 'inbox' ? this.sbLi.append(this.projBtn) : this.sbLi.append(this.projBtn, this.closeBtn)
        // this.sbLi.append(this.projBtn, this.closeBtn);
        // Remove project 
        this.closeBtn.addEventListener('click', (e) => {
            this.sbLi.remove(); // Remove DOM element
            this.option.remove(); // Remove task creation option
            this.allProj.splice(this.allProj.indexOf(e), 1); // Remove from project list
            allProjects.showAllTask();
            allProjects.saveProjects();
        });

        this.projBtn.addEventListener('click', (e) => {
            allTskBtn.classList.remove('active');
            this.projectShow();
        });
        return this.sbLi;
    }

    // Clear & append tasks on page
    projectShow() {
        // if (allTskBtn.classList.contains('active') === false) {
        if (allTskBtn.classList.contains('active') === false) {
            mainContent.innerHTML = '';
            mainContent.appendChild(this.tasksElem());
        } else {
            allProjects.showAllTask();
        }
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
        const error = document.createElement('p');
        // Attributes
        closeEdit.classList.add('edit-proj-close');
        editInput.classList.add('edit-proj-input');
        div.classList.add('edit-wrap');
        error.classList.add('proj-edit-error');
        editInput.type = 'text';
        editBtn.innerText = 'edit';
        closeEdit.innerText = 'X';
        // Append
        if (this.name !== 'inbox') { div.append(error, editInput, closeEdit, editBtn) };
        // Click events
        editBtn.addEventListener('click', (e) => {
            if (div.classList.contains('active')) {
                if (allProjects.checkProjList(editInput.value.toLowerCase())) {
                    this.name = editInput.value.toLowerCase();
                    this.projHeader.innerText = this.name;
                    this.projBtn.innerText = this.name;
                    this.option.innerText = this.name;
                    editBtn.innerText = 'edit';
                    this.tasks.forEach(task => {
                        task.project = this.name;
                        task.projectElem.innerText = this.name;
                    });
                    div.classList.remove('active');
                    error.innerText = '';
                } else {
                    error.innerText = `${editInput.value} project already exists`;
                }
            } else {
                editBtn.innerText = 'update';
                div.classList.add('active');
            }
            allProjects.saveProjects();
        });

        closeEdit.addEventListener('click', (e) => {
            div.classList.remove('active');
            error.innerText = '';
            editBtn.innerText = 'edit';
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