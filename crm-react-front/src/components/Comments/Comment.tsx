import styles from './Comment.module.css';

export const Comment = ({createdAt, text, user_id}) => {
  return (
    <div className={styles.mainComment}>
        <h2>{createdAt}</h2>
        <h2>{text}</h2>
        <h2>{user_id}</h2>
    </div>
  )
}
