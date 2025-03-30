import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import TaskProvider, {useTodo} from "./Taskcontext";

export default function App(){
  return(
    <TaskProvider>
    <div className="h-screen w-screen bg-[#2d2424] flex justify-center items-center">
      <div className="w-[576px] h-[527px] bg-[#5c3d2e] rounded-[40px] flex flex-col items-center gap-y-6 p-6 relative">
      <h1 className="w-[294px] h-[73px] bg-[#dcae73] rounded-[20px] font-[Nunito] text-[30px] flex justify-center items-center   mt-6 text-center">To-Do App</h1>
      <TaskInput/>
      <TaskList/>
      </div>
    </div>
  </TaskProvider>
  )
}