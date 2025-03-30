import React, {useState} from "react";
import { useTodo } from "../Taskcontext";

export default function TaskList(){
    const {task,deleteTask, editTask} = useTodo()
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState("")

    return(
        <div className="bg-[#c1a37d] w-[489px] h-[278px] rounded-[20px] mb-[15px] flex flex-col justify-start items-center overflow-hidden p-4">
            {task.length === 0 ? 
                <p className="font-[Nunito] text-[20px]">No Task Today 😅</p> : 
                    <ul className="list-decimal font-[Oswald] pl-5 pr-2 space-y-3 max-h-[200px] overflow-y-auto w-full">
                        {task.map((item,index) => 
                            <li key={index} className="flex items-center space-x-3">
                                {editIndex === index ? (
                                    <>
                                        <input className="border p-1 rounded-md" type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                        <button className="w-[89px] h-[39px] rounded-[10px] bg-[#B85C38] ml-2" onClick={() => {
                                            editTask(editText,index)
                                            setEditIndex(null)
                                            setEditText("")
                                        }}>Save Task</button>
                                    </>
                                )
                                    :
                                (
                                    <div className="flex justify-between items-center w-full gap-x-4">
                                        <span className="break-words w-full">{item.task}</span>
                                        <div className="flex gap-x-3 shrink-0">
                                            <button className="w-[65px] h-[30px] rounded-[10px] bg-[#B85C38] font-[Nunito] text-[11px]" onClick={() => deleteTask(index)}>Delete Task</button>
                                            <button className="w-[65px] h-[30px] rounded-[10px] bg-[#B85C38] font-[Nunito] text-[11px]" onClick={() => {
                                                setEditIndex(index)
                                                setEditText(item.task)
                                            }}>Edit Task</button>
                                        </div>
                                    </div>
                                )}
                            </li>)}
                    </ul>}
        </div>
    )
}

// import React, {useState} from "react";
// import { useTodo } from "../Taskcontext";

// export default function TodoList(){
//     const {task, deleteTask, editTask} = useTask()
//     const [editIndex, setEditIndex] = useState(null)
//     const [editText, setEditText] = useState("")

//     return(
//         <div className="bg-[#c1a37d] w-[489px] h-[278px] rounded-[20px] mb-[15px] flex flex-col justify-center items-center flex-wrap">
//             {task.length === 0 ? <p className="font-[Nunito] text-[20px]/">No Task today 😀</p> : 
//                 <ul className="list-decimal font-[Oswald] pl-5 pr-2 space-y-3 max-h-[200px] overflow-y-auto">
//                     {task.map((item,index) => 
//                         <li key={index} className="flex items-center space-x-3">
//                             {editIndex === index ? (
//                                 <>
//                                     <input className="border p-1 rounded-md" type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
//                                     <button className="w-[89px] h-[39px] rounded-[10px] bg-[#B85C38] ml-2" onClick={() => {
//                                         editTask(index,editText)
//                                         setEditIndex(null)
//                                         setEditText("")
//                                     }}>
//                                         Save Task
//                                     </button>
//                                 </>
//                             )
//                                 :
//                             (
//                                 <div className="flex justify-between items-center w-full gap-x-4">
//                                   <span className="break-words w-full">{item.task}</span>
//                                   <div className="flex gap-x-3 shrink-0">
//                                       <button className="w-[65px] h-[30px] rounded-[10px] bg-[#B85C38] font-[Nunito] text-[11px]" onClick={() => deleteTask(index)}>Delete Task</button>
//                                       <button className="w-[65px] h-[30px] rounded-[10px] bg-[#B85C38] font-[Nunito] text-[11px]" onClick={() => {
//                                         setEditIndex(index)
//                                         setEditText(item.task)
//                                       }}>Edit Task</button>
//                                     </div>
//                                 </div>
//                             )}
//                         </li>)}
//                 </ul>}
//         </div>
//     )
// }