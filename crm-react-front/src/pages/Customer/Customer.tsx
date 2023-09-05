import { Client } from '../../components/ClientList/Client';
import { Comment } from '../../components/Comments/Comment';
import { Comments } from '../../components/Comments/Comments';

export const Customer = () => {
  return (
    <>
      <div>Client Page</div>
      <div className="container">
        <Client />
        <Comment />
        <Comments />
      </div>
    </>
  );
};
