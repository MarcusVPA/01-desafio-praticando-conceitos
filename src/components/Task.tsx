import { Trash } from 'phosphor-react';
import { useTask } from '../context/TaskContextProvider';
import styles from './Task.module.css';

interface TaskProps {
    id: string,
    finished: boolean,
    comment: string
}

export function Task({ id, finished, comment }: TaskProps) {
    const { deleteTask, toggleFinishedTask } = useTask();

    function handleDeleteTask(id: string) {
        deleteTask(id);
    }

    return (
        <div key={id} className={styles.task}>
            <label className={styles.checkboxLabel}>
                <input 
                    className={styles.inputCheckbox} 
                    type="checkbox" 
                    onChange={() => toggleFinishedTask(id)} 
                    checked={finished} 
                />
                <span className={styles.checkmark}></span>
            </label>
            <p className={styles.paragraph}>{comment}</p>
            <button
                className={styles.trashIcon}
                onClick={() => handleDeleteTask(id)}
            >
                <Trash size={20} />
            </button>
        </div>
    );
}