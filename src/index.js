'use strict';
import './style.scss';
import { projList, projAddBtn, projCancelBtn, projInput, formTitle, formDesc, formDate, formPriority, formProject, formSubmit } from './variables.js';
import { Task, Project } from './class.js';

const allProjects = (function () {
    const list = [];

    const checkList = (p) => list.every((proj) => proj.name !== p); // Check array if project already exists
    const addNewProj = (p) => list.push(new Project(p)); // Add new project to array
    const removeProj = (e) => { list.splice(list.indexOf(e), 1); }; // Remove project from array

    // Update sidebar
    const updateSidebar = () => {
        projList.innerHTML = '';
        list.forEach(proj => {
            projList.prepend(proj.sidebarLi());
        })
    };

    return { addNewProj, checkList, updateSidebar, removeProj, list };
})();


projAddBtn.addEventListener('click', () => {
    if (projInput.value !== '') {
        if (allProjects.checkList(projInput.value)) {
            allProjects.addNewProj(projInput.value);
            allProjects.updateSidebar();
        } else {
            console.log('Write Function to handle => Already Exists');
        }
    } else {
        console.log('Write Function to handle => Empty Project Input');
    }

    console.log(allProjects.list);
});

export { allProjects }
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