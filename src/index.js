'use strict';
// Styling
import './style.scss';
// All variables
import {
    mainContent, projList, projAddBtn, projCancelBtn, projInput, formTitle, formDesc,
    formDate, formPriority, formProject, formSubmit, modal, modalProj, modalTask, span
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
            if (checkProjList(p)) {
                const newProject = new Project(p);
                newProject.allProj = list;
                list.push(newProject); // Add new project to array
            } else {
                console.log('Write Function to handle => Project Already Exists');
            }
        } else {
            console.log('Write Function to handle => Empty Project Input');
        }
        updateApp();
    }

    // Add new projects
    const addNewTask = (newTask) => {
        if (newTask.title !== '') {
            for (let i = 0; i < list.length; i++) {
                if (list[i].name === newTask.project) {
                    if (checkTaskList(list[i].tasks, newTask)) {
                        newTask.parentProj = list[i];
                        list[i].tasks.push(newTask);
                        list[i].projectShow();
                    } else {
                        console.log('Write Function to handle => Task Already Exists');
                    }
                }
            }

        } else {
            console.log('Write Function to handle => Empty Task Input');
        }
        updateApp();
    }

    // Main content showcase
    // const showMainContent = (e) => {
    //     console.log(list);
    //     mainContent.innerHTML = '';
    //     mainContent.appendChild(e);
    // }

    return { addNewProj, updateApp, addNewTask, checkProjList };
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
    return { closeModal, openModal };
})();

// Click event handlers for Project/ Task modal
projAddBtn.addEventListener('click', () => {
    allProjects.addNewProj(projInput.value);
    modalControl.closeModal();
});

formSubmit.addEventListener('click', () => {
    allProjects.addNewTask(new Task(formTitle.value, formDesc.value, formDate.value, formPriority.value, formProject.value));
    modalControl.closeModal();
})

allProjects.addNewProj('Inbox');
allProjects.addNewProj('Shopping');
allProjects.addNewTask(new Task('Call Mum', 'This is my description people', '2022-07-15', '3', 'Inbox'));
allProjects.addNewTask(new Task('Pizza', 'This is my description people', '2022-07-18', '2', 'Shopping'));
allProjects.addNewTask(new Task('Wine', 'This is my description people', '2022-07-18', '1', 'Shopping'));

export { allProjects, modalControl }