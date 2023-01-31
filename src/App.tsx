import { TaskContextProvider } from './context/TaskContextProvider';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './global.css';
import styles from './app.module.css';

export function App() {
  
  return (
    <>
      <TaskContextProvider>
        <Header />
        <main className={styles.wrapper}>       
          <NewTask />
          <TaskList />
        </main>
      </TaskContextProvider>
    </>
  )
}
