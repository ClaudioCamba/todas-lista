'use strict';
// Styling
import './style.scss';

// All variables
import {
    mainContent, projList, projAddBtn, projInput, formTitle, formDesc, formDate, formPriority,
    formProject, formSubmit, modal, modalProj, modalTask, span, sideBar, allTskBtn, projError, taskError
} from './variables.js';
// Classes
import { Task, Project } from './class.js';

// Main control
const allProjects = (function () {
    const list = [];

    const checkProjList = (p) => list.every((proj) => proj.name !== p); // Check array if project already exists in projects
    const checkTaskList = (taskList, newTask) => taskList.every((task) => task.title !== newTask.title) // Check array if project already exists in tasks

    // Update application
    const updateApp = () => {
        projList.innerHTML = '';
        list.forEach(proj => {
            projList.appendChild(proj.liDOM()); // Update sidebar
            formProject.appendChild(proj.optionDOM()); // Update task form (project selection)
        })
    };

    // Add new projects
    const addNewProj = (p) => {
        if (p !== '') {
            if (checkProjList(p.toLowerCase())) {
                const newProject = new Project(p.toLowerCase());
                newProject.allProj = list;
                list.push(newProject); // Add new project to array
                modalControl.closeModal();
                projError.innerText = '';
            } else {
                projError.innerText = `${p} project already exists`;
            }
        } else {
            projError.innerText = `Empty input cannot be submitted`;
        }
        updateApp();
    }

    // Add new task
    const addNewTask = (newTask) => {
        if (newTask.title !== '') {
            for (let i = 0; i < list.length; i++) {
                if (list[i].name === newTask.project) {
                    if (checkTaskList(list[i].tasks, newTask)) {
                        newTask.parentProj = list[i];
                        list[i].tasks.push(newTask);
                        list[i].projectShow();
                        modalControl.closeModal();
                        taskError.innerText = '';
                    } else {
                        taskError.innerText = `${newTask.title} already exists within this ${newTask.project} project`;
                    }
                }
            }
        } else {
            taskError.innerText = `Empty input cannot be submitted`;
        }
        updateApp();
    }

    const showAllTask = () => {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const ul = document.createElement('ul');
        div.classList.add('project-wrap');
        ul.classList.add('task-wrap');
        h3.innerText = 'All Tasks';
        for (const proj of list) {
            if (proj.tasks.length > 0) {
                proj.tasks.forEach(task => {
                    ul.appendChild(task.buildElem());
                });
            }
        }
        div.append(h3, ul);
        mainContent.innerHTML = '';
        mainContent.appendChild(div);
    }



    sideBar.addEventListener('click', (e) => {

        // Building object to convert into json
        const stored = []

        for (let i = 0; i < list.length; i++) {
            const proj = { 'name': list[i].name };
            if (list[i].tasks.length > 0) {
                proj.tasks = []
                for (let x = 0; x < list[i].tasks.length; x++) {
                    const task = {
                        done: list[i].tasks[x].done,
                        title: list[i].tasks[x].title,
                        desc: list[i].tasks[x].desc,
                        date: list[i].tasks[x].dueDate,
                        priority: list[i].tasks[x].priority,
                        project: list[i].tasks[x].parentProj.name,
                    };
                    proj.tasks.push(task);
                }
            }

            stored.push(proj);
        }


        console.log(JSON.stringify(stored))
        console.log(stored);

        if (e.target.classList.contains('allTasks')) {
            e.target.classList.add('active');
            showAllTask();
        } else if (e.target.classList.contains('proj-name')) {
            allTskBtn.classList.remove('active');
        }
    });

    return { addNewProj, updateApp, addNewTask, checkProjList, showAllTask };
})();

// Modal control
const modalControl = (() => {
    // When the user clicks the button, open the modal 
    modalProj.onclick = () => openModal('project-show');
    modalTask.onclick = () => openModal('task-add-show');
    // When the user clicks on <span> (x), close the modal
    span.onclick = () => closeModal();
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (e) => { if (e.target == modal) { closeModal(); } };
    // Open / Close modal
    const openModal = (e) => { modal.classList.add(e); }
    const closeModal = () => {
        if (modal.classList.contains('task-edit-show')) { document.querySelector('.update-btn').remove(); }
        modal.className = 'modal';
    }

    // Click event handlers for Project/ Task modal
    projAddBtn.addEventListener('click', () => {
        allProjects.addNewProj(projInput.value);
    });

    formSubmit.addEventListener('click', () => {
        allProjects.addNewTask(new Task(formTitle.value, formDesc.value, formDate.value, formPriority.value, formProject.value));
    })

    return { closeModal, openModal };
})();



allProjects.addNewProj('Inbox');
allProjects.addNewProj('Shopping');
allProjects.addNewTask(new Task('Call Mum', 'This is my description people', '2022-07-15', '3', 'inbox'));
allProjects.addNewTask(new Task('Pizza', 'This is my description people', '2022-07-18', '2', 'shopping'));
allProjects.addNewTask(new Task('Wine', 'This is my description people', '2022-07-18', '1', 'shopping'));

export { allProjects, modalControl }


// Storage Functions

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log('storage working')
}
else {
    // Too bad, no localStorage for us
    console.log('storage NOT')
}