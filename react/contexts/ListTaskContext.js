import {
    createContext,
    useState,
    useCallback,
    useEffect
  } from "react";


  import AsyncStorage from '@react-native-async-storage/async-storage';



  export const ListTaskContext = createContext();


  export default function ListTaskProvider({ children }) {

    const getTasks = () => {
        const tasks = AsyncStorage.getItem('tasks') || [];
        return tasks;
    };

    const [ tasks, setTasks ] = useState(getTasks);


    const addTask = useCallback(
        async (item) => {
            setTasks([...tasks, item]);
          AsyncStorage.setItem('tasks', JSON.stringify([...tasks, item]));
        },
        [tasks]
      );

    const deleteTask = useCallback(
        async (item) => {
            setTasks(tasks.filter((task) => task.id !== item.id));
            AsyncStorage.setItem('tasks', JSON.stringify([...tasks, item]));
        },
    [tasks]
    );

    const editTask = useCallback(
        async (item) => {
            setTasks(tasks.map((task) => (task.id !== item.id ? _it : item)));
            AsyncStorage.set("tasks", JSON.stringify([...tasks, item]))
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


