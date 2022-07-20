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


    const storageAvail = () => storageAvailable('localStorage') ? /* Works */ console.log('storage working') : /* Not working */ console.log('storage NOT');

    // Building object to convert into json
    const arrayToJSON = (array) => {
        const stored = []

        for (let i = 0; i < array.length; i++) {
            const proj = { 'name': array[i].name };
            if (array[i].tasks.length > 0) {
                proj.tasks = []
                for (let x = 0; x < array[i].tasks.length; x++) {
                    const task = {
                        done: array[i].tasks[x].done,
                        title: array[i].tasks[x].title,
                        desc: array[i].tasks[x].desc,
                        date: array[i].tasks[x].dueDate,
                        priority: array[i].tasks[x].priority,
                        project: array[i].tasks[x].parentProj.name,
                    };
                    proj.tasks.push(task);
                }
            }

            stored.push(proj);
        }
        console.log(JSON.stringify(stored))
        console.log(stored);

        return stored;
    }
    return { storageAvail }

})();


export { storeProjects }