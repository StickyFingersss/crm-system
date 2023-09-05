import React, { useState, ChangeEvent } from 'react';
import styles from './TaskCreator.module.css'; // Импорт классов стилей из файла

type TaskState = {
  title: string;
  body: string;
};

function TaskCreator() {
  const [task, setTask] = useState<TaskState>({ title: '', body: '' });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, title: event.target.value });
  };

  const handleBodyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, body: event.target.value });
  };

  const createTask = () => {
    setTask({ title: '', body: '' });
  };

  return (
    <div className={styles.taskCreator}>
      <h2>Task Creator</h2>
      <div>
        <label className={styles.label}>Title:</label>
        <input
          className={styles.input}
          type="text"
          value={task.title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label className={styles.label}>Body:</label>
        <input className={styles.input} type="text" value={task.body} onChange={handleBodyChange} />
      </div>
      <button className={styles.button} onClick={createTask}>
        Create Task
      </button>
    </div>
  );
}

export default TaskCreator;
