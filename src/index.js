'use strict';

import './style.scss';
let Task = require('./task.js');

// Sidebar Elements
const sbInbox = document.querySelector('.inbox');
const sbToday = document.querySelector('.today');
const sbProjects = document.querySelector('.project');

// Form Elements
const formTitle = document.querySelector('#title');
const formDesc = document.querySelector('#desc');
const formDate = document.querySelector('#duedate');
const formPriority = document.querySelector('#priority');
const formProject = document.querySelector('#project');
const formSubmit = document.querySelector('#formSubmit');



const listProject = (function () {
    const list = [];

    const addTask = (t) => {
        let index = null;
        // for (const proj of list) {
        //     if (proj.project)
        list.push(t);
        // }
        // const [t.project]
        // list.push(t);
        console.log(list[0].project);
    }

    return { addTask };
})();

formSubmit.addEventListener('click', (e) => {
    listProject.addTask(new Task(formTitle.value, formDesc.value, formDate.value, formPriority.value, formProject.value))
})