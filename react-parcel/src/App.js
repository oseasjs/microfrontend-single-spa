import React, { useState, useEffect } from 'react'
import { listenEvent } from '@poc/react-utils'

const App = ({name}) => {
    const [tasks, updateTasks] = useState([])

    useEffect(() => {
        listenEvent('@poc/react-parcel-form/task/add', event => {
            updateTasks(oldTasks => [
                ...oldTasks,
                event.detail
            ])
        })
    }, [])

    return (
        <>
            <h1>{name}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}

export default App