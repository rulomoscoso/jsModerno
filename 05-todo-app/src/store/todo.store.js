import { Todo } from '../todos/models/todo.models';

const filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo')
    ],
    filter: filters.All,
} 

const initStore = () => {
    console.log(state);
    console.log('InitStore 🥑');
}

export default {
    initStore,
}