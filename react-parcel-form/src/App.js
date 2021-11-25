import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import Parcel from 'single-spa-react/parcel'
import { emitEvent } from '@poc/react-utils'

const App = ({name}) => {

     const [task, updateTask] = useState('')

     const handleChange = event => {
         updateTask(event.target.value)
     }

     const handleSubmit = event => {
        event.preventDefault()
        emitEvent('@poc/react-parcel-form/task/add', {
            id: uuid(),
            description: task
        })
        updateTask( '')
     }

     return (
         <>
            <h1>{name}</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={task} />
                <button>Add</button>
            </form>
            <Parcel 
                config={() => System.import('@poc/react-parcel')}
            />
         </>
     )

}

export default App