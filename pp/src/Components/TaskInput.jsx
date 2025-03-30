import React, {useRef} from "react";
import { useTodo } from "../Taskcontext";

export default function TaskInput(){
    const {addTask} = useTodo()
    const taskref = useRef("")

    function handlesubmit(e){
        e.preventDefault()

        const task = taskref.current.value.trim()
        if (!task) return
        addTask({task})
        taskref.current.value = ""
    }

    return(
        <form onSubmit={handlesubmit}>
            <div className="w-[389px] h-[73px] rounded-[20px] bg-[#fdc994] flex justify-center items-center gap-[8px]">
                <input className="font-Nunito w-[259px] h-[39px] rounded-[10px]" type="text" ref={taskref} placeholder="Enter the Task"/>
                <button className="w-[89px] h-[39px] rounded-[10px] bg-[#B85C38]" type="submit">Add Task</button>
            </div>
        </form>
    )
}

