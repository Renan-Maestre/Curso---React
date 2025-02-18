import { useState } from "react";
import AddTasks from "./componets/AddTasks";
import Tasks from "./componets/Tasks";

function App(){

  const [tasks, setTasks] = useState([{
    id:1,
    title:"Estudar programação",
    description:"Estudar programação para se tornar um desenvolvedor full stack.", 
    iscompleted:false 
  },
  {
    id: 2,
    title: "Praticar exercícios",
    description: "Fazer exercícios físicos para manter a saúde.",
    iscompleted: false
  },
  {
    id: 3,
    title: "Ler um livro",
    description: "Ler um livro de ficção científica.",
    iscompleted: false
  }])

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6"> 
      <div className="w-[500px]">

        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerencidor de Tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks}/> 
        </div>

    </div>
  )
}

export default App;