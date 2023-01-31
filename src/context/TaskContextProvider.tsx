import { createContext, useCallback, useContext, useState } from "react";

interface TaskContextProviderProps {
  children: React.ReactNode
}

interface TaskProps {
  id: string;
  comment: string;
  finished: boolean;
}

type ContextProps = {
  tasks: TaskProps[];
  addTask: (task: TaskProps) => void;
  deleteTask: (id: string) => void;
  toggleFinishedTask: (id: string) => void;
}

const TaskContext = createContext({} as ContextProps);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const addTask = useCallback((task: TaskProps) => {
    setTasks((tasks) => [...tasks, task])
  }, [])

  const deleteTask = useCallback((id: string) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }, [])

  const toggleFinishedTask = useCallback((id: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, finished: !task.finished }
      }
      return task
    })

    setTasks(newTasks)
  }, [tasks])

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      deleteTask,
      toggleFinishedTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext);
}