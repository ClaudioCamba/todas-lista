'use strict';
import './style.scss';
import { projList, projAddBtn, projCancelBtn, projInput, formTitle, formDesc, formDate, formPriority, formProject, formSubmit } from './variables.js';
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
            projList.appendChild(proj.elemLi); // Update sidebar
            formProject.appendChild(proj.elemOp); // Update task form (project selection)
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
                    } else {
                        console.log('Write Function to handle => Task Already Exists');
                    }
                }
            }

        } else {
            console.log('Write Function to handle => Empty Task Input');
        }
        updateApp();
        console.log(list);
    }

    return { addNewProj, updateApp, addNewTask, removeProj, list };
})();


projAddBtn.addEventListener('click', () => {
    allProjects.addNewProj(projInput.value);
});

formSubmit.addEventListener('click', () => {
    allProjects.addNewTask(new Task(formTitle.value, formDesc.value, formDate.value, formPriority.value, formProject.value))
})


// const listProject = (function () {
//     const list = [];

//     class Project {
//         constructor(name, task) {
//             this.name = name;
//             this.allTasks = [task];
//         }

//         addToTasks(p) {
//             this.allTasks.push(p);
//         }
//     }

//     const addTask = (t) => {
//         let projIndex = null;
//         const projCheck = (() => {
//             for (let i = 0; i < list.length; i++) {
//                 if (t.project === list[i].name) { projIndex = i; }
//             }
//         })();

//         if (projIndex === null) { // Add new project to list if does not exist
//             list.push(new Project(t.project, t))
//         } else { // Add to pre-existing project
//             list[projIndex].addToTasks(t)
//         }

//         console.log(list)

//     }

//     return { addTask };
// })();



export { allProjects }