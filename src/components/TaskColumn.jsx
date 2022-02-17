import styles from './TaskColumn.module.css'

export default function TaskColumn() {
    return (
        <div>
            <div className={styles.header}>
                <h2 className={styles.title}>Research</h2>
                <button className={styles.primaryButton}>+</button>
            </div>
            <button className={styles.secondaryButton}>+ Add a Card</button>
        </div>
    )
}