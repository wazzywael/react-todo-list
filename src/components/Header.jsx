import styles from './Header.module.css'

export default function Header() {
    return ( 
    <header className={styles.header}>
      <h1>Tasks Board</h1>
        <button className={styles.button}>
          Show Backlog
        </button> 
      </header>
    );
  }