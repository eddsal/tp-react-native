import {
    createContext,
    useState,
    useCallback,
    useEffect
  } from "react";


  export const ListTaskContext = createContext();


  export default function ListTaskProvider({ children }) {

    const getTasks = () => {
        const tasks = localStorage.getItem('tasks') || [];
        return tasks;
    };

    const [ tasks, setTasks ] = useState(getTasks);


    const addTask = useCallback(
        async (item) => {
            setTasks([...tasks, item]);
          localStorage.setItem('tasks', JSON.stringify([...tasks, item]));
        },
        [tasks]
      );

    const deleteTask = useCallback(
        async (item) => {
            setTasks(tasks.filter((task) => task.id !== item.id));
            localStorage.setItem('tasks', JSON.stringify([...tasks, item]));
        },
    [tasks]
    );

    const editTask = useCallback(
        async (item) => {
            setTasks(tasks.map((task) => (task.id !== item.id ? _it : item)));
            localStorage.set("tasks", JSON.stringify([...tasks, item]))
        },
        [tasks]
      );

      return (
        <ListTask.Provider
          value={{
            tasks,
            addTask,
            deleteTask,
            editTask
          }}
        >
          {children}
        </ListTask.Provider>
      );


  }


