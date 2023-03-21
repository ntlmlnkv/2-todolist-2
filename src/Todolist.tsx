import React, { useState } from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    // filterTasks: (buttonName: string) => void
}

export function Todolist(props: PropsType) {

    let [filterValue, setfilterValue]=useState('All')
    const filterTasks = (buttonName: string) => {
        setfilterValue(buttonName)
    }
    let filteredTasks = props.tasks


    if (filterValue === 'Active') {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }
    if (filterValue === 'Completed') {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {filteredTasks.map(el => {
                return (
                    <li key={el.id}>
                        <button onClick={() => props.removeTask(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone} />
                        <span>{el.title}</span>
                    </li>
                )
            })}
            {/* <li><input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone} /> <span>{props.tasks[2].title}</span></li> */}
        </ul>
        <div>
            <button onClick={() => filterTasks('All')}>All</button>
            <button onClick={() => filterTasks('Active')}>Active</button>
            <button onClick={() => filterTasks('Completed')}>Completed</button>
        </div>
    </div>
}




