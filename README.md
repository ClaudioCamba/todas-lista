# todas-lista

The Odin Project | To Do List build using HTML, CSS, Webpack and Javascript

# Step by Step

> Create repository on github
> Clone repository onto local machine
> Install Node/NPM and Setup webpack
> Add gitignore file to ignore node modules form synching with github repository

    - touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status

# Features

> Use factories or class / constructors to generate the to dos

    - duplicate functionality

> Brain storm properties your todo list should have:

    - title
    - description
    - due date
    - priority
    - notes
    - sub tasks

> To do list should have a projects or separate list of to dos

    - projects list
    - default list
    - choose which todo list their task go in to

> Separate application logic

    - creating new to dos
    - setting to dos as complete
    - changing todo priority
    - DOM related stuff

> User interface

    - view all projects
    - view all to dos in each project(title, due date and priority)
    - Expand single todo to see and edit details
    - delete to do

> inspiration

    - Todoist: https://en.todoist.com/
    - Things: https://culturedcode.com/things/
    - Any.Do: https://www.any.do/

> Using webpack to bundle project

    - Use https://github.com/date-fns/date-fns to format and manipulating dates and times

> Locally store data

    - Store in local browser
    - Make sure app does not crash if data is not received
