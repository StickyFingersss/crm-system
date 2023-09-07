import styles from './Client.module.css';

export const ClientMax = ({ id, name, balance, phone, email, status, manager_id}): JSX.Element => {
  return (
    <div className={styles.oneClientList}>
      <button type='button'>{name}</button>
      <h3>{id}</h3>
      <h3>{balance}</h3>
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
      <h3>{manager_id}</h3>
      <input
        name="status"
        className={styles.statusInput}
        autoComplete="off"
        list="status"
        value={status? status : ''}
      />
      <datalist id="status">
          <option>Deposit</option>
          <option>No money</option>
          <option>In work</option>
      </datalist>
      
    </div>
  )
}
