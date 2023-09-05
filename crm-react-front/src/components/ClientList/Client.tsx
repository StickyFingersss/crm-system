import styles from './Client.module.css';

export const Client = (): JSX.Element => {
  return (
    <div className={styles.oneClientList}>
      <h3>John Smit</h3>
      <h3>630098</h3>
      <h3>6300$</h3>
      <input
        name="managers"
        className={styles.statusInput}
        autoComplete="off"
        list="managers"
      />
      <datalist id="managers">
          <option>John Smit</option>
          <option>Max Revo</option>
          <option>Elena Green</option>
      </datalist>
      <h3>06.08.23</h3>
      <input
        name="status"
        className={styles.statusInput}
        autoComplete="off"
        list="status"
      />
      <datalist id="status">
          <option>Deposit</option>
          <option>No money</option>
          <option>In work</option>
      </datalist>
      
    </div>
  )
}
