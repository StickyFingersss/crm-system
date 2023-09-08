import styles from './Comments.module.css';

import { useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMyDispatch, useMySelector } from '../../redux/hooks';

import { Comment } from './Comment';
import { fetchAddComment, fetchAllComments } from '../../redux/thunkActions';

export const Comments = () => {

  const { id } = useParams()

  const [dataInput, setDataInput] = useState({ comment: ''});
  const dispatch = useMyDispatch();

  const changeHandler = (el: ChangeEvent<HTMLInputElement>): void => {
    setDataInput((prev) => ({ ...prev, [el.target.name]: el.target.value }));
  };

  const body = {dataInput: dataInput, id: id};

  const comments = useMySelector((store) => store.commentSlice.comments);

  useEffect(() => {
    void dispatch(fetchAllComments());
  }, [dispatch, comments?.length]);

  const addHandler = async (): Promise<void> => {
    void dispatch(fetchAllComments());
    if (dataInput.comment) {
      void dispatch(fetchAddComment(body));
      setDataInput({ comment: '' });
    }
  };

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
        <button type='button' className={styles.btnPublish} onClick={() => {addHandler()}}>publish</button>
      </div>
      <div className={styles.comments}>
        {comments?.filter((el) => el.customer_id === Number(id)).map((el) => <Comment createdAt={el.createdAt} text={el.text} user_id={el.user_id}/>)}
      </div>
    </div>
  ) 
}
