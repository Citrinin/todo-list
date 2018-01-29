const LS_KEY = 'LS_KEY';

let id = Date.now();

export const getId = () => id++;

let tasks;

try {
    tasks = JSON.parse(localStorage.getItem(LS_KEY));
} catch (e) {
    console.error('Error on parsing tasks')
}

tasks = Array.isArray(tasks) ? tasks : [
    { done: false, title: 'Покормить кошика', priority: 'High', description: 'Кошик ждет паштет', date: '2017-01-08' },
    { done: false, title: 'Спасти мир', priority: 'Low', description: 'Мир ждет тебя', date: '2020-01-01' },
    { done: false, title: 'Вынести мусор', priority: 'Medium', description: 'Уже пора, мусор начинает жить своей жизнью', date: '2019-03-12' },
    { done: true, title: 'Сделать домашку по реакту', priority: 'High', description: 'Очень срочно слать пул реквест', date: '2018-01-18' }
].map(item => ({ ...item, id: getId() }));

const saveTasks = () => localStorage.setItem(LS_KEY, JSON.stringify(tasks));

export const getTasks = () => new Promise(resolve => setTimeout(resolve, 0, [...tasks]));

export const addTask = data => {
    let task = { ...data, id: getId() };
    tasks.push(task);
    saveTasks();
    return new Promise(resolve => setTimeout(resolve, 1000, task));
}

export const removeTask = id => {
    tasks = tasks.filter(item => item.id !== id);
    saveTasks();
    return new Promise(resolve => setTimeout(resolve, 1000, tasks))
}

export const updateTask = (id, changes) => {
    tasks = tasks.map(item => item.id !== id ? item : {
        ...item,
        ...changes
    });
    saveTasks();
    return new Promise((resolve) => setTimeout(resolve, 1000, {
        ...tasks.find(item => item.id === id)
    }))
}