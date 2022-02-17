import styles from './TaskBoard.module.css'
import TaskColumn from './TaskColumn'

export default function TaskBoard() {
    return (
        <div className={styles.container}>
            <TaskColumn />
        </div>
    )
}