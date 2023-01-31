import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTask } from '../context/TaskContextProvider';
import styles from './NewTask.module.css';

export function NewTask() {
    const { addTask } = useTask();
    const [newCommentTask, setNewCommentTask] = useState('');
   
    function handleCreateNewCommentTask(event: FormEvent) {
        event.preventDefault();
        const newTask = {
            id: uuidv4(),
            comment: newCommentTask,
            finished: false
        }
        addTask(newTask);
        setNewCommentTask('');
    }

    function handleNewCommentTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentTask(event.target.value);
    }

    function handleNewCommentTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    return (
        <form className={styles.newTask} onSubmit={handleCreateNewCommentTask}>
            <textarea
                className={styles.input}
                value={newCommentTask}
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewCommentTaskChange}
                onInvalid={handleNewCommentTaskInvalid}
                required
            />
            <button
                className={styles.button}
                type="submit"
            >
                Criar
                <PlusCircle size={20} />
            </button>
        </form>
    );
}