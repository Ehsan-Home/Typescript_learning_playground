interface ToDo {
    id:number,
    title:string,
    status: Status,
    completedOn?: Date
}

enum Status {
    Done="done",
    InProgress = "in-progress",
    ToDoStatus = "todo"
}

const todoItems:ToDo[] = [
    { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.InProgress },
    { id: 3, title: "Write the best app in the world", status: Status.ToDoStatus },
]

function addTodoItem(todo:string) {
    const id = getNextId(todoItems)

    const newTodo:ToDo = {
        id,
        title: todo,
        status: Status.ToDoStatus,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends ToDo>(items:T[]) {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))