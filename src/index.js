'use strict';
import './style.scss';
import { projList, projAddBtn, projCancelBtn, projInput, formTitle, formDesc, formDate, formPriority, formProject, formSubmit } from './variables.js';
let Task = require('./classes.js');
let Project = require('./classes.js');

const allProjects = (function () {
    const list = [];
    const checkList = (p) => list.every((proj) => proj.name !== p);
    const addNewProj = (p) => list.push(new Project(p));
    const updateSidebar = () => {
        projList.innerHTML = '';
        list.forEach(proj => {
            projList.prepend(proj.sidebarLi());
        })
    };

    return { addNewProj, checkList, updateSidebar, list };
})();


projAddBtn.addEventListener('click', () => {
    if (projInput.value !== '') {
        if (allProjects.checkList(projInput.value)) {
            allProjects.addNewProj(projInput.value)
        } else {
            console.log('Write Function to handle => Already Exists');
        }
    } else {
        console.log('Write Function to handle => Empty Project Input');
    }

    console.log(allProjects.list);
});


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

// formSubmit.addEventListener('click', (e) => {
//     listProject.addTask(new Task(formTitle.value, formDesc.value, formDate.value, formPriority.value, formProject.value))
// })