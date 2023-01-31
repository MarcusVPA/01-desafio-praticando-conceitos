import { useTask } from '../context/TaskContextProvider';
import { Task } from './Task';
import clipboardIcon from '../assets/clipboard-icon.svg';
import styles from './TaskList.module.css';

export function TaskList() {
    const { tasks } = useTask();
    const totalTasks = tasks.length;
    const finishedTasks = tasks.filter(task => task.finished).length;

    return (
        <div className={styles.tasks}>
            <header className={styles.header}>
                <div className={styles.headerInformation}>
                    <span className={styles.totalTasks}>Tarefas criadas</span>
                    <span className={styles.badge}>{totalTasks}</span>
                </div>
                <div className={styles.headerInformation}>
                    <span className={styles.doneTasks}>Concluídas</span>
                    <span className={styles.badge}>{finishedTasks} de {totalTasks}</span>
                </div>
            </header>
            <div className={styles.listTasks}>
                {
                    (tasks.length > 0) ?
                    tasks.map(({id, comment, finished}) => {
                        return (
                            <Task 
                                key={id} 
                                id={id} 
                                comment={comment} 
                                finished={finished}
                            />
                        );
                    })
                    :
                    <div className={styles.emptyList}>
                        <img className={styles.clipboardIcon} src={clipboardIcon} alt="Clipboard Icon" />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>                  
                    </div>
                }
            </div>
        </div>
    );
}