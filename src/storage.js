// Storage Functions
const storeProjects = (function () {

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
    };


    const storageAvail = () => storageAvailable('localStorage') ? /* Works */ true : /* Not working */ false;

    const setLocal = (key, json) => {
        if (storeProjects.storageAvail()) {
            localStorage.setItem(key, json);
        }
    }

    // Convert JSON to array/object
    const jsonToArrayObject = (json) => {
        return JSON.parse(json);
    }

    // Building object to convert into json
    const arrObjToJSON = (arrObj) => {
        const stored = []

        for (let i = 0; i < arrObj.length; i++) {
            const proj = { 'name': arrObj[i].name };
            proj.tasks = [];
            if (arrObj[i].tasks.length > 0) {
                for (let x = 0; x < arrObj[i].tasks.length; x++) {
                    const task = {
                        done: arrObj[i].tasks[x].done,
                        title: arrObj[i].tasks[x].title,
                        desc: arrObj[i].tasks[x].desc,
                        date: arrObj[i].tasks[x].dueDate,
                        priority: arrObj[i].tasks[x].priority,
                        project: arrObj[i].tasks[x].parentProj.name,
                    };
                    proj.tasks.push(task);
                }
            }
            stored.push(proj);
        }
        return stored;
    }
    return { storageAvail, arrObjToJSON, setLocal, jsonToArrayObject }

})();


export { storeProjects }