import styles from './Comments.module.css';

import { Comment } from './Comment';

export const Comments = () => {
  return (
    <div className={styles.mainComments}>
      <div className={styles.writeComment}>
        <h2>Write new comment</h2>
        <textarea></textarea>
        <button type='button' className={styles.btnPublish}>publish</button>
      </div>
      <div className={styles.comments}>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </div>
  ) 
}
