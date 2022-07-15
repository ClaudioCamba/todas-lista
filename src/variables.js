// Project Form
const projAddBtn = document.querySelector('.project-form .add');
const projCancelBtn = document.querySelector('.project-form .cancel');
const projInput = document.querySelector('.project-form .project');
// Form Elements
const formTitle = document.querySelector('#title');
const formDesc = document.querySelector('#desc');
const formDate = document.querySelector('#duedate');
const formPriority = document.querySelector('#priority');
const formProject = document.querySelector('#project');
const formSubmit = document.querySelector('#formSubmit');
// Sidebar Elements
const projList = document.querySelector('.projects ul');
// Main content
const mainContent = document.querySelector('.main-content');

export {
    mainContent,
    projList,
    projAddBtn,
    projCancelBtn,
    projInput,
    formTitle,
    formDesc,
    formDate,
    formPriority,
    formProject,
    formSubmit
}