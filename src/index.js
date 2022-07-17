'use strict';
import './style.scss';
import { mainContent, projList, projAddBtn, projCancelBtn, projInput, formTitle, formDesc, formDate, formPriority, formProject, formSubmit } from './variables.js';
import { Task, Project } from './class.js';

// Main control
const allProjects = (function () {
    const list = [];

    const checkProjList = (p) => list.every((proj) => proj.name !== p); // Check array if project already exists in projects
    const checkTaskList = (taskList, newTask) => taskList.every((task) => task.title !== newTask.title) // Check array if project already exists in tasks
    const removeProj = (e) => { list.splice(list.indexOf(e), 1); }; // Remove project from array

    // Update application
    const updateApp = () => {
        projList.innerHTML = '';
        formProject.innerHTML = '<option value="inbox">inbox</option>';
        list.forEach(proj => {
            projList.appendChild(proj.liDOM()); // Update sidebar
            formProject.appendChild(proj.optionDOM()); // Update task form (project selection)
        })
    };

    // Add new projects
    const addNewProj = (p) => {
        if (p !== '') {
            if (checkProjList(p)) {
                list.push(new Project(p)); // Add new project to array
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
                        list[i].tasks.push(newTask);
                        showMainContent(list[i].tasksElem());
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
    const showMainContent = (e) => {
        console.log(list);
        mainContent.innerHTML = '';
        mainContent.appendChild(e);
    }

    return { addNewProj, updateApp, addNewTask, removeProj, showMainContent, checkProjList, list };
})();


projAddBtn.addEventListener('click', () => {
    allProjects.addNewProj(projInput.value);
    modalControl.closeModal();
});

formSubmit.addEventListener('click', () => {
    allProjects.addNewTask(new Task(formTitle.value, formDesc.value, formDate.value, formPriority.value, formProject.value));
    modalControl.closeModal();
})

allProjects.addNewProj('Playing');
allProjects.addNewTask(new Task('task1', 'This is my description people', '2022-07-15', '2', 'Playing'));


const modalControl = (() => {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    const btn1 = document.querySelector('.btn-proj');
    const btn2 = document.querySelector('.btn-task');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    btn1.onclick = function (e) {
        openModal('project-show');
    }
    btn2.onclick = function (e) {
        openModal('task-show');
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        closeModal()
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    const openModal = (e) => {
        modal.classList.add(e);
        modal.style.display = "block";
    }

    const closeModal = () => {
        modal.classList.remove('project-show');
        modal.classList.remove('task-show');
        modal.style.display = "none";
    }
    return { closeModal, openModal }
})();



export { allProjects, modalControl }