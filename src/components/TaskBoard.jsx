import styles from './TaskBoard.module.css'
import TaskColumn from './TaskColumn'

export default function TaskBoard() {
    return (
        <div className={styles.container}>
            <TaskColumn title="Research"/>
            <TaskColumn title="Design"/>
            <TaskColumn title="In Review"/>
            <TaskColumn title="Development"/>
            <TaskColumn title="Fixing"/>
        </div>
    )
}