define([
    'ko',
    'localStorage'
], function (ko, storage) {
    'use strict';

    
    const key = 'tasks';
    
    function getID() {
        return(new Date()).getTime();
    }

    return function viewModel(){
        return{

            getAllTasks: function () {
                return storage.get(key);
                
            },
    
            save: function (task) {
                if(task.id){
                    task.id = getID();
                }
    
                let tasks = this.getAllTasks(),
                updated =  false;
                
                if (!tasks){
                    tasks = [];
                }
    
                for (let i in tasks){
                    if (tasks[i].id === task.id){
                        tasks[i] = task;
                        updated = true;
                    }
                }
    
                if (updated){
                    tasks.push(task);
                }
    
                storage.set(key, tasks)
            }, 

            delete: function(task){
                

            }
        }
    
    }

    
});
