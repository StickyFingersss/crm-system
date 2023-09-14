import React from 'react';

import styles from './NavBar.module.css';

export const NavBar = (props) => {
  const { buttons, select } = props;
  // const buttons = [
  //   { name: 'login', callback: () => console.log('login') },
  //   { name: 'logout', callback: () => console.log('logout') },
  //   { name: 'register', callback: () => console.log('register') },
  // ];

  return (
    <>
      <div className={styles.modalBackground}>
        <ul>
          {buttons.map((el) => (
            <li>
              <button onClick={el.callback}>{el.name}</button>
            </li>
          ))}
        </ul>

        {/* {select && (
          <select>
            {select.map((el) => (
              <option value={el.toLowerCase()}>{el}</option>
            ))}
          </select>
        )} */}
      </div>
    </>
  );
};
