import styles from './TaskColumn.module.css'

export default function TaskColumn(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{props.title}</h2>
                <button className={styles.primaryButton}>+</button>
            </div>
            <div className={styles.cards}>
            </div>
            <button className={styles.secondaryButton}>+ Add a Card</button>
        </div>
    )
}