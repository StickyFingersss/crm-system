import { ClientMax } from '../../components/ClientList/ClientMax';
import { Comments } from '../../components/Comments/Comments';

export const Customer = () => {
  return (
    <>
      <div>Client Page</div>
      <div className="container">
        <ClientMax />
        <Comments />
      </div>
    </>
  );
};
