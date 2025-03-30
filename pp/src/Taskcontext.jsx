import React, {useState, createContext, useContext} from "react";

const Todocontext = createContext()

export default function TaskProvider({children}){
    const [task, setTask] = useState(() => {
        const savedTask = localStorage.getItem("task")
        return savedTask ? JSON.parse(savedTask) : []
    })

    const addTask = (newTask) => {
        setTask(prev => {
            const updatedTask = [...prev, newTask]
            localStorage.setItem("task", JSON.stringify(updatedTask))
            return updatedTask
        })
    }

    const deleteTask = (index) => {
        setTask(prev => {
            const updatedTask = prev.filter((_,i) => i !== index)
            localStorage.setItem("task", JSON.stringify(updatedTask))
            return updatedTask
        })
    }

    const editTask = (updatedText, index) => {
        setTask(prev =>{
            const updatedTask = prev.map((task,i) => i === index ? {task : updatedText} : task)
            localStorage.setItem("task", JSON.stringify(updatedTask))
            return updatedTask
        })
    }

    return(
        <Todocontext.Provider value={{task, addTask, deleteTask, editTask}}>
            {children}
        </Todocontext.Provider>
    )
}

export const useTodo = () => useContext(Todocontext)