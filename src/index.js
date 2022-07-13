import './style.css';


class Task {
    constructor(title, desc, dueDate, priority, notes) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    print() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.desc}`);
        console.log(`Due: ${this.dueDate}`);
        console.log(`Priority: ${this.priority}`);
    }
}

const test = new Task('Clean', 'This is my description people', '12/07/22', 'High', 'notes incase you need it');
test.print();

// var getTaskForm = (function () {
//     'use strict';

//     var _listProjects = 'Hello World';
//     // var publicProperty = 'I am a public property';

//     function _privateMethod() {
//         console.log(_privateProperty);
//     }

//     function publicMethod() {
//         _privateMethod();
//     }

//     return {
//         publicMethod: publicMethod,
//         publicProperty: publicProperty
//     };
// })();

// document.body.appendChild(component());