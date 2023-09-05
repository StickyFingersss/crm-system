import styles from './CustomerInfo.module.css';

export const CustomerInfo = (): JSX.Element => {
  return (
    <div className={styles.mainInfo}>
      <div className="oneRow">
        <table>

          <tr>
            <th>name</th>
            <th>id</th>
            <th>comments</th>
            <th>responsible</th>
            <th>status</th>
          </tr>

          <tr>
            <td>John Smit</td>
            <td>630098</td>
            <td>11</td>
            <td>
              <input
                name="managers"
                list="managers"
              />
              <datalist id="managers">
                  <option>John Smit</option>
                  <option>Max Revo</option>
                  <option>Elena Green</option>
              </datalist>
            </td>
            <td>
              <input
                name="status"
                list="status"
              />
              <datalist id="status">
                  <option>Deposit</option>
                  <option>No money</option>
                  <option>In work</option>
              </datalist>
            </td>    
          </tr>

        </table>
      </div>
      <div className={styles.secondRow}>
        <h2>email</h2>
        <h2>phone number</h2>
      </div>
    </div>
  )
}
