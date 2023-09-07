import styles from './Comments.module.css';

import { ChangeEvent, useEffect, useState } from 'react';
import { useMyDispatch, useMySelector } from '../../redux/hooks';

import { Comment } from './Comment';
import { fetchAddComment, fetchAllComments } from '../../redux/thunkActions';

export const Comments = () => {

  const [dataInput, setDataInput] = useState({ comment: ''});
  const dispatch = useMyDispatch();

  const changeHandler = (el: ChangeEvent<HTMLInputElement>): void => {
    setDataInput((prev) => ({ ...prev, [el.target.name]: el.target.value }));
  };

  const addHandler = async (): Promise<void> => {
    if (dataInput.comment) {
      void dispatch(fetchAddComment(dataInput));
      setDataInput({ comment: '' });
    }
  };

  const comments = useMySelector((store) => store.commentSlice.comments);

    useEffect(() => {
    void dispatch(fetchAllComments());
  }, [dispatch]);

  return (
    <div className={styles.mainComments}>
      <div className={styles.writeComment}>
        <h2>Write new comment</h2>
        <input
        name='comment' 
        placeholder='comment text'
        onChange={changeHandler}
        value={dataInput.comment} 
        />
        <button type='button' className={styles.btnPublish} onClick={() => void addHandler()}>publish</button>
      </div>
      <div className={styles.comments}>
        {comments?.map((el) => <Comment createdAt={el.createdAt} text={el.text} user_id={el.user_id}/>)}
      </div>
    </div>
  ) 
}
